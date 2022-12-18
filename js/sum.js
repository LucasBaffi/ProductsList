

let sumTotalProducts = document.querySelector('.span-price')

const sumTodos = () => {
  var sumTodos = 0;

  produtos.forEach((element) => {   

   
      sumTodos += element.preco
      let sumtotalProd = sumTotalProducts.innerText = `R$: ${sumTodos.toFixed(2)}`
  
  })
}

const sumHorti = () => {
  var sumHorti = 0;

  produtos.forEach((element) => {
    ;

    if (element.secao === 'Hortifruti') {
      sumHorti += element.preco
      let sumtotalProd = sumTotalProducts.innerText = `R$: ${sumHorti.toFixed(2)}`
    }
  })
}
const sumPani = () => {
  var sumPani = 0;

  produtos.forEach((element) => {


    if (element.secao === 'Panificadora') {
      sumPani += element.preco
      let sumtotalProd = sumTotalProducts.innerText = `R$: ${sumPani.toFixed(2)}`
    }
  })
}

const sumLat = () => {
  var sumLat = 0;

  produtos.forEach((element) => {

    if (element.secao === 'Laticinio') {
      sumLat += element.preco
      let sumtotalProd = sumTotalProducts.innerText = `R$: ${sumLat.toFixed(2)}`
    }
  })
}
