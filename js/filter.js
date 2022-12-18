
// **************Hortfruti********************
let filtroHortfrut = () => {
  var sum = 0;
  let Todos = produtos.filter((produto) => produto.secao === "Hortifruti")
  renderProdcts(Todos);
}

let buttonHortifrut = document.getElementsByClassName("button")[1]
buttonHortifrut.addEventListener("click", () => {
  filtroHortfrut(sumHorti())
},)


// **************panificadora********************
let filtroPanificadora = () => {
  let Todos = produtos.filter((produto) => produto.secao === "Panificadora")
  renderProdcts(Todos);
}

let buttonPanificadora = document.getElementsByClassName("button")[2]
buttonPanificadora.addEventListener("click", () => {
  filtroPanificadora(sumPani())
})


// **************laticinios********************
let filtroLaticinios = () => {
  let Todos = produtos.filter((produto) => produto.secao === "Laticinio")
  renderProdcts(Todos);
}

let buttonLaticinios = document.getElementsByClassName("button")[3]
buttonLaticinios.addEventListener("click", () => {
  filtroLaticinios(sumLat())
})

// ******************todos*********************


const filtroTodos = () => {
  let Todos = produtos.filter((produto) => produto.secao)
  renderProdcts(Todos);
}
let buttonTod = document.getElementsByClassName("button")[0]
buttonTod.addEventListener("click", () => {
  filtroTodos(sumTodos())
})

