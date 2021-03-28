class Error {
    render() {
        const errContent = `
            <div class="error--main">
            <p>Not Found</p>
</div>
        `
        document.getElementById('error').innerHTML = errContent
    }
}

const error = new Error()