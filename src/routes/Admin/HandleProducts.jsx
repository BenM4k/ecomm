import UploadProduct from '../../components/Add/UploadProduct';
import {BsFillBagCheckFill} from 'react-icons/bs';

const HandleProducts = () => {
  return (
    <div>
        <div className="dash-head">
            <BsFillBagCheckFill />
            <h2>Products List</h2>
        </div>
        <UploadProduct />
    </div>
  )
}

export default HandleProducts;