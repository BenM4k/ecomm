class Category {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }

    validate() {
        const errors = [];
        if (!this.title || typeof this.title !== "string") {
            errors.push("provide a valid title for the category")
        }
        else if (!this.desc || typeof this.desc !== "string") {
            errors.push("provide a valid description for the category")
        }

        return errors;
    }
}

export default Category;