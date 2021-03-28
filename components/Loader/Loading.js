class Loading {
    constructor() {
        this.spiner = ''
    }
    render() {
        this.spiner = document.createElement('img')
        this.spiner.src = 'assets/svg/spinner.svg'
        this.spiner.classList.add('loader')
        const main = document.getElementById('main')
        main.appendChild(this.spiner)
    }

    remove() {
        this.spiner.remove()
    }

}

const loading = new Loading()
