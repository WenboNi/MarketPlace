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
        name: nameEl.value,
        category: categoryEl.value,
        price: priceEl.value,
        condition: conditionEl.value,
        description: descriptionEl.value,
        location: locationEl.value,
        contact: contactEl.value
    };

    const file = sellImageEl.files[0];

    const reader = new FileReader();

    reader.onload = function(e) {

        sellItemObject.image = e.target.result;

        console.log(sellItemObject);

        const sellItemJSON = JSON.stringify(sellItemObject);

        console.log(sellItemJSON);
    };
    reader.readAsDataURL(file);
});


