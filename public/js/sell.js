const sellImageEl = document.getElementById('sellImage');
const nameEl = document.getElementById('name');
const categoryEl = document.getElementById('category');
const priceEl = document.getElementById('price');
const conditionEl = document.getElementById('condition');
const descriptionEl = document.getElementById('description');
const locationEl = document.getElementById('location');
const contactEl = document.getElementById('contact');
const submitButtonEl = document.getElementById('submitButton');



submitButtonEl.addEventListener('click', function(event) {
    event.preventDefault();
    
    const sellItemObject = {
        product_name: nameEl.value,
        category: categoryEl.value,
        price: priceEl.value,
        condition: conditionEl.value,
        description: descriptionEl.value,
        city: locationEl.value,
        contact_info: contactEl.value
    };

    const file = sellImageEl.files[0];

    const reader = new FileReader();

    reader.onload = function(e) {

        sellItemObject.image = e.target.result;

        console.log(sellItemObject);

        const sellItemJSON = JSON.stringify(sellItemObject);

        //use sellItemJSON when doing POST function
        console.log(sellItemJSON);

    };
    reader.readAsDataURL(file);
});

module.exports = { sellItemJSON, sellItemObject }