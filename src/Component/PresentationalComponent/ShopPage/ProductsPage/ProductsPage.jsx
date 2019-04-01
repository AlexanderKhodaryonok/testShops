import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom";
import ShopsMap from "../../../ContainerComponent/ShopsMapContainer";
import AddProduct from "../../../ContainerComponent/AddProductContainer";
import s from './ProductPage.module.css'

const ProductsPage = ({products, shop, setProductId}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <ShopsMap className={s.map}/>
                <div>
            <table className={s.table}>
                <tbody>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td></td>
                </tr>
                {
                    products && products.map(product => (
                            <tr key={product.id}>
                                <td>{product.title}
                                </td>
                                <td>{product.description}
                                </td>
                                <td><NavLink onClick={() => setProductId(product.id)}
                                             to={`/products/${shop.id}/edit/${product.id}`}>Edit product</NavLink>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
            <button className={s.button}><NavLink to='/shopsList'>Shops list</NavLink></button>
                    <AddProduct/>

                </div>

            </div>
        </div>
    )
};

ProductsPage.propTypes = {
    products: PropTypes.array,
};

export default ProductsPage;