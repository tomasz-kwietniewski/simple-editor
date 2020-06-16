import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    console.log(`wartość entry: ${entry}`);
    result = entry;
}

const entryTextarea = document.querySelector('.textarea--js');
entryTextarea.value = result;

const buttonSave = document.querySelector('.save--js');
console.log(buttonSave);

buttonSave.addEventListener('click', () => {
    localStorage.setItem('entry', entryTextarea.value);
}
)

const buttonLoad = document.querySelector('.load--js');
console.log(buttonLoad);

buttonLoad.addEventListener('click', () => {
    localStorage.getItem('entry', entryTextarea.value);
}
)