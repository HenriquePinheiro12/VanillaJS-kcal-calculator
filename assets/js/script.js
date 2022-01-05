const form = document.querySelector('#form');

const handleSubmit = e => {
    e.preventDefault();

    const age = getNumericInputValue('age');
    const height = getNumericInputValue('height');
    const weight = getNumericInputValue('weight');
    const gender = getSelectedOption('gender');
    const activityLevel = Number(getSelectedOption('activity_level'));

    const tmb = Math.round( // rounds to closest whole number
        gender === 'female' ?
        (655 + (9.6 * weight)) + (1.8 * height) - (4.7 * age) : 
        (66 + (13.7 * weight)) + (5 * height) - (6.8 * age)
    )

    const maintenance = Math.round(tmb * activityLevel);
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    const resultBox = document.getElementById('result');
    resultBox.innerHTML = 
    `
    <h2>Aqui está o resultado:</h2>
      
    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
    `;
    window.scrollTo(0, document.body.scrollHeight);
}

form.addEventListener('submit', handleSubmit);
// input data are strings
// even though input is type number
const getNumericInputValue = id => Number(document.getElementById(id).value);
const getSelectedOption = id => {
    const targetSelect = document.getElementById(id);
    return targetSelect.options[targetSelect.selectedIndex].value
}
// SelectHTMLElement
//  options = array of options elements
//  selectedIndex = index of the selected option

// OptionHTMLElement
// value = value of the option
