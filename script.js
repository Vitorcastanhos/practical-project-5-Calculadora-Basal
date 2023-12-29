const form = document.getElementById("calc-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const age = getInputNumberValue("age");
  const gender = displayRadioValue("gender-options");
  const active = displayActivityValues("activities");

  const tmb = gender === "female" ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age : 66 + 13.7 * weight + 5 * height - 6.8 * age;

  const calories = Math.round(tmb * Number(active));
  const loseWeight = calories - 450;
  const gainWeight = calories + 450;

  const displayResult = `
  <h2>Aqui está seu resultado:</h2>
        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong>${tmb}</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${calories}</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${loseWeight}</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${gainWeight}</strong>.
            </li>
          </ul>
        </div>
  `;

  const result = (document.getElementById("result").innerHTML = displayResult);
}

// transforma todas as strings em numbers
function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

// getting gender values
function displayRadioValue(id) {
  const gender = document.getElementById(id);

  return document.querySelector('input[name="gender"]:checked').value;
}

// getting activities values
function displayActivityValues(id) {
  const activity = document.getElementById(id);

  return document.querySelector('input[name="active"]:checked').value;
}
