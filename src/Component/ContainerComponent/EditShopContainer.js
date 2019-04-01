import React from "react";
import {connect} from "react-redux";
import EditShop from "../PresentationalComponent/ShopPage/ShopsList/EditShop/EditShop";
import {withRouter} from "react-router";
import {compose} from "redux";
import {
    editShop,
    setShopId,
    shopAddressOnChange, shopNameOnChange,
    shopWorkingHoursOnChange
} from "../../ReduxBLL/ActionThunksCreators/ShopsPageActionCreators";
import {currentWritingShopSelector, editShopSelector} from "../../ReduxBLL/PageSelectors/ShopPageSelectors";

class EditShopContainer extends React.Component {
    componentDidMount() {
        //if the ProductsPage (for ex. press F5) is refresh, the state.currentShopId will be reset. Therefore, it is necessary to synchronize the id from the state and url
        this.props.setShopId(this.props.match.params.id);
    }

    render() {
        return (
            <>
                <EditShop
                    shop={this.props.shop}
                    currentWritingShop={this.props.currentWritingShop}
                    editShop={this.props.editShop}
                    shopNameOnChange={this.props.shopNameOnChange}
                    shopAddressOnChange={this.props.shopAddressOnChange}
                    shopWorkingHoursOnChange={this.props.shopWorkingHoursOnChange}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        shop: editShopSelector(state),
        currentWritingShop: currentWritingShopSelector(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editShop: shop => {
            dispatch(editShop({shop}))
        },
        setShopId: id => {
            dispatch(setShopId({id}))
        },
        shopNameOnChange: (name) => {
            dispatch(shopNameOnChange({name}))
        },
        shopAddressOnChange: address => {
            dispatch(shopAddressOnChange({address}))
        },
        shopWorkingHoursOnChange: workingHours => {
            dispatch(shopWorkingHoursOnChange({workingHours}))
        }
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(EditShopContainer);