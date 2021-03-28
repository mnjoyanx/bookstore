class Header {
    constructor() {
        this.element = document.getElementById('header')
    }

    render(count) {
        const header = `
            <div class="header--main" onclick="header.openProductsModal()">
            ⚡️ <p class="counter">${count}</p>
</div>
        `
        this.element.innerHTML = header
    }

    openProductsModal() {
        shoping.render()
    }
}

const header = new Header()
