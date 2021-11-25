let button = document.querySelector('.btn');
let filteredCar = document.querySelector('.filteredCar');
let carTemplate = document.querySelector('.carTemplate');
let compiledTemplate = Handlebars.compile(carTemplate.innerText);

button.addEventListener("click", function () {
    let selectMake = document.querySelector('.make').value;
    let selectColor = document.querySelector('.color').value;

    if (selectMake !== "" && selectColor == "") {
        axios
            .get(`http://api-tutor.herokuapp.com/v1/cars/make/${selectMake}`)
            .then(function (result) {
                filteredCar.innerHTML = compiledTemplate({
                    cars: result.data
                });
            });
    } else if (selectColor !== "" && selectMake == ""){
        axios
            .get(`http://api-tutor.herokuapp.com/v1/cars/color/${selectColor}`)
            .then(function (result) {
                filteredCar.innerHTML = compiledTemplate({
                    cars: result.data
                });
            });
    } else if (selectColor !== "" && selectMake !== ""){
        axios
            .get(`http://api-tutor.herokuapp.com/v1/cars/make/${selectMake}/color/${selectColor}`)
            .then(function (result) {
                filteredCar.innerHTML = compiledTemplate({
                    cars: result.data
                });
            });
    }
});