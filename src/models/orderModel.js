class Order {
    constructor(id, customerId, items, total, status, createdAt, shippingDetails, paymentMethod,) {
        this.id = id;
        this.customerId = customerId;
        this.items = items;
        this.total = total;
        this.status = status;
        this.createdAt = createdAt;
        this.shippingDetails = shippingDetails;
        this.paymentMethod = paymentMethod;
    }
}

export default Order;