let bton = document.querySelector('#bton');
let sidebar = document.querySelector('.sidebar')

const active = bton.onclick = function(){
    sidebar.classList.toggle("active");
}