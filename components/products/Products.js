class Products {


    render() {
        let productIsExistInCatalog = localeStorages.getItems()
        let catalogHtml = "";

        CATALOG.map(({ name, imgSrc, price,id }) => {
            let productId = productIsExistInCatalog.find(id => {
                return id
            })
            catalogHtml += `
                <li class="products__list-main">
                    <p>${name}</p>
                    <img src="${imgSrc}" />
                    <span>👌🏻${price.toLocaleString()}</span>
                    <button class="button-primary ${productIsExistInCatalog.includes(id) ? 'removable' : 'canadd'}">${productIsExistInCatalog.includes(id) ? 'Revmove from Card' : 'Add to Card'}</button>
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