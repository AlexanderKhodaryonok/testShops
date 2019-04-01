import React from 'react'
import PropTypes from 'prop-types'
import s from './ShopsMap.module.css'

const ShopsMap = ({shops, match}) => {
    //the function determines the shop being viewed.
    const isShopPicked = (shopId, urlId) => {
        if (shopId === urlId) {
            return s.pickedMapItem
        }
        return ''
    };

    return (
        <div className={s.wrapper}>
            <div className={s.title}>Map</div>
            <div className={s.mapItems}>
                {
                    shops && shops.map(shop => (
                            <div key={shop.id} className={isShopPicked(shop.id, match.params.id) + ' ' + s.mapItem}>
                                {shop.name}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
};

ShopsMap.propTypes = {
    shopsNames: PropTypes.array,
};

export default ShopsMap;