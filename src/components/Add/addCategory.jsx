import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/slices/category/category";
import Category from "../../models/categoryModel";

const AddCategory = () => {
  const dispatch = useDispatch();

  const [cat, setCat] = useState("");
  const [catDesc, setCatDesc] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const handleAddCategory = () => {
    const newCategory = new Category(cat, catDesc);
    const validatedCategory = newCategory.validate();
    if (validatedCategory.length > 0) {
      setCategoryError(validatedCategory[0])
    } else {
      dispatch(addCategory(newCategory))
      setCategoryError("");
      setCat("");
      setCatDesc("");
    }
  }
  return (
    <>
      <h2>Add a category</h2>
      <label htmlFor="">Title:</label>
      <input type='text' value={cat} onChange={(e) => setCat(e.target.value)} />
      <label htmlFor="">Description:</label>
      <input type='text' value={catDesc} onChange={(e) => setCatDesc(e.target.value)} />
      <button type="button" onClick={handleAddCategory}>Add category</button>
      <span style={{ color: 'red' }}>{categoryError}</span>
    </>
  )
}

export default AddCategory;