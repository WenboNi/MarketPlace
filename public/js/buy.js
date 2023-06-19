async function newFormHandler(event) {
    event.preventDefault();

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

            buyListEl.innerHTML = '';

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

                const productPrice = document.createElement('li');
                productPrice.setAttribute("id", "product-price-list")
                listContainer.appendChild(productPrice)

                const productCategory = document.createElement('li');
                productCategory.setAttribute("id", "product-category-list")
                listContainer.appendChild(productCategory)

                const productLocation = document.createElement('li');
                productLocation.setAttribute("id", "product-location-list")
                listContainer.appendChild(productLocation)

                const productCondition = document.createElement('li');
                productCondition.setAttribute("id", "product-condition-list")
                listContainer.appendChild(productCondition)

                const productStock = document.createElement('li');
                productStock.setAttribute("id", "product-stock-list")
                listContainer.appendChild(productStock)
                
                const productDescription = document.createElement('li');
                productDescription.setAttribute("id", "product-description-list")
                listContainer.appendChild(productDescription)

                const productContactInfo = document.createElement('li');
                productContactInfo.setAttribute("id", "product-contact-info-list")
                listContainer.appendChild(productContactInfo)

                productName.innerHTML = productResults[i].product_name;
                productImg.setAttribute("src", productResults[i].image);
                productCategory.innerHTML ="Category: " + productResults[i].category;
                productLocation.innerHTML = "City: " + productResults[i].city;
                productPrice.innerHTML = "$" + productResults[i].price;
                productCondition.innerHTML = "Condition: " + productResults[i].item_condition + "/10";
                productStock.innerHTML = "Stock: " + productResults[i].stock;
                productDescription.innerHTML = "Description: " + productResults[i].item_description;
                productContactInfo.innerHTML = "Phone Number: " + productResults[i].contact_info;

                buyListEl.appendChild(listContainer);

                listContainer.addEventListener('click', function (){
                   
                })
            }
        }
        productsRender();
        
        
    } catch (error) {
        console.error(error);
}
}

document.getElementById('searchButton').addEventListener('click', newFormHandler);
