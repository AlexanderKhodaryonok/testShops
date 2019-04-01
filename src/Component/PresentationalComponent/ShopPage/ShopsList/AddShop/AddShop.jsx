import React from 'react'
import {NavLink} from "react-router-dom";
import s from './AddShop.module.css'

const AddShop = ({currentWritingShop, shopNameOnChange, shopAddressOnChange, shopWorkingHoursOnChange, addShop}) => {

    const addShopButtonClick = (e) => {
        if (currentWritingShop.name === null || currentWritingShop.address === null || currentWritingShop.workingHours === null ||
            !/\S/.test(currentWritingShop.name) || !/\S/.test(currentWritingShop.address) || !/\S/.test(currentWritingShop.workingHours)) {
            e.preventDefault();
            return alert('Fill in all the fields')
        } else {
            return addShop(currentWritingShop)
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.textForm}>
                    <div>
                        <div> Title of shop:</div>
                        <div> Address:</div>
                        <div> Working time:</div>
                    </div>
                    <div className={s.textFields}>
                        <div>
                            <input onChange={(e) => {
                                return shopNameOnChange(e.currentTarget.value)
                            }} value={currentWritingShop.name} type="text"/>
                        </div>
                        <div>
                            <input onChange={(e) => {
                                return shopAddressOnChange(e.currentTarget.value)
                            }} value={currentWritingShop.address} type="text"/>
                        </div>
                        <div>
                            <input onChange={(e) => {
                                return shopWorkingHoursOnChange(e.currentTarget.value)
                            }} value={currentWritingShop.workingHours} type="text"/>
                        </div>
                    </div>
                </div>
                <button className={s.button}><NavLink onClick={addShopButtonClick} to={`/shopsList`}>Add shop</NavLink></button>
            </div>
        </div>
    )
};

export default AddShop;

/*
return (
        <div>
            <div>
                <div> Title of shop: <input onChange={(e) => {
                    return shopNameOnChange(e.currentTarget.value)
                }} value={currentWritingShop.name} type="text"/>
                </div>
                <div> Address: <input onChange={(e) => {
                    return shopAddressOnChange(e.currentTarget.value)
                }} value={currentWritingShop.address} type="text"/>
                </div>
                <div> Working time: <input onChange={(e) => {
                    return shopWorkingHoursOnChange(e.currentTarget.value)
                }} value={currentWritingShop.workingHours} type="text"/>
                </div>
            </div>
            <NavLink onClick={addShopButtonClick} to={`/shopsList`}>Add shop</NavLink>
        </div>
    )
 */