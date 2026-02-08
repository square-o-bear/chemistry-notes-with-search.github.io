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

// Цвета веществ
const elementColors = {'H': '#f8f9fa', 'O': '#ffcccc', 'C': '#333333', 'Na': '#ffeb99', 'Cl': '#cce5ff', 'S': '#ffff99', 'Fe': '#8b4513', 'Au': '#ffd700', 'Ag': '#c0c0c0', 'Cu': '#b87333', 'P': '#ff9999', 'H₂O': '#a0e7ff', 'CO₂': '#e0e0e0', 'NH₃': '#f0f8ff', 'CH₄': '#fff4d0', 'O₂': '#ffe6e6', 'HCl': '#fff9e6', 'H₂SO₄': '#fffbe6', 'NaOH': '#f0fff0'};

// Drag & Drop
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
flaskLeft.addEventListener('dragover', (e) => { e.preventDefault(); flaskLeft.classList.add('filled'); });
flaskLeft.addEventListener('dragleave', () => { flaskLeft.classList.remove('filled'); });
flaskLeft.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = e.dataTransfer.getData('text/plain');
    updateFlask(flaskLeft, liquidLeft, labelLeft, element, 0);
});

// Правый флакон
flaskRight.addEventListener('dragover', (e) => { e.preventDefault(); flaskRight.classList.add('filled'); });
flaskRight.addEventListener('dragleave', () => { flaskRight.classList.remove('filled'); });
flaskRight.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = e.dataTransfer.getData('text/plain');
    updateFlask(flaskRight, liquidRight, labelRight, element, 1);
});

function updateFlask(flask, liquid, label, element, index) {
    label.textContent = element;
    liquid.style.height = '45%';
    liquid.style.background = elementColors[element];
    flask.classList.add('filled');
    flask.className = `machine-flask filled ${element.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, '')}`; // убираем индексы для класса
    flask.dataset.element = element;
    eto_to_chto_nado_neyronke[index] = element;
}

// Обновление выхода
function updateOutputDisplay() {
    const result = na_eto_zabey_ono_dolzhno_rabotat[0];
    outputContent.style.background = result.color;
    outputLabel.textContent = result.formula;
    outputFlask.classList.remove('empty');
}

// Смешивание
mixBtn.addEventListener('click', () => {
    if (eto_to_chto_nado_neyronke[0] && eto_to_chto_nado_neyronke[1]) {
        mixBtn.disabled = true;

        // Отправляем запрос нейросети
        AIFeedback(`${eto_to_chto_nado_neyronke[0]} + ${eto_to_chto_nado_neyronke[1]}`).then(response => {
            let answer = response.trim().split('\n');
            let formula = answer[0].replace(/Формула:\s*/, '').trim();
            let color = answer[1].replace(/Цвет:\s*/, '').trim();
            let comment = answer.length > 2 ? answer.slice(2).join(' ') : 'Нет информации о веществе.';
            syda_nado_vstavlyat_to_chto_otvetila_neyronka(color, formula, comment);
        }).catch(() => {
            const result = getFallbackReaction(eto_to_chto_nado_neyronke[0], eto_to_chto_nado_neyronke[1]);
            syda_nado_vstavlyat_to_chto_otvetila_neyronka(result.color, result.formula, 'Информация недоступна.');
        });

        // Анимация
        flowLeft.style.opacity = '1'; flowLeft.style.width = '100%';
        flowRight.style.opacity = '1'; flowRight.style.width = '100%';

        setTimeout(() => flowCenter.style.opacity = '1', 500);
        setTimeout(() => outputFlask.classList.remove('empty'), 1200);
        setTimeout(() => outputContent.style.height = '70%', 1800);

        setTimeout(() => {
            [flowLeft, flowRight, flowCenter].forEach(f => f.style.width = '0%');
            setTimeout(() => [flowLeft, flowRight, flowCenter].forEach(f => f.style.opacity = '0'), 500);
            mixBtn.disabled = false;
        }, 3000);
    }
});

// Запасной вариант, если ИИ не ответил
function getFallbackReaction(el1, el2) {
    const reactions = {
        'H+O': { formula: 'H₂O', color: '#a0e7ff' },
        'Na+Cl': { formula: 'NaCl', color: '#ffffff' },
        'H+Cl': { formula: 'HCl', color: '#fff9e6' },
        'NaOH+HCl': { formula: 'NaCl + H₂O', color: '#f8f9fa' },
        'CO₂+H₂O': { formula: 'H₂CO₃', color: '#e0e0e0' },
        'NH₃+HCl': { formula: 'NH₄Cl', color: '#ffffff' },
        'CH₄+O₂': { formula: 'CO₂ + H₂O', color: '#ffe6e6' },
        'H₂SO₄+Zn': { formula: 'ZnSO₄ + H₂', color: '#fffbe6' }
    };
    return reactions[`${el1}+${el2}`] || reactions[`${el2}+${el1}`] || { formula: '?', color: 'transparent' };
}

// Очистка двойным кликом
[flaskLeft, flaskRight].forEach((flask, index) => {
    flask.addEventListener('dblclick', () => {
        const liquid = index === 0 ? liquidLeft : liquidRight;
        liquid.style.height = '0%';
        flask.querySelector('.machine-flask-label').textContent = 'Пусто';
        flask.classList.remove('filled');
        flask.className = 'machine-flask';
        eto_to_chto_nado_neyronke[index] = '';
    });
});

// Функция для общения с ИИ
async function AIFeedback(message) {
    const token = 'sk-1f2fKezCzkIq4VapM5d6vAXJmKwRuQnNdvvQbMw7dNdJjq5Wj0gNh8nazPZe';
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    try {
        const res = await fetch(`https://api.gen-api.ru/api/v1/networks/gemini-2-5-flash-lite`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                'messages': [
                    {"role": "system", "content": "Ты — химический ИИ. Выведи результат реакции двух веществ. Формат: первая строка — формула продукта, вторая — цвет в hex, третья строка - инвформация о веществе"},
                    {"role": "user", "content": message}
                ]
            })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        const requestId = data.request_id;
        while (true) {
            const statusRes = await fetch(`https://api.gen-api.ru/api/v1/request/get/${requestId}`, {
                method: 'GET', headers
            });
            const statusData = await statusRes.json();

            if (statusData.status === 'success') {
                return statusData.full_response[0].message.content;
            }
            if (statusData.status === 'failed') throw new Error(statusData.result);

            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    } catch (error) {
        console.error('Ошибка ИИ:', error);
        return "?\n#888888";
    }
}

// Установка результата
function syda_nado_vstavlyat_to_chto_otvetila_neyronka(color, formula, comment = '') {
    na_eto_zabey_ono_dolzhno_rabotat[0] = { color, formula };
    updateOutputDisplay();
    
    // Устанавливаем комментарий
    const reactionComment = document.getElementById('reaction-comment');
    if (comment.trim()) {
        reactionComment.textContent = comment.trim();
    } else {
        reactionComment.textContent = 'Нет дополнительной информации.';
    }
}