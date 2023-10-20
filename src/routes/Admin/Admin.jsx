import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Admin.scss';
import {BsFillBagCheckFill} from 'react-icons/bs';
import {TbCategory} from 'react-icons/tb';
import { FaUser, FaClipboardCheck, FaImage } from 'react-icons/fa';

import HandleUsers from './HandleUsers';
import HandleProducts from './HandleProducts';
import HandleCategories from './HandleCategories';
import HandleBanners from './HandleBanners';
import HandleOrders from './HandleOrders';
import Records from './Records';

const Admin = () => {
    const myList = [
        {
            name: 'Users',
            pic: <FaUser />,
        },
        {
            name: 'Categories',
            pic: <TbCategory />,
        },
        {
            name: 'Orders',
            pic: <FaClipboardCheck />,
        },
        {
            name: 'Banners',
            pic: <FaImage />,
        },
        {
            name: 'Products',
            pic: <BsFillBagCheckFill />,
        }
    ]
    const [activeTab, setActiveTab] = useState(() => 'users');

    const { users } = useSelector((store) => store.user);

    const handleDisplay = (category) => {
        setActiveTab(category)
    }
    
    return (
        <div className='admin-wrapper'>
            <div className="nav-list">
                {myList.map((list) => (
                    <button
                        key={list.name}
                        onClick={() => handleDisplay(list?.name.toLowerCase())}
                        className={activeTab === list?.name.toLowerCase() ? 'active' : ''}
                    >
                        {list.pic}
                        <span>{list.name}</span>
                    </button>
                ))}
            </div>

            <div className="list-and-create-product">
                <Records />

                {activeTab === 'users' && (
                    <div className="users">
                        <div className="dash-head">
                            <FaUser />
                            <h2>Users List</h2>
                        </div>
                        {users?.length
                            ? <HandleUsers /> 
                            : <p>No users to display</p>
                        }
                    </div>
                )}

                {activeTab === 'products' && (
                    <HandleProducts />
                )}

                {activeTab === 'categories' && (
                    <div className='admin-cat'>
                        <HandleCategories />
                    </div>
                )}

                {activeTab === 'banners' && (
                    <div className='dash-banners'>
                            <HandleBanners />
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className='users-orders'>
                        <div className="dash-head">
                            <FaClipboardCheck />
                            <h2>Orders List</h2>
                        </div>
                        <div className="orders">
                            <HandleOrders />
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Admin