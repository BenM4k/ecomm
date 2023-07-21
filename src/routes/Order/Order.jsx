import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
const Order = () => {
    const { id } = useParams();
    const orders = useSelector((store) => store.order);
    const order = orders?.find((order) => order?.id === id);
    return (
        <div>
            <h2>Order detail ({id})</h2>
            <p>id : {order?.id}</p>
            <p>User: {order?.customerName}</p>
            <p>Created : {order?.createdAt}</p>
            <p>Total: {order?.total}</p>
            <br />
            <ul>
                {order?.items.map(item => (
                    <li key={item._id}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>Item count: {item.itemCount}</p>
                    </li>
                ))}
            </ul>
            <br />
            <p>Country: {order?.shippingDetails[0]}</p>
            <p>Street: {order?.shippingDetails[1]}</p>
            <p>Street Address: {order?.shippingDetails[2]}</p>
            <p>Road: {order?.shippingDetails[3]}</p>
            <p>Post Code: {order?.shippingDetails[4]}</p>

        </div>
    )
}

export default Order