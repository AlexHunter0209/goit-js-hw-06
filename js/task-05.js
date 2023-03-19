const refs = {
    input: document.getElementById('name-input'),
    spanEl: document.getElementById('name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.trim()!== "") {
        refs.spanEl.textContent = event.currentTarget.value;
      };
    console.log(event.currentTarget.value);
};