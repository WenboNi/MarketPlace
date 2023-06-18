async function newFormHandler(event) {
    event.preventDefault();
    
    const product_name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value.trim();
    const item_condition = document.getElementById('condition').value.trim();
    const item_description = document.getElementById('description').value.trim();
    const city = document.getElementById('location').value.trim();
    const contact_info = document.getElementById('contact').value.trim();
    
    const sellImageEl = document.getElementById('sellImage');
    const uploadingFile = sellImageEl.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        sellItemObject.image = e.target.result;
    };
    reader.readAsDataURL(uploadingFile);

    const response = await fetch(`/api/sell`, {
      method: 'POST',
      body: JSON.stringify({
        product_name,
        item_description,
        category,
        price,
        item_condition,
        city,
        contact_info,
        image
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add the item');
    }
  }
  
  document.getElementById('submitButton').addEventListener('click', newFormHandler);