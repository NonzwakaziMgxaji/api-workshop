const colors = document.querySelector('.colors');
const colorTemplateText = document.querySelector('.colorTemplate');
const colorTemplate = Handlebars.compile(colorTemplateText.innerText);

const brands = document.querySelector('.brands');
const brandTemplateText = document.querySelector('.brandTemplate');
const brandTemplate = Handlebars.compile(brandTemplateText.innerText);

const cars = document.querySelector('.cars');
const carsTemplateText = document.querySelector('.carTemplate');
const carsTemplate = Handlebars.compile(carsTemplateText.innerText);




axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        colors.innerHTML = colorTemplate({
            colors: result.data
        });
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        brands.innerHTML = brandTemplate({
            brands: result.data
        });
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(function (result) {
        cars.innerHTML = carsTemplate({
            cars: result.data
        });
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/cars/make/:make/color/:car_color')
    .then(function (result) {
        cars.innerHTML = carsTemplate({
            cars: result.data
        });
    });


    