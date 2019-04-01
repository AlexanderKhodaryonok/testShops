import React from 'react'
import {NavLink} from "react-router-dom";
import s from './EditShop.module.css'

const EditShop = ({shop, currentWritingShop, editShop, shopNameOnChange, shopAddressOnChange, shopWorkingHoursOnChange}) => {
    debugger
    const editShopButtonClick = () => {
        return editShop(currentWritingShop)
    };

    return (
        <>
            {
                shop &&
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <div className={s.textForm}>
                            <div>
                                <div> Title of shop:</div>
                                <div>Address:</div>
                                <div>Working time:</div>
                            </div>
                            <div className={s.textFields}>
                                <div>
                                    <input onChange={(e) => {
                                        return shopNameOnChange(e.currentTarget.value)
                                    }} defaultValue={shop.name} type="text"/>
                                </div>
                                <div>
                                    <input onChange={(e) => {
                                        return shopAddressOnChange(e.currentTarget.value)
                                    }} defaultValue={shop.address} type="text"/>
                                </div>
                                <div>
                                    <input onChange={(e) => {
                                        return shopWorkingHoursOnChange(e.currentTarget.value)
                                    }} defaultValue={shop.workingHours} type="text"/>
                                </div>
                            </div>
                        </div>
                        <button className={s.button}><NavLink onClick={editShopButtonClick}
                                                              to={`/shopsList`}>Save</NavLink>
                        </button>
                    </div>
                </div>
            }
        </>
    )
};

export default EditShop;