class Order {
    constructor(customerName, items, total, status, createdAt, shippingDetails, paymentMethod,) {
        this.customerName = customerName;
        this.items = items;
        this.total = total;
        this.status = status;
        this.createdAt = createdAt;
        this.shippingDetails = shippingDetails;
        this.paymentMethod = paymentMethod;
    }

    validate() {
        const errors = [];

        if (!this.customerName || typeof this.customerName !== 'string') {
            errors.push('Customer id is required and must be a string');
        } else if (!this.items.length === 0 || typeof this.items !== 'object') {
            errors.push('Please provide valid items for the order');
        } else if (!this.total || typeof this.total !== 'number') {
            errors.push('Total cost of the order is required');
        } else if (!this.status || typeof this.status !== 'string') {
            errors.push('Please provide the status of the order. It must be pending, in process or completed');
        } else if (!this.createdAt || typeof this.createdAt !== 'string') {
            errors.push("please enter a valid date for your order creation");
        } else if (!this.shippingDetails.length === 0 || typeof this.shippingDetails !== 'object') {
            errors.push("please enter a valid details for the order shipping");
        } else if (!this.paymentMethod.length === 0 || typeof this.paymentMethod !== 'object') {
            errors.push("please enter a valid details for your order payment method");
        }

        return errors;
    }
}

export default Order;