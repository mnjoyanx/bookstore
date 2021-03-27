class Shoping {

    constructor() {
        this.getElement = document.getElementById('shoping')
    }

    render() {
     const catalogItems = localeStorages.getItems()
        let productItems = ''
        CATALOG.map(({id, name, price}) => {
            if(catalogItems.indexOf(id) !== -1) {
                productItems += `
                    <tr>
                    <td>${name}</td>
                    <td>${price}</td>
</tr>
                `
            } else if(!catalogItems.length) {
                productItems += 'there is no items yet'
            }
        })

        const html = `
            <div class="catalog--modal">
            <span class="close--modal" onclick="shoping.closeModalHandler()">⚔</span>
            <table>
            ${productItems}
</table>
</div>
        `

        this.getElement.innerHTML = html
    }

    closeModalHandler() {
        document.querySelector('.catalog--modal').remove()
    }
}

const shoping = new Shoping()