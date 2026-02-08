function syda_nado_vstavlyat_to_chto_otvetila_neyronka(el1, el2) {
    na_eto_zabey_ono_dolzhno_rabotat[0] = {
        color: el1,  
        formula: el2 
    };
    updateOutputDisplay();
}

/**
 * Функция для общения с GenAPI
 * @param {string} message - Ваше сообщение для нейросети
 * @param {string} token - Ваш API токен
 * @param {string} modelId - ID модели (по умолчанию gpt-4.1)
 * @returns {Promise<string>} - Ответ нейросети
 */
async function AIFeedback(message, token='sk-1f2fKezCzkIq4VapM5d6vAXJmKwRuQnNdvvQbMw7dNdJjq5Wj0gNh8nazPZe', modelId = 'gemini-2-5-flash-lite') {
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    try {
        // 1. Создаем запрос на генерацию
        const createRes = await fetch(`https://api.gen-api.ru/api/v1/networks/${modelId}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                'messages': [{"role": "system", "content": "Выведи результат смешивание двух веществ в формате, первая строка - формула получившиеся вещества, на 2 - цвет вещества в хекс виде"}, {"role": "user", "content": message}]
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

function coroche_vot_v_ety_vunchziy_ti_dolzhen_vshit_svoy_neyronky(el1, el2) {
    AIFeedback(`${el1} ${el2}`).then(response => {
        let answer = response.split('\n');
        syda_nado_vstavlyat_to_chto_otvetila_neyronka(answer[1], answer[0]);
    })
    
    /*setTimeout(() => {
        // вот здесь ты должен написать свой дипсик. можешь делать тут всё что угодно. на вход даются 2 элемента, первый и второй. для того, чтобы вывести результат вызови функцию "syda_nado_vstavlyat_to_chto_otvetila_neyronka" она буквально над этой находиться. вобщем она должна запихнуть нужные данные в нужный массив и из него уже всё выведется на экран. данные должны запихиваться так: сначала идет цвет, в формате #ffffff, затем сама форсула
        syda_nado_vstavlyat_to_chto_otvetila_neyronka('#000', 'ABOBA');
        return 0;
    }, 1000);*/
}

let eto_to_chto_nado_neyronke = ['', ''];

let na_eto_zabey_ono_dolzhno_rabotat = [{ color: 'transparent', formula: '?' }];

const flasksTop = document.getElementById('flasks-top');
const flaskLeft = document.getElementById('flask-left');
const flaskRight = document.getElementById('flask-right');
const labelLeft = document.getElementById('label-left');
const labelRight = document.getElementById('label-right');
const outputLabel = document.getElementById('output-label');
const liquidLeft = document.getElementById('liquid-left');
const liquidRight = document.getElementById('liquid-right');
const outputFlask = document.getElementById('output-flask');
const outputContent = document.getElementById('output-content');
const mixBtn = document.getElementById('mix-btn');
const flowLeft = document.getElementById('flow-left');
const flowRight = document.getElementById('flow-right');
const flowCenter = document.getElementById('flow-center');

const elementColors = {'H': '#f8f9fa', 'N': '#f8f9fa', 'O': '#ffcccc', 'C': '#333333', 'Na': '#ffeb99', 'Cl': '#cce5ff', 'Fe': '#8b4513', 'Au': '#ffd700', 'Ag': '#c0c0c0', 'Cu': '#b87333', 'S': '#ffff99', 'P': '#ff9999'};

// Drag & Drop обработчики
flasksTop.addEventListener('dragstart', (e) => {
    const flask = e.target.closest('.flask');
    if (flask) {
        e.dataTransfer.setData('text/plain', flask.dataset.element);
        flask.style.opacity = '0.7';
    }
});

flasksTop.addEventListener('dragend', () => {
    document.querySelectorAll('.flask').forEach(f => f.style.opacity = '1');
});

// Левый флакон
flaskLeft.addEventListener('dragover', (e) => { 
    e.preventDefault(); 
    flaskLeft.classList.add('filled'); 
});
flaskLeft.addEventListener('dragleave', () => { 
    flaskLeft.classList.remove('filled'); 
});
flaskLeft.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = e.dataTransfer.getData('text/plain');
    labelLeft.textContent = element;
    liquidLeft.style.height = '45%';
    liquidLeft.style.background = elementColors[element];
    flaskLeft.classList.add('filled');
    flaskLeft.className = `machine-flask filled ${element}`;
    flaskLeft.dataset.element = element;
    
    eto_to_chto_nado_neyronke[0] = element;
});

// Правый флакон
flaskRight.addEventListener('dragover', (e) => { 
    e.preventDefault(); 
    flaskRight.classList.add('filled'); 
});
flaskRight.addEventListener('dragleave', () => { 
    flaskRight.classList.remove('filled'); 
});
flaskRight.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = e.dataTransfer.getData('text/plain');
    labelRight.textContent = element;
    liquidRight.style.height = '45%';
    liquidRight.style.background = elementColors[element];
    flaskRight.classList.add('filled');
    flaskRight.className = `machine-flask filled ${element}`;
    flaskRight.dataset.element = element;
    
    eto_to_chto_nado_neyronke[1] = element;
});

// Обновление выходного флакона
function updateOutputDisplay() {
    const result = na_eto_zabey_ono_dolzhno_rabotat[0];
    outputContent.style.background = result.color;
    outputLabel.textContent = result.formula;
    outputFlask.classList.remove('empty');
}

// КНОПКА - вызывает пустую функцию для логики реакции
mixBtn.addEventListener('click', () => {
    if (eto_to_chto_nado_neyronke[0] && eto_to_chto_nado_neyronke[1]) {
        mixBtn.disabled = true;

        coroche_vot_v_ety_vunchziy_ti_dolzhen_vshit_svoy_neyronky(eto_to_chto_nado_neyronke[0], eto_to_chto_nado_neyronke[1]);

        // Анимация потоков
        flowLeft.style.opacity = '1';
        flowLeft.style.width = '100%';
        flowRight.style.opacity = '1';
        flowRight.style.width = '100%';

        setTimeout(() => {
            flowCenter.style.opacity = '1';
            flowCenter.style.width = '100%';
        }, 500);

        setTimeout(() => {
            outputFlask.classList.remove('empty');
            outputContent.style.height = '50%';
        }, 1200);

        setTimeout(() => {
            outputContent.style.height = '70%';
        }, 1800);

        setTimeout(() => {
            flowLeft.style.width = '0%';
            flowRight.style.width = '0%';
            flowCenter.style.width = '0%';
            setTimeout(() => {
                flowLeft.style.opacity = '0';
                flowRight.style.opacity = '0';
                flowCenter.style.opacity = '0';
            }, 500);
            mixBtn.disabled = false;
        }, 3000);
    }
});

// Двойной клик для очистки флаконов
[flaskLeft, flaskRight].forEach((flask, index) => {
    flask.addEventListener('dblclick', () => {
        if (index === 0) {
            liquidLeft.style.height = '0%';
            eto_to_chto_nado_neyronke[0] = '';
        } else {
            liquidRight.style.height = '0%';
            eto_to_chto_nado_neyronke[1] = '';
        }
        flask.querySelector('.machine-flask-label').textContent = 'Пусто';
        flask.classList.remove('filled');
        flask.className = 'machine-flask';
        flask.dataset.element = '';
    });
});
