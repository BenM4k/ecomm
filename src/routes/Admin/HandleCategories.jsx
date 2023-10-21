import { useSelector, useDispatch } from 'react-redux';
import AddCategory from '../../components/Add/addCategory';
import { selectAllCategories, useDeleteCategoryMutation } from '../../redux/slices/category/category';
import {TbCategory} from 'react-icons/tb';
import { FiDelete } from 'react-icons/fi';
import { FaEdit} from 'react-icons/fa';

const HandleCategories = () => {
    const categories = useSelector(selectAllCategories);
    const [deleteCategory] = useDeleteCategoryMutation();
    const dispatch = useDispatch();
    // const handleEditCategory = (id) => {
    //     return
    //     // dispatch(editCategory(id));
    // }
  return (
    <>
        <div className="dash-head">
            <TbCategory />
            <h2>Categories List</h2>
        </div>
        <ul className="admin-categories">
            {categories?.map((category) => (
                <li key={category.id}>
                    <h3>{category.title}</h3>
                    <p>{category.desc}</p>
                    <div className="buttons">
                        <button onClick={() => {
                            dispatch(deleteCategory(category._id));
                        }}><FiDelete /></button>
                        <button onClick={() => {}}><FaEdit /></button>
                    </div>
                </li>
            ))}
        </ul>
        <div className="add-category">
            <AddCategory />
        </div>
    </>
  )
}

export default HandleCategories;