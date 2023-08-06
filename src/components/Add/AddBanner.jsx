import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addBanner } from '../../redux/slices/banners/banners';
import Banner from '../../models/bannerModel';
import photo from '../../assets/pexels-nappy-935985.jpg';

const AddBanner = () => {
    const dispatch = useDispatch();

    const [bannerTitle, setBannerTitle] = useState("");
    const [bannerDesc, setBannerDesc] = useState("");
    const [bannerError, setBannerError] = useState("");

    const handleAddBanner = () => {
        const newBanner = new Banner(bannerTitle, bannerDesc, photo);
        const validateBanner = newBanner.validate();

        if (validateBanner.length > 0) {
            validateBanner.forEach((error) => {
                setBannerError(error)
            })
        } else {
            dispatch(addBanner(newBanner))
            setBannerError("");
            setBannerTitle("");
            setBannerDesc("");
            console.log("new banner created")
        }
    }

    return (
        <>
            <h2>Add a banner</h2>
            <label>Banner header</label>
            <input type='text' value={bannerTitle} onChange={(e) => setBannerTitle(e.target.value)} />
            <label>Banner description</label>
            <input type='text' value={bannerDesc} onChange={(e) => setBannerDesc(e.target.value)} />
            <button type="button" onClick={handleAddBanner}>Add a banner</button>
            <span style={{ color: 'red' }}>{bannerError}</span>
        </>
    )
}

export default AddBanner;