class Banner {
    constructor(title, desc, img) {
        this.desc = desc;
        this.title = title;
        this.img = img;
    }

    validate() {
        const errors = [];
        if (!this.title || typeof this.title !== "string") {
            errors.push("provide a valid title")
        } else if (!this.desc || typeof this.desc !== "string") {
            errors.push("provide a valid description")
        }

        return errors;
    }
}

export default Banner;