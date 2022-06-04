import Products from './modules/products.js';
import Cart from './modules/cart.js'

const addToCart = (event) => {
  let target = event.target
  if(target.tagName != 'BUTTON') return

  let productName = target.dataset.productName
  Cart.addProduct(target)
  Products.updateStock(productName, -1)
  Products.redraw()
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
})
