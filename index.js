function render() {
    header.render(localeStorages.getItems().length)

    products.render();

}

let CATALOG = null
const axios = window.axios

function getItems() {
    loading.render()
    axios.get('http://localhost:3000/data')
        .then(res => {
            loading.remove()
            CATALOG = res.data
            render()
        })
        .catch(() => {
            loading.remove()
            error.render()
        })
}

getItems()