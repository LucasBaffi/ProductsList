const dataProducts = (produtos) => {

    let li = document.createElement('li')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    let span = document.createElement('span')
    let p = document.createElement('p')

    img.src = produtos.img
    h3.innerText = produtos.nome
    span.innerText = produtos.secao
    let price = produtos.preco.toFixed(2).toString().replace(".", ",")
    p.innerText = `R$ ${price}`

    div.classList.add('div-card')

    div.append(img, h3, span, p)
    li.appendChild(div)

    return li
}


const ul = document.querySelector('.ul-products')

const renderProdcts = (arr) => {
    ul.innerHTML = ""
    arr.forEach((element) => {
        const card = dataProducts(element)
        ul.appendChild(card)
    });

}

renderProdcts(produtos)




