import * as constants from './constants.js'

export class ProductService {
    constructor() {
    }

    async getProducts() {
        const url = constants.API_URL + constants.METHODS.product;

        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }


    async addProduct(name, price, description) {
        const url = constants.API_URL + constants.METHODS.product;

        const request = {
            name,
            price,
            description
        }

        try {
            let res = await fetch(url, {
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