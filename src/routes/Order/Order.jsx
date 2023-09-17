import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './Order.scss';
import phone from '../../assets/pngimg.com - iphone_14_PNG24.png';


const Order = () => {
    const { id } = useParams();
    const orders = useSelector((store) => store.order);
    const order = orders?.find((order) => order?.id === id);
    return (
        <div className="order-container">
            <h2>Order Receipt</h2>
            <div className="order-head">
                <p>Date : {order?.createdAt}</p>
                <p>id : {order?.id}</p>
            </div>
            <br />
            <ul>
                {order?.items.map(item => (
                    <li key={item._id}>
                        <div className="prod-dt-head">
                            <img src={phone} alt={item.title} loading="lazy" />
                            <div className="head-dt">
                                <h3>{item.title}</h3>
                                <p className="head-dt-item">Item count: {item.itemCount}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                        <div className="prod-tracking">
                            <button>Track Order</button>
                        </div>
                    </li>
                ))}
            </ul>
            <br />
            <div className="usr-details">
                <h3>Customer details</h3>
                <p>Country: {order?.shippingDetails[0]}</p>
                <p>Street: {order?.shippingDetails[1]}</p>
                <p>Street Address: {order?.shippingDetails[2]}</p>
                <p>Road: {order?.shippingDetails[3]}</p>
                <p>Post Code: {order?.shippingDetails[4]}</p>
            </div>
            <div className="order-footer">
                <p>Thanks for your Order! {order?.customerName}</p>
                <p>Total: <span>${order?.total}</span></p>
            </div>
        </div>
    )
}

export default Order