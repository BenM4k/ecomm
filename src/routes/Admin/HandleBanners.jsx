import { editBanner, deleteBanner } from '../../redux/slices/banners/banners';
import AddBanner from '../../components/Add/AddBanner';
import { useSelector, useDispatch } from 'react-redux';
import { FiDelete } from 'react-icons/fi';
import { FaEdit, FaImage } from 'react-icons/fa';

const HandleBanners = () => {
    const dispatch = useDispatch();
    const banners = useSelector((store) => store.banner);

  return (
    <>
        <div className="dash-head">
            <FaImage />
            <h2>Banners List</h2>
        </div>
        <ul className="admin-banners">
            {banners?.map((banner) => (
                <li key={banner.title}>
                    <img src={banner.img} alt={banner.title} />
                    <div className="admin-banner-desc">
                        <h3>{banner.title}</h3>
                        <p>{banner.desc}</p>
                    </div>
                    <div className="buttons">
                        <button onClick={() => {
                            dispatch(deleteBanner(banner.id));
                        }}><FiDelete /></button>
                        <button onClick={() => {
                            dispatch(editBanner(banner.id));
                        }}><FaEdit /></button>
                    </div>
                </li>
            ))}
        </ul>
        <div className="add-category">
            <AddBanner />
        </div>
    </>
  )
}

export default HandleBanners;