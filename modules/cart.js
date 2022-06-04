const Cart = {
  items: [],

  addProduct(target){
    let found = false
    this.items.forEach((product) =>{
      if(product.name == target.dataset.productName){
        found = true
        product.quantity += 1
      }
    })
    if(!found){
      let tempProd = {
        name: target.dataset.productName,
        price: target.dataset.price,
        quantity: 1
      }
      this.items.push(tempProd)
    }
  }
}

export default Cart