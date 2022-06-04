import Products from './modules/products.js';
import Cart from './modules/cart.js'

const addToCart = (event) => {
  let target = event.target
  if(target.tagName != 'BUTTON') return
  console.log(target)

  let productName = target.dataset.productName
  Cart.addProduct(target)
  Products.updateStock(productName, -1)
  Products.redraw()
  updateNavbar()
  updateModal()
}

const updateNavbar = ()=>{
  const quantity = document.getElementById('quantity')
  quantity.innerText = Cart.getProductQuantity()
}

const updateModal = ()=> {
  const products = Cart.getProducts()
  const modalBody = document.getElementById('modal-body')
  emptyModal()
  products.forEach((product) => {
    let par = document.createElement('p')
    let infoNode = document.createTextNode(`Producto: ${product.name}, Cantidad: ${product.quantity}`)
    par.appendChild(infoNode)
    modalBody.appendChild(par)
  })
}

const emptyModal = ()=> {
  const modalBody = document.getElementById('modal-body')
  while(modalBody.firstChild){
    modalBody.removeChild(modalBody.firstChild)
  }
}

const emptyCart = (e)=>{
  e.preventDefault()
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })
  console.log('hola');
  myModal.hide()
  console.log('hola22');
  Cart.empty()
  Products.init()
}

const removeFromCart= (event) => {
  let target = event.target
  if(target.tagName != 'BUTTON') return
  
  Cart.removeProduct(target)
}


document.addEventListener('DOMContentLoaded', () => {
  Products.init()
  const productList = document.getElementById('products-list')
  productList.addEventListener('click', addToCart)
  const emptyCartBtn = document.getElementById('empty-cart')
  emptyCartBtn.addEventListener('click', emptyCart)    
})
