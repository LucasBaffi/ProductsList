const filtroTodos = () => {
    const button = document.getElementById('todos')  
    button.addEventListener('click', () => {
        renderProdcts(produtos)
    })
    
}
filtroTodos()

let filtroHortfrut = () => {
    let Todos = produtos.filter((produto) => produto.secao === "Hortifruti")
    renderProdcts(Todos);   
  }

  let buttonHortifrut = document.getElementsByClassName("button")[1]
  buttonHortifrut.addEventListener("click", (filtroHortfrut))

  let filtroPanificadora = () => {
    let Todos = produtos.filter((produto) => produto.secao === "Panificadora")
    renderProdcts(Todos);   
  }

  let buttonPanificadora = document.getElementsByClassName("button")[2]
  buttonPanificadora.addEventListener("click", (filtroPanificadora))

let filtroLaticinios = () => {
    let Todos = produtos.filter((produto) => produto.secao === "Laticinio")
    renderProdcts(Todos);   
  }

  let buttonLaticinios = document.getElementsByClassName("button")[3]
  buttonLaticinios.addEventListener("click", (filtroLaticinios))