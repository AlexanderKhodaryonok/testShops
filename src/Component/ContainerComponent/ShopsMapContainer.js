import {connect} from "react-redux";
import ShopsMap from "../PresentationalComponent/ShopPage/ShopsMap/ShopsMap";
import {compose} from "redux";
import {shopsSelector} from "../../ReduxBLL/PageSelectors/ShopPageSelectors";
import {withRouter} from "react-router";

const mapStateToProps = state => {
    return {
        shops: shopsSelector(state),
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(ShopsMap);
