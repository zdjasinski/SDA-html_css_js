export class ProductService {
    url = "http://localhost:8080/api/v1/product";

    constructor() {
    }

    async getProducts() {
        try {
            let res = await fetch(this.url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(name, price, description) {
        const request = {
            name,
            price,
            description
        }

        try {
            let res = await fetch(this.url, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            });

            return await res;
        } catch (error) {
            console.log(error);
        }
    }
}
