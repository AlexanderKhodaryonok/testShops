import ShopsList from "../PresentationalComponent/ShopPage/ShopsList/ShopsList";
import {connect} from "react-redux";
import {compose} from "redux";
import {shopsSelector} from "../../ReduxBLL/PageSelectors/ShopPageSelectors";
import {setShopId} from "../../ReduxBLL/ActionThunksCreators/ShopsPageActionCreators";

const mapStateToProps = state => {
    return {
        shops: shopsSelector(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setShopId: id => {
            dispatch(setShopId(id))
        }

    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ShopsList);