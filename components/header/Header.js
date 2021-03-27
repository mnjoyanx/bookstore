class Header {
    constructor() {
        this.element = document.getElementById('header')
    }

    render(count) {
        const header = `
            <div class="header--main">
            ⚡️ <p class="counter">${count}</p>
</div>
        `
        this.element.innerHTML = header
    }
}

const header = new Header()
header.render(localeStorages.getItems().length)