let selectedSize = '';

function selectSize(size) {
    selectedSize = size;
    alert(`Selected size: ${size}`);
}

function addToCart() {
    if (!selectedSize) {
        alert('Please select a size');
        return;
    }

    const imageSrc = document.querySelector('.product-image').src;
    const name = document.querySelector('.product-name').innerText;
    const price = document.querySelector('.product-price').innerText;
    const totalPrice = price; // Assuming only one item

    const cartItem = {
        imageSrc,
        name,
        price,
        totalPrice,
        size: selectedSize
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart');
    window.location.reload();
}

function viewCart() {
    window.location.href = 'cart.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                        <img src="${item.imageSrc}" alt="Product Image">
                        <div class="price-size">
                        <p> Name: ${item.name}</p>
                        <p>Price: ₱<span>${item.price}</span></p>
                        <p>Size: <span>${item.size}</span></p>
                        </div>
                    `;
            document.querySelector('.cart').appendChild(itemDiv);
            totalPrice += parseFloat(item.price);
        });
        document.querySelector('#total-price').innerText = totalPrice.toFixed(2);
    } else {
        document.querySelector(".cart").innerHTML = '<p class="your-cart" >Your cart is empty</p>';
        document.getElementById('#total-price');
        ('total-price').innerText = '₱ 0';
    }
});

function resetCart() {
    localStorage.removeItem('cart');
    document.querySelector(".cart").innerHTML = '<p class="your-cart" >Your cart is empty</p>';
    document.querySelector('#total-price').innerText = '0.00';
    alert('Cart has been reset');
}



document.querySelector(".removemenu").addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.style.display= "none";
});

document.querySelector(".menubars").addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.style.display= "block";
});




document.querySelector(".shpcart").addEventListener("click", () => {
    const cart = document.querySelector('.side');
    cart.style.display = "block";
});
document.querySelector(".close").addEventListener("click", () => {
    const cart = document.querySelector('.side');
    cart.style.display = "none";
});
     
    
   
  
  function submitReview() {
            // Get the selected star rating
            const rating = document.querySelector('input[name="rating"]:checked');
            const ratingValue = rating ? rating.value : 'No rating';

            // Get the comment
            const comment = document.getElementById('comment').value;

            // Create a new review object
            const newReview = {
                rating: ratingValue,
                comment: comment
            };

            // Get the current reviews from local storage
            let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

            // Add the new review to the reviews array
            reviews.push(newReview);

            // Store the updated reviews array in local storage
            localStorage.setItem('reviews', JSON.stringify(reviews));

            // Display the reviews
            displayReviews();

            // Reset the form
            document.getElementById('reviewForm').reset();
        }

        function resetForm() {
            // Clear the local storage
            localStorage.removeItem('reviews');

            // Clear the displayed reviews
            document.getElementById('reviewOutput').innerHTML = '';
        }

        function displayReviews() {
            // Get the reviews from local storage
            const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

            // Display the reviews
            const reviewOutput = document.getElementById('reviewOutput');
            reviewOutput.innerHTML = reviews.map(review => 
                `<p>Rating: ${review.rating} star(s)</p><p>Comment: ${review.comment}</p>`).join('<hr>');
        }

        // Load and display the reviews from local storage on page load
        window.onload = function() {
            displayReviews();
        }