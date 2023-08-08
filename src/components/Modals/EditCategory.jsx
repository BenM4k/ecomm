import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleEditCategory } from "../../redux/slices/modals/modals";
import { editCategory, changeCategory } from "../../redux/slices/category/category";
import { updateProductCategory } from "../../redux/slices/products/productSlice";
const EditCategory = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const { editCategoryModal } = useSelector((store) => store.modal);
    const categories = useSelector((store) => store.category);
    const category = categories.find(c => c.editing === true);
    const dispatch = useDispatch();

    const handleChangeCategory = (e) => {
        e.preventDefault();
        if (newDesc === '' || newTitle === '') return;
        const newCategory = {
            _id: category?._id,
            title: newTitle,
            desc: newDesc,
        };

        const change = {
            prev: category.title,
            new: newTitle,
        }

        dispatch(updateProductCategory(change));
        dispatch(changeCategory(newCategory));
    }
    return (
        <>
            {editCategoryModal && (
                <div className="backdrop">
                    <div className="banner-modal">
                        <button onClick={() => {
                            dispatch(toggleEditCategory());
                            dispatch(editCategory(category?._id));
                        }}>close</button>
                        <h3>Edit Category</h3>
                        <h4>Title: {category?.title}</h4>
                        <p>
                            Description:
                            {category?.desc}
                        </p>

                        <form onSubmit={handleChangeCategory}>
                            <label htmlFor="">New Title</label>
                            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                            <label htmlFor="">New Desc</label>
                            <textarea name="" id="" cols="30" rows="10" value={newDesc} onChange={(e) => setNewDesc(e.target.value)}></textarea>
                            <button type="submit">Update category</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditCategory;