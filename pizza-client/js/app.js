import {ProductComponent} from "./product.component.js";

class App {
    constructor() {
        this.productComponent = new ProductComponent();
    }

    init() {
        this.productComponent.init();
    }
}

const app = new App();

app.init();