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

        const json = await response.json();

        //need to make list using this 
        console.log(json);


    } catch (error) {
        console.error(error);
    }
}

document.getElementById('searchButton').addEventListener('click', newFormHandler);
