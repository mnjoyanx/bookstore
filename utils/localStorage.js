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
        let productId = product.indexOf(id)
        let isExist = false
        if(productId == -1) {
            product.push(id)
            isExist = true
        } else {
            product.splice(productId, 1)
        }

        localStorage.setItem(this.keyName, JSON.stringify(product))

        return {isExist, product}

    }
}

const localeStorages = new LocalStorage()


