class Products {

    constructor() {
        this.activeClass = 'active'
        this.canAdd = 'Add to Card'
        this.removeFromCardText = 'Remove from Card'
    }

    render() {
        let productIsExistInCatalog = localeStorages.getItems()
        let catalogHtml = "";

         CATALOG.map(({ name, imgSrc, price,id }) => {
             let text = ''
             let btnClass = ''
             if(!productIsExistInCatalog.includes(id)) {
                  text = this.canAdd
                  btnClass = ''
             } else {
                 btnClass = this.activeClass
                 text = this.removeFromCardText
             }

            catalogHtml += `
                <li class="products__list-main">
                    <p>${name}</p>
                    <img src="${imgSrc}" />
                    <span>👌🏻${price.toLocaleString()}</span>
                    <button id="addToCardHandler" onclick="products.addToCardHandler(${id}, this)" class="button-primary ${btnClass}">${text}</button>
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


    addToCardHandler(id, element) {
        const {isExist, product} = localeStorages.setItems(id)
        if(isExist) {
            element.classList.add(this.activeClass)
            element.innerHTML = this.removeFromCardText
        } else {
            element.classList.remove(this.activeClass)
            element.innerHTML = this.canAdd
        }
    header.render(product.length)
    }

}

const products = new Products();

products.render();
