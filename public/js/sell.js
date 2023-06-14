async function newFormHandler(event) {
    event.preventDefault();
    
    const product_name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const condition = document.getElementById('condition').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const contact_info = document.getElementById('contact').value;
    
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
        description,
        category,
        price,
        condition,
        location,
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