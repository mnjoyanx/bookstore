class Products {


    render() {
        let catalogHtml = "";

        CATALOG.map(({ name, imgSrc, price }) => {
            catalogHtml += `
                <li class="products__list-main">
                    <p>${name}</p>
                    <img src="${imgSrc}" />
                    <span>${price}</span>
                    <button class="button-primary">Add to Card</button>
                </li>
            `;
        });

        const catalogList = `
            <ul class="products__items-main">
                ${catalogHtml}
            </ul>
        `;

        rootProducts.innerHTML = catalogList;
    }
}

const products = new Products();

products.render();