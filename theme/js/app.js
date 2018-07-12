class Product {
    constructor() {
        this.isChecked = ko.observable(false);
    }
}

class AppViewModel {
    constructor() {
        this.cartItems = ko.observableArray([]);
        this.categories = ko.observableArray([1,2,3,4,5,6]);
        this.products = ko.observableArray([]);

        this.hasSelectedItems = ko.computed(() => this.cartItems().some(x => x.isChecked()), this);
        this.checkedItems = ko.computed(() => this.cartItems().filter(x => x.isChecked()).length, this);

        for (let index = 0; index < 30; index++) {
            this.products.push(index);
        }

        for (let index = 0; index < 10; index++) {
            this.cartItems.push(new Product());
        }
    }
    
    toggle(data) {
        data.isChecked(!data.isChecked());
    }

    uncheckAll() {
        this.cartItems().forEach(x => x.isChecked(false));
    }
}

ko.applyBindings(new AppViewModel());