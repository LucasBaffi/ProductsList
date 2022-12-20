const buttonSearchProducts = () => {
    let listProducts = document.querySelector('.ul-products')
    let buttonLupa = document.querySelector('.lupa')
    console.log(buttonLupa);
    buttonLupa.addEventListener('click', (event) => {
        event.preventDefault()
        searchProducts()

    })
}
buttonSearchProducts()

const searchProducts = () => {
    let inputSearch = document.getElementById('inputSearchProducts')
    const valueInput = inputSearch.value

    let filtro = produtos.filter((elm) => valueInput === elm.nome.toLowerCase() || valueInput === elm.secao.toUpperCase())

    renderProdcts(filtro)

}

