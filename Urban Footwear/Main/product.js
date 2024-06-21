document.getElementById("remove").addEventListener("click", () => {
     const menu = document.querySelector(".menu");
     menu.style.display= "none";
});

document.getElementById("bars").addEventListener("click", () => {
     const menu = document.querySelector(".menu");
     menu.style.display= "block";
});


document.getElementById("shpcart").addEventListener("click", () => {
        const cart = document.querySelector('.side');
        cart.style.display= "block";
  });
  document.getElementById("close").addEventListener("click", () => {
        const cart = document.querySelector('.side');
        cart.style.display= "none";
  });
      



document.addEventListener('DOMContentLoaded', function () {
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
                document.querySelector(".cart").innerHTML = '<p>Your cart is empty</p>';
                document.getElementById( '#total-price' );('total-price').innerText = '₱ 0';
            }
        });

        function resetCart() {
            localStorage.removeItem('cart');
            document.querySelector(".cart").innerHTML = '<p>Your cart is empty</p>';
            document.querySelector('#total-price').innerText = '0.00';
            alert('Cart has been reset');
        }
       
      
     
     