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
    console.log(this.items);
  },

  getProductQuantity(){
    return this.items.reduce((acc, { quantity }) => acc + quantity, 0)
  },

  getProducts(){
    return this.items
  },

  empty(){
    this.items = []
  }
}



export default Cart