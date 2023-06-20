async function newFormHandler(event) {
  event.preventDefault();

  const product_name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value;
  const stock = parseInt(document.getElementById('stock').value.trim(), 10);
  const price = parseFloat(document.getElementById('price').value.trim());
  const item_condition = parseInt(document.getElementById('condition').value.trim(), 10);
  const item_description = document.getElementById('description').value.trim();
  const city = document.getElementById('location').value.trim();
  const contact_info = document.getElementById('contact').value.trim();

  // const imageEl = document.getElementById("sellImage").files[0];
  // const image = "assets/image/" + imageEl.name

  console.log(image);

  const payload = {
    product_name,
    item_description,
    category,
    price,
    stock,
    item_condition,
    city,
    contact_info,
    // image
  };
  console.log(payload);

  try {
    const response = await fetch(`/api/products/sell`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/success');
    } else {
      document.location.replace('/fail');
    }
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('submitButton').addEventListener('click', newFormHandler);