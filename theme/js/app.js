class AppViewModel {
    constructor() {
        this.cartItems = ko.observableArray([1,2,3,4,5,6]);
        this.categories = ko.observableArray([1,2,3,4,5,6]);
        this.products = ko.observableArray([]);

        for (let index = 0; index < 30; index++) {
            this.products.push(index);
        }
    }
}

ko.applyBindings(new AppViewModel());