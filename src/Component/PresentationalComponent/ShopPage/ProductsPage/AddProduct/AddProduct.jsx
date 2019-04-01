import React from 'react'
import s from './AddProduct.module.css'

const AddProduct = ({addProduct, currentWritingProduct, productTitleOnChange, productDescriptionOnChange}) => {

    const addProductButtonClick = (e) => {
        if (currentWritingProduct.title === null || currentWritingProduct.description === null || !/\S/.test(currentWritingProduct.title) || !/\S/.test(currentWritingProduct.description)) {
            e.preventDefault();
            return alert('Fill in all the fields')
        } else {
            return addProduct(currentWritingProduct)
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.textForm}>
                    <div>
                        <div> Title of product:</div>
                        <div> Description:</div>
                    </div>
                    <div className={s.textFields}>
                        <div>
                            <input onChange={(e) => {
                                return productTitleOnChange(e.currentTarget.value)
                            }} value={currentWritingProduct.title} type="text"/>
                        </div>
                        <div>
                            <input onChange={(e) => {
                                return productDescriptionOnChange(e.currentTarget.value)
                            }} value={currentWritingProduct.description} type="text"/>
                        </div>
                    </div>
                </div>
                <button className={s.button}><span onClick={addProductButtonClick}>Add product</span></button>
            </div>
        </div>
    )
};

export default AddProduct;