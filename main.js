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
  
  if( products.length > 0 ){
    let productsTable = document.createElement('table')
    productsTable.classList.add('table')
    
    let tableHead = document.createElement('th')
    let tableHeadRow = document.createElement('tr')
    
    ['Producto','Imagen', 'Precio', 'Cantidad','Impto','Total']
    
    modalBody.appendChild(productsTable)
    products.forEach((product) => {
      let infoNode = document.createTextNode(`Producto: ${product.name}, Cantidad: ${product.quantity}`)
      par.appendChild(infoNode)
    })
  } else {
    let par = document.createElement('p')
    let infoNode = document.createTextNode(`Carrito Vacío`)
    par.appendChild(infoNode)
    modalBody.appendChild(par)
  } 
}

const emptyModal = ()=> {
  const modalBody = document.getElementById('modal-body')
  while(modalBody.firstChild){
    modalBody.removeChild(modalBody.firstChild)
  }
}

const emptyCart = (e)=>{
  e.preventDefault()
  Cart.getProducts().forEach((product) => {
    Products.updateStock(product.name, product.quantity)
  })
  Products.redraw()
  Cart.empty()
  updateNavbar()
  updateModal()
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
