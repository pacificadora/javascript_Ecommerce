console.log("running");

/*var cart1 = document.querySelectorAll('btnnn')*/
console.log('cart1')
var cart = document.getElementsByClassName('add-cart')
console.log(cart)
var products = [
    {
        name: 'Nike Air Force1',
        tag: 'nikeairforce1',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force2',
        tag: 'nikeairforce2',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force3',
        tag: 'nikeairforce3',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force4',
        tag: 'nikeairforce4',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force5',
        tag: 'nikeairforce5',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force6',
        tag: 'nikeairforce6',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force7',
        tag: 'nikeairforce7',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force8',
        tag: 'nikeairforce8',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force9',
        tag: 'nikeairforce9',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force10',
        tag: 'nikeairforce10',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force11',
        tag: 'nikeairforce11',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force12',
        tag: 'nikeairforce12',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force13',
        tag: 'nikeairforce13',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force14',
        tag: 'nikeairforce14',
        price: 50,
        inCart: 0,
    },
    {
        name: 'Nike Air Force15',
        tag: 'nikeairforce15',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force16',
        tag: 'nikeairforce16',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force17',
        tag: 'nikeairforce17',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force18',
        tag: 'nikeairforce18',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force19',
        tag: 'nikeairforce19',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force20',
        tag: 'nikeairforce20',
        price: 50,
        inCart: 0
    }

];

for (var i=0; i<cart.length; i++){
    cart[i].addEventListener('click', (e) => {
        //console.log(i);
        let id = e.target.getAttribute('id') 
        //console.log(products[id]);
        cartNumbers(products[id])
    })
}

function cartNumbers(product){
    var productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);

    /*making dictionary in the local storage*/
    if (productNumber){
        localStorage.setItem('cartNumbers', productNumber+1);
    }
    else{
        localStorage.setItem('cartNumbers', 1);
    }
    setItems(product)
    
}

function setItems(product){
    let cartItems = localStorage.getItem("productsInCart")
    console.log("my cartitems are", cartItems);

    if (cartItems != null){
        if (cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1
    }else{
        product.inCart = 1
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

displayCart();

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)

    let productContainer = document.querySelector(".products");
    console.log(cartItems)

    if (cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <a href="">Remove</a>
            <div class = "product">
                <span>${item.name}</span>
            </div
            <div class="price">${item.price}</div>
            <div class="quantity">${item.inCart}</div>
            <div class="total">${item.inCart * item.price}</div>
            `
        })
    }
}

//<img src="img/${item.tag}.jpg">


