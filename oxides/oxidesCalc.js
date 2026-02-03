const select = document.getElementById("element-select");
const result = document.getElementById("oxide-result");
const comment = document.getElementById("oxide-comment");
select.innerHTML = `<option value="">— Выберите элемент —</option>
        <option value="Li">Литий (Li)</option>
        <option value="Na">Натрий (Na)</option>
        <option value="K">Калий (K)</option>
        <option value="Mg">Магний (Mg)</option>
        <option value="Ca">Кальций (Ca)</option>
        <option value="Ba">Барий (Ba)</option>
        <option value="Al">Алюминий (Al)</option>
        <option value="Zn">Цинк (Zn)</option>
        <option value="Fe">Железо (Fe)</option>
        <option value="Cu">Медь (Cu)</option>
        <option value="Ag">Серебро (Ag)</option>
        <option value="CO">Углерод (C)</option>
        <option value="SO">Сера (S)</option>
        <option value="NO">Азот (N)</option>
        <option value="PO">Фосфор (P)</option>`;

const oxides = {
    Li: { formula: "Li₂O", comment: "Оксид лития — основной оксид. Реагирует с водой с образованием щёлочи." },
    Na: { formula: "Na₂O", comment: "Оксид натрия — основной оксид. Активно реагирует с водой." },
    K:  { formula: "K₂O",  comment: "Оксид калия — сильный основной оксид, энергично реагирует с водой." },
    Mg: { formula: "MgO",  comment: "Оксид магния — слабоосновный, применяется как огнеупор." },
    Ca: { formula: "CaO",  comment: "Негашёная известь — активный основной оксид, реагирует с водой." },
    Ba: { formula: "BaO",  comment: "Оксид бария — основной оксид, используется в стекольной промышленности." },
    Al: { formula: "Al₂O₃", comment: "Амфотерный оксид. Устойчив, применяется как абразив." },
    Zn: { formula: "ZnO",  comment: "Амфотерный оксид. Используется в резине, косметике, медицине." },
    Fe: { formula: "Fe₂O₃", comment: "Оксид железа(III) — амфотерный, компонент ржавчины." },
    Cu: { formula: "CuO",  comment: "Оксид меди(II) — основной, чёрное вещество, используется в лабораториях." },
    Ag: { formula: "Ag₂O",  comment: "Оксид серебра — нестабильный, разлагается при нагреве." },
    CO: { formula: "CO₂",  comment: "Углекислый газ — кислотный оксид, продукт горения." },
    SO: { formula: "SO₂",  comment: "Оксид серы(IV) — кислотный, вызывает кислотные дожди." },
    NO: { formula: "N₂O₅", comment: "Оксид азота(V) — кислотный, образует азотную кислоту." },
    PO: { formula: "P₂O₅", comment: "Оксид фосфора(V) — сильный осушитель, кислотный оксид." }
};


select.addEventListener("change", () => {
    const value = select.value;
    if (value && oxides[value]) {
        result.textContent = oxides[value].formula;
        comment.textContent = oxides[value].comment;
    } else {
        result.textContent = "—";
        comment.textContent = "Выберите элемент, чтобы увидеть формулу его оксида и пояснение.";
    }
});