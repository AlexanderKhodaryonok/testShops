import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom";
import Draggable from 'react-draggable';

import s from './ShopList.module.css'

class ShopsList extends React.Component {

    render() {
        return (
            <>
                <div className={s.wrapper}>
                    <table className={s.table}>
                        <tbody>
                        <tr>
                            <td>Pos</td>
                            <td>Title</td>
                            <td>Address</td>
                            <td>Working hours</td>
                            <td>Products</td>
                            <td></td>
                        </tr>
                        {
                            this.props.shops.map(shop => (
                                    <Draggable
                                        key={shop.id}
                                        bounds="parent"
                                        axis="y"
                                        handle=".handle"
                                        defaultPosition={{x: 0, y: 0}}
                                        position={null}
                                        grid={[25, 25]}
                                        scale={1}
                                        onStart={this.handleStart}
                                        onDrag={this.handleDrag}
                                        onStop={this.handleStop}>
                                        <tr className="handle" data-id={shop.id}>
                                            <td>{shop.number}
                                            </td>
                                            <td>{shop.name}
                                            </td>
                                            <td>{shop.address}
                                            </td>
                                            <td>{shop.workingHours}
                                            </td>
                                            <td>
                                                <NavLink onClick={() => this.props.setShopId(shop.id)}
                                                         to={`products/${shop.id}`}>Products</NavLink>
                                            </td>
                                            <td>
                                                <NavLink onClick={() => this.props.setShopId(shop.id)}
                                                         to={`/shopsList/edit/${shop.id}`}>Edit shop</NavLink>
                                            </td>
                                        </tr>
                                    </Draggable>
                                )
                            )
                        }
                        </tbody>
                    </table>
                    <button className={s.button}><NavLink to={`/shopsList/add`}>Add shop</NavLink></button>
                </div>
            </>
        )
    }
}

ShopsList.propTypes = {
    shops: PropTypes.array,
};

export default ShopsList;