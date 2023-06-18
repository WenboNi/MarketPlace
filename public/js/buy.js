async function newFormHandler(event) {
    event.preventDefault();
    // need to fix a bug where the list adds on instead of replaces

    const searchByKeyword = document.getElementById('sbk').value.trim();
    const searchByLocation = document.getElementById('sbl').value.trim();
    const searchByCategory = document.getElementById('sbc').value;
    

    const apiUrl = `/api/products/query?product_name=${encodeURIComponent(searchByKeyword)}&city=${encodeURIComponent(searchByLocation)}&category=${encodeURIComponent(searchByCategory)}`;
    console.log(apiUrl);
    try {
        const response = await fetch(apiUrl, {
        method: 'GET',
        });

        if (!response.ok) {
        throw new Error('API request failed');
        }

        const productResults = await response.json();

        console.log(productResults);
        function productsRender () {
            const buyListEl = document.getElementById('buy-list');

            for(var i = 0; i < productResults.length; i++) {

                const listContainer = document.createElement('ul');
                listContainer.setAttribute("class", "container text-center")
                listContainer.setAttribute("id", "list-container")
               
                const productImg = document.createElement("img");
                productImg.setAttribute("id", "product-img-list")
                listContainer.appendChild(productImg)

                const productName = document.createElement('li');
                productName.setAttribute("id", "product-name-list")
                listContainer.appendChild(productName)

                const productCategory = document.createElement('li');
                productCategory.setAttribute("id", "product-category-list")
                listContainer.appendChild(productCategory)

                const productLocation = document.createElement('li');
                productLocation.setAttribute("id", "product-location-list")
                listContainer.appendChild(productLocation)

                const productPrice = document.createElement('li');
                productPrice.setAttribute("id", "product-price-list")
                listContainer.appendChild(productPrice)

                productName.innerHTML = productResults[i].product_name;
                productImg.setAttribute("src", productResults[i].image);
                productCategory.innerHTML ="Category: " + productResults[i].category;
                productLocation.innerHTML = "City: " + productResults[i].city;
                productPrice.innerHTML = "$" + productResults[i].price;

                buyListEl.appendChild(listContainer);
            }
        }
        productsRender();

    } catch (error) {
        console.error(error);
    }
}

document.getElementById('searchButton').addEventListener('click', newFormHandler);