function addToCart(productName, price) {

    const cartMessage = document.createElement('div');
    cartMessage.textContent = `Producto: ${productName} | Precio: S/ ${price} añadido al carrito`;


    cartMessage.style.position = 'fixed';
    cartMessage.style.bottom = '20px';
    cartMessage.style.right = '20px';
    cartMessage.style.backgroundColor = '#FFD700';
    cartMessage.style.padding = '10px';
    cartMessage.style.borderRadius = '5px';
    cartMessage.style.zIndex = '1000';
    cartMessage.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.2)';
    cartMessage.style.fontWeight = 'bold';


    document.body.appendChild(cartMessage);


    setTimeout(() => {
        cartMessage.remove();
    }, 3000);
}
