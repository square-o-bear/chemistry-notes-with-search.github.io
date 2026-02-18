const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const modelSelect = document.getElementById('model-select');
const clearButton = document.getElementById('clear-button');
const messages = JSON.parse(localStorage.getItem('aiHistory') || '[{"role": "system", "content": "Прими на себя роль эксперта в химми"}]');
let waitResponse = false;

function formater(text) {
    let strongClose = false;
    for (let i = 0; i < text.length-1; ++i) {
        if (text[i] == '<') {
            text = text.slice(0, i) + '&lt' + text.slice(i + 1);
        }
        else if (text[i] == '>') {
            text = text.slice(0, i) + '&gt' + text.slice(i + 1);
        }
        else if (text[i] == '*') {
            if (text[i+1] == '*') {
                text = text.slice(0, i) + (!strongClose ? "<strong>" : '</strong>') + text.slice(i + 2);
                strongClose = !strongClose;
            }
            else
                text = text.slice(0, i) + '•' + text.slice(i + 1);
        }
    }
    
    return text;
}

/**
 * Функция для общения с GenAPI через Cloudflare Worker
 * @param {string} message - Ваше сообщение для нейросети
 * @param {string} modelId - ID модели (по умолчанию gemini-2-5-flash-lite)
 * @returns {Promise<string>} - Ответ нейросети
 */
async function AIFeedback(message, modelId = 'gemini-2-5-flash-lite') {
    try {
        // Добавляем сообщение пользователя в историю
        messages.push({ "role": "user", "content": message });
        
        // URL вашего Cloudflare Worker
        const WORKER_URL = 'https://chemistry-notes-with-search.mika-ushakov.workers.dev/api/genapi';
        
        // Отправляем запрос к прокси
        const response = await fetch(WORKER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                modelId: modelId,
                messages: messages
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        
        // Добавляем ответ в историю
        if (data.response) {
            messages.push({ "role": "assistant", "content": data.response });
            localStorage.setItem('aiHistory', JSON.stringify(messages));
        }
        
        return data.response;
        
    } catch (error) {
        console.error('Ошибка при создания ответа от ИИ:', error.message);
        //throw error;
    }
}

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.innerHTML = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return messageDiv;
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '' || waitResponse) return;

    addMessage(message, true);
    userInput.value = '';

    const placeholder = addMessage('...', false);
    waitResponse = true;

    AIFeedback(message, modelSelect.value).then(response => {
        placeholder.innerHTML = formater(response);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        waitResponse = false;
    })
}

// Отправка по клику и по Enter
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

clearButton.addEventListener('click', () => {
    const confirmed = confirm('Вы уверены, что хотите удалить историю общения?');
    if (!confirmed) return;

    localStorage.removeItem('aiHistory');
    location.reload();
});