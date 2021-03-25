class LocalStorage {
    constructor() {
        this.keyName = "productId"
    }
    getItems() {
        const currentProduct = localStorage.getItem(this.keyName)

        if(currentProduct) {
            return JSON.parse(currentProduct)
        }
        return []
    }

    setItems(id) {
        let product = this.getItems()
        let isExist = false
        if(product.includes(id)) {
            return product
        }
        isExist = true
        product.push(id)

        localStorage.setItem(this.keyName, JSON.stringify(product))

        return {isExist, product}

    }
}

const localeStorages = new LocalStorage()


localeStorages.setItems(0)
localeStorages.setItems('522')
localeStorages.setItems('58')
