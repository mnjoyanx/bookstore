class Products {

    
  render() {
    let catalogHtml = "";

    CATALOG.map(({ name, imgSrc, price }) => {
      catalogHtml += `
                <li class="hello">
                    <span>${name}</span>
                    <img src="${imgSrc}" />
                    <span>${price}</span>
                    <button>Add to Card</button>
                </li>
            `;
    });

    const catalogList = `
            <ul>
                ${catalogHtml}
            </ul>
        `;

    rootProducts.innerHTML = catalogList;
  }
}

const products = new Products();

products.render();
