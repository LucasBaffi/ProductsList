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
    p.innerText = produtos.preco

    div.append(img, h3, span, p)
    li.appendChild(div)

    return li
}


const ul = document.querySelector('.ul-products')

const renderProdcts = (arr) => {

    arr.forEach((element) => {
        const card = dataProducts
        ul.appendChild(card)
    });
}
renderProdcts(produtos)