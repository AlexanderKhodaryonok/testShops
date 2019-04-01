import {connect} from "react-redux";
import AddShop from "../PresentationalComponent/ShopPage/ShopsList/AddShop/AddShop";
import {currentWritingShopSelector} from "../../ReduxBLL/PageSelectors/ShopPageSelectors";
import {addShopThunkCreator} from "../../ReduxBLL/ActionThunksCreators/ThunksCreators";
import {
    shopAddressOnChange,
    shopNameOnChange,
    shopWorkingHoursOnChange
} from "../../ReduxBLL/ActionThunksCreators/ShopsPageActionCreators";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        currentWritingShop: currentWritingShopSelector(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addShop: (shop) => {
              dispatch(addShopThunkCreator({shop}))
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
    connect(mapStateToProps, mapDispatchToProps)
)(AddShop);