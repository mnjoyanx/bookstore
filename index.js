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
            CATALOG = res.data
            render()
            loading.remove()
        })
        .catch(err => {
            console.log(err)
        })
}

getItems()