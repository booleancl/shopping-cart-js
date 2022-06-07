const products = [
  {
    name: 'Producto Nro: 1',
    img: 'https://cdn.pixabay.com/photo/2017/10/07/23/00/lipstick-2828223_960_720.jpg',
    price: 2000,
    stock: 10,
  },
  {
    name: 'Producto Nro: 2',
    img: 'https://cdn.pixabay.com/photo/2017/09/07/22/31/lipstick-2726989_960_720.jpg',
    price: 2000,
    stock: 10,
  },
  {
    name: 'Producto Nro: 3',
    img: 'https://cdn.pixabay.com/photo/2019/12/23/01/16/eyeliner-4713577_960_720.jpg',
    price: 2000,
    stock: 10,
  },
  {
    name: 'Producto Nro: 4',
    img: 'https://cdn.pixabay.com/photo/2013/09/26/23/23/glitter-powder-186829_960_720.jpg',
    price: 2000,
    stock: 10,
  },
  {
    name: 'Producto Nro: 5',
    img: 'https://cdn.pixabay.com/photo/2017/09/07/22/31/lipstick-2726989_960_720.jpg',
    price: 2000,
    stock: 10,
  },
  {
    name: 'Producto Nro: 6',
    img: 'https://cdn.pixabay.com/photo/2016/10/16/21/23/makeup-brush-1746322_960_720.jpg',
    price: 2000,
    stock: 10,
  },
]

const Products = {
  containerId: 'products-list',
  container: null,
  
  addImage(cardNode, img){
    let imgNode = document.createElement('img') 
    imgNode.classList.add('card-img-top')
    
    imgNode.src = img
    cardNode.appendChild(imgNode)  
  },
  
  addCardBody(cardNode, product){
    let cardBodyNode = document.createElement('div')
    cardBodyNode.classList.add('card-body')
    
    this.addCardTitle(cardBodyNode, product.name)
    this.addCardPrice(cardBodyNode, product.price)
    this.addCardStock(cardBodyNode, product.stock)
    this.addCardBtn(cardBodyNode, product)
    
    cardNode.appendChild(cardBodyNode)
  },
  
  addCardTitle(cardBodyNode, title){
    let cardTitleNode = document.createElement('h4')
    let titleNode = document.createTextNode(title)
    
    cardTitleNode.appendChild(titleNode)
    cardTitleNode.classList.add('card-title')
    cardBodyNode.appendChild(cardTitleNode)
  },
  
  addCardPrice(cardBodyNode, price){
    let cardPriceNode = document.createElement('h5')
    let priceNode = document.createTextNode(`Price: $${price}`)
    
    cardPriceNode.classList.add('card-text')
    cardPriceNode.appendChild(priceNode)
    
    cardBodyNode.appendChild(cardPriceNode)
  },
  
  addCardStock(cardBodyNode,stock){
    let cardStockNode = document.createElement('p')
    let stockNode = document.createTextNode(`Stock: ${stock}`)
    
    cardStockNode.classList.add('card-title')
    cardStockNode.appendChild(stockNode)
    
    cardBodyNode.appendChild(cardStockNode)
  },
  
  addCardBtn(cardBodyNode, product){
    let cardBtn = document.createElement('button')
    let buttonText = document.createTextNode('Add to Cart')
    
    cardBtn.classList.add('btn')
    cardBtn.classList.add('btn-primary')
    cardBtn.dataset.productName = product.name
    cardBtn.dataset.price = product.price
    cardBtn.appendChild(buttonText)
    
    cardBodyNode.appendChild(cardBtn)
  },
  
  appendCard(product){
    let cardNode = document.createElement('div')
    cardNode.classList.add('card')
    cardNode.classList.add('mb-3')
    
    this.addImage(cardNode, product.img)
    this.addCardBody(cardNode, product)  
    
    this.container.appendChild(cardNode)
  },
  
  updateStock(productName, quantity){
    let tempProd = products.find((prod) => prod.name == productName )
    tempProd.stock += quantity
  },

  redraw(){
    this.removeAllCards()
    products.forEach((product) => {
      this.appendCard(product)
    })
  },

  removeAllCards(){
    while(this.container.firstChild){
      this.container.removeChild(this.container.firstChild)
    }
  },

  init(){
    this.container = document.getElementById(this.containerId)
    products.forEach((product) => {
      this.appendCard(product)
    })
  }
}

export default Products;
