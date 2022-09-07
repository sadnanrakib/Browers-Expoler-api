const getInputField = id=>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}


const getInput = ()=>{
const product = getInputField('product-name-field');
const quantity = getInputField('product-quantity-field');
console.log(product,quantity);
displyProduct(product,quantity);

// set localStorage 
// simply way
// localStorage.setItem(product,quantity);
saveItemLOcalStroge(product,quantity);
}


const getShoppingCartLocalStorage =()=>{
    let saveCart = localStorage.getItem('cart')
    let cart={};
    if(saveCart){
        cart = JSON.parse(saveCart)
    }
    return cart;
}

const saveItemLOcalStroge =(product,quantity)=>{
const cart = getShoppingCartLocalStorage();
// add product to cart property object
cart[product]= quantity;
const cartStrinfied = JSON.stringify(cart);
// save to localStorage
localStorage.setItem('cart',cartStrinfied)
}


const displyProduct=(product,quantity)=>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText=`${product}:${quantity}`;
    productContainer.appendChild(li);
}


const displyStoredProduct =()=>{
const cart = getShoppingCartLocalStorage();
for (const product in cart){
    const quantity =cart[product]
    console.log(product,quantity)
    displyProduct(product,quantity)
}
}


displyStoredProduct();