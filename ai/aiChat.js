const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
let messages = [{"role": "system", "content": "Прими на себя роль эксперта в химми"}]
let waitResponse = false;

function formater(text) {
    let strongClose = false;
    for (let i = 0; i < text.length-1; ++i) {
        if (text[i] == '*') {
            if (text[i+1] == '*') {
                // <strong></strong>
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
 * Функция для общения с GenAPI
 * @param {string} message - Ваше сообщение для нейросети
 * @param {string} token - Ваш API токен
 * @param {string} modelId - ID модели (по умолчанию gpt-4.1)
 * @returns {Promise<string>} - Ответ нейросети
 */
async function AIFeedback(message, token, modelId = 'gemini-2-5-flash-lite') {
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    try {
        // 1. Создаем запрос на генерацию
        messages.push({"role": "user", "content": message})
        const createRes = await fetch(`https://api.gen-api.ru/api/v1/networks/${modelId}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                'messages': messages
            })
        });

        const createData = await createRes.json();

        if (!createRes.ok) {
            throw new Error(`Ошибка создания запроса: ${createData.message || createRes.statusText}`);
        }

        const requestId = createData.request_id;
        //console.log(`Задача создана, ID: ${requestId}. Ждем ответа...`);

        // 2. Опрос статуса (Polling)
        while (true) {
            const statusRes = await fetch(`https://api.gen-api.ru/api/v1/request/get/${requestId}`, {
                method: 'GET',
                headers: headers
            });

            const statusData = await statusRes.json();

            if (statusData.status === 'success') {
                // Возвращаем финальный текстовый результат
                messages.push({"role": "assistant", "content": statusData.full_response[0].message.content})
                return statusData.full_response[0].message.content; 
            } 
            
            if (statusData.status === 'failed' || statusData.status === 'error') {
                throw new Error(`Нейросеть вернула ошибку: ${JSON.stringify(statusData.result || 'Unknown error')}`);
            }

            // Если еще в процессе (processing/starting), ждем 2 секунды перед следующей проверкой
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

    } catch (error) {
        console.error('Ошибка при работе с GenAPI:', error.message);
        throw error;
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

    // Добавляем сообщение пользователя
    addMessage(message, true);
    userInput.value = '';

    // Показываем "..." от ИИ
    const placeholder = addMessage('...', false);
    waitResponse = true;

    // Имитация задержки перед ответом
    AIFeedback(message, window.GEN_API_API_KEY).then(response => {
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
