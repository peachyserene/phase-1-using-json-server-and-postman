/*fetch('http://localhost:3000/articles')
.then(res => console.log(res))


function getAllAnimals (){
    fetch('http://localhost:3000/articles')
    .then(res => res.json())
    .then(animalData => console.log(animalData))

function initialize() {
    getAllAnimals()
    animalData.forEach(animal => renderOneAnimal(animal))
    }
    */

    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(console.log())