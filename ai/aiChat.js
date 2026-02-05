const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

let waitResponse = false;

async function AIFeedback(message) {
    return new Promise(resolve => {setTimeout(() => {
        
        resolve("Пока что я не знаю ответа на этот вопрос.");

    }, Math.random()*500+500)});
}
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = text;
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
    AIFeedback(message).then(response => {
        placeholder.textContent = response;
        chatContainer.scrollTop = chatContainer.scrollHeight;
        waitResponse = false;
    })
}

// Отправка по клику и по Enter
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
