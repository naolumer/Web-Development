

const humburger = document.querySelector('#humburger');
const dropdown = document.querySelector('#dropdown');

humburger.addEventListener('click', ()=> {
    dropdown.classList.toggle('hidden')
    humburger.classList.toggle('bg-white')
    
})