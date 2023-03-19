const refs = {
    inputEl: document.getElementById('font-size-control'),
    spanEl:  document.getElementById('text')
};

refs.inputEl.addEventListener('input', onFontControllerInput);

function onFontControllerInput () {
refs.spanEl.style.fontSize =  refs.inputEl.value + 'px';
};