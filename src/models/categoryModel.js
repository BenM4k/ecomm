class Category {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }

    validate() {
        const errors = [];
        if (!this.title || typeof this.title !== "string") {
            errors.push("provide a valid category")
        }

        return errors;
    }
}

export default Category;