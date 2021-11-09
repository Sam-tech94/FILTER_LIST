let list = [
    "HTML 5",
    "CSS3",
    "Angular 2",
    "React",
    "Node.js",
    "Vue.js",
    "PHP",
    "JavaScript",
    "Bootstrap",
];

const output = document.querySelector(".output");
const search = document.querySelector(".filter-input");

window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("keyup", filterItem);

function loadList() {
    let temp = `<ul class="list-items">`;
    list.forEach(item => {
        temp += `<li class="list-item">${item}</li>`;
    });
    temp += `</ul>`;
    output.innerHTML = temp;
}

let id;
function filterItem(e) {
    if (id !== undefined) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        let temp = "";
        const result = list.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));

        if (result.length > 0) {
            temp = `<ul class="list-items">`;
            result.forEach(item => {
                temp += `<li class="list-item"> ${item} </li>`;
            });
            temp += `</ul>`;
        } else {
            temp = `<div class="no-item"> No Item Found </div>`;
        }
        output.innerHTML = temp;
    }, 1000);
}