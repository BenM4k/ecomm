class Product {
    constructor(title, description, price, user, category) {
        this.title = title;
        this.description = description;
        // this.imageurl = imageurl;
        this.price = price;
        this.user = user;
        this.category = category;
    }

    validate() {
        const errors = [];

        if (!this.title || typeof this.title !== 'string') {
            errors.push('Product name is required and must be a string');
        } else if (!this.description || typeof this.description !== 'string') {
            errors.push('Please provide a description for the product');
            // } else if (!this.imageurl || typeof this.imageurl !== 'object') {
            //     errors.push('Please add a valide image for the product');
        } else if (!this.price || typeof this.price !== 'number') {
            errors.push('Please provide a price number for the product');
        } else if (!this.user || typeof this.user !== 'string') {
            errors.push('Please provide the owner of the product');
        } else if (!this.category || typeof this.category !== 'string') {
            errors.push("please enter a valid category for your product");
        }

        return errors;
    }
}

export default Product;