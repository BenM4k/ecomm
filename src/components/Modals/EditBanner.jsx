import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleEditBanner } from "../../redux/slices/modals/modals";
import { editBanner, updateBanner } from "../../redux/slices/banners/banners";
const EditBanner = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const { editBannerModal } = useSelector((store) => store.modal);
    const banners = useSelector((store) => store.banner);
    const banner = banners.find((banner) => banner.editing === true);
    const dispatch = useDispatch();

    const handleChangeBanner = (e) => {
        e.preventDefault();

        if (newTitle === '' || newDesc === '') return;
        const newBanner = {
            id: banner.id,
            title: newTitle,
            desc: newDesc,
        }

        dispatch(updateBanner(newBanner));
    }
    return (
        <>
            {editBannerModal && (
                <div className="backdrop">
                    <div className="banner-modal">
                        <button onClick={() => {
                            dispatch(toggleEditBanner());
                            dispatch(editBanner(banner.id));
                        }}>close</button>
                        <h3>Edit banner</h3>
                        <h4>Title: {banner?.title}</h4>
                        <p>
                            Description:
                            {banner?.desc}
                        </p>

                        <form onSubmit={handleChangeBanner}>
                            <label htmlFor="">New Title</label>
                            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                            <label htmlFor="">New Desc</label>
                            <textarea name="" id="" cols="30" rows="10" value={newDesc} onChange={(e) => setNewDesc(e.target.value)}></textarea>
                            <button type="submit">Update banner</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditBanner;