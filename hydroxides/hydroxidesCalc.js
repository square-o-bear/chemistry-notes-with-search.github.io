const select = document.getElementById("metal-select");
const result = document.getElementById("hydroxide-result");
const explanation = document.getElementById("explanation");

// База данных металлов и их гидроксидов
const hydroxides = {
    Na:  { formula: "NaOH",  comment: "Щёлочь. Растворима в воде, сильное основание.", name: "Натрий"},
    K:   { formula: "KOH",   comment: "Щёлочь. Используется в аккумуляторах.", name: "Калий"},
    Li:  { formula: "LiOH",  comment: "Щёлочь. Менее растворима, чем NaOH.", name: "Литий"},
    Ca:  { formula: "Ca(OH)₂", comment: "Малорастворимое основание. Гашёная известь.", name: "Кальций"},
    Ba:  { formula: "Ba(OH)₂", comment: "Щёлочь. Токсична, используется в лабораториях.", name: "Барий"},
    Mg:  { formula: "Mg(OH)₂", comment: "Нерастворимое основание. Антацид («Милк оф магния»).", name: "Магний"},
    Al:  { formula: "Al(OH)₃", comment: "Амфотерный гидроксид. Реагирует с кислотами и щелочами.", name: "Алюминий"},
    Zn:  { formula: "Zn(OH)₂", comment: "Амфотерный гидроксид. Разлагается при нагреве.", name: "Цинк"},
    Fe:  { formula: "Fe(OH)₂", comment: "Нерастворимое основание. Окисляется на воздухе до Fe(OH)₃.", name: "Железо II"},
    Fe3: { formula: "Fe(OH)₃", comment: "Нерастворимое основание. Бурый осадок.", name: "Железо III"},
    Cu:  { formula: "Cu(OH)₂", comment: "Нерастворимое основание. Синий осадок, разлагается при нагреве.", name: "Медь"},
    Cr:  { formula: "Cr(OH)₃", comment: "Амфотерный гидроксид. Серо-зелёный осадок.", name: "Хром"}
};

// Заполняем выпадающий список: Название (символ)
Object.keys(hydroxides).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${hydroxides[key].name} (${key})`;
    select.appendChild(option);
});

// Обновляем результат
select.addEventListener("change", () => {
    const value = select.value;
    if (value && hydroxides[value]) {
        result.textContent = hydroxides[value].formula;
        explanation.textContent = hydroxides[value].comment;
    } else {
        result.textContent = "—";
        explanation.textContent = "Выберите металл, чтобы увидеть формулу его гидроксида.";
    }
});
