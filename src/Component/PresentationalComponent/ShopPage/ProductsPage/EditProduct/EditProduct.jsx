import React from 'react'
import {NavLink} from "react-router-dom";
import s from "../../ShopsList/EditShop/EditShop.module.css";

const EditProduct = ({currentShopId, product, currentWritingProduct, productDescriptionOnChange, productTitleOnChange, editProduct}) => {
    const editProductButtonClick = () => {
        return editProduct(currentWritingProduct)
    };

    return (
        <>
            {product &&
            <div className={s.wrapper}>
                <div className={s.content}>
                    <div className={s.textForm}>
                        <div>
                            <div> Title of product:
                            </div>
                            <div> Description:</div>
                        </div>
                        <div className={s.textFields}>
                            <div>
                                <input onChange={(e) => {
                                    return productTitleOnChange(e.currentTarget.value)
                                }} defaultValue={product.title} type="text"/>
                            </div>
                            <div>
                                <input onChange={(e) => {
                                    return productDescriptionOnChange(e.currentTarget.value)
                                }} defaultValue={product.description} type="text"/>
                            </div>
                        </div>
                    </div>
                    <button className={s.button}><NavLink onClick={editProductButtonClick}
                                                          to={`/products/${currentShopId}`}>Save</NavLink></button>
                </div>
            </div>
            }
        </>
    )
};

export default EditProduct;