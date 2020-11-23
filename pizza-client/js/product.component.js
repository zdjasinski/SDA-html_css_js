import {ProductService} from './product.service.js'

export class ProductComponent {
    productService;

    constructor() {
        this.productService = new ProductService();
    }

    fetchData() {
        this.productService.getProducts().then(data => this.renderProducts(data.products))
    }

    addProduct(name, price, desc) {
        this.productService.addProduct(name, price, desc).then(json => {
            console.log(json);
        })
    }

    bindButtons() {
        document.getElementById('fetch-data').addEventListener('click', () => this.fetchData())

        document.getElementById('add-product').addEventListener('click', () => {
            const productName = document.getElementById('name').value;
            const productPrice = document.getElementById('price').value;
            const productDesc = document.getElementById('desc').value;

            this.addProduct(productName, productPrice, productDesc);
        })
    }
    renderProducts(products) {
        const list = document.getElementById('list');
        list.innerHTML = "";

        products.forEach(product => {
            list.innerHTML = list.innerHTML +
            `
                <H1>${product.name}</H1>
                <p>${product.price}</p>
                <p>${product.description}</p>
                <hr>
            `
        })
    }

    init() {
        this.bindButtons();
    }
}