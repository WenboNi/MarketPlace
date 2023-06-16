async function newFormHandler(event) {
    event.preventDefault();

    const searchByKeyword = document.getElementById('sbk').value.trim();
    const searchByLocation = document.getElementById('sbl').value.trim();
    const searchByCategory = document.getElementById('sbc').value;

    const apiUrl = `/api/buy?product_name=${encodeURIComponent(searchByKeyword)}&city=${encodeURIComponent(searchByLocation)}&category=${encodeURIComponent(searchByCategory)}`;

    try {
        const response = await fetch(apiUrl, {
        method: 'GET',
        });

        if (!response.ok) {
        throw new Error('API request failed');
        }

        const productResults = await response.json();

        //need to make list using this 
        console.log(productResults);
        function productsRender () {
            for(var i = 0; i < productResults.length; i++) {

                const buyListEl = document.getElementById('buy-list');

                const productImg = document.createElement("img");
                productImg.setAttribute("id", "product-img-list")
                buyListEl.appendChild(productImg)

                const productName = document.createElement('li');
                productName.setAttribute("id", "product-name-list")
                buyListEl.appendChild(productName)

                const productCategory = document.createElement('li');
                productCategory.setAttribute("id", "product-category-list")
                buyListEl.appendChild(productCategory)

                const productLocation = document.createElement('li');
                productLocation.setAttribute("id", "product-location-list")
                buyListEl.appendChild(productLocation)

                const productPrice = document.createElement('li');
                productPrice.setAttribute("id", "product-price-list")
                buyListEl.appendChild(productPrice)

                productName.innerHTML = productResults[i].product_name;
                productImg.setAttribute("src", productResults[i].image);
                productCategory.innerHTML = productResults[i].category;
                productLocation.innerHTML = productResults[i].city;
                productPrice.innerHTML = productResults[i].location;
            }
        }
        productsRender();

    } catch (error) {
        console.error(error);
    }
}

document.getElementById('searchButton').addEventListener('click', newFormHandler);

module.exports = productResults;

