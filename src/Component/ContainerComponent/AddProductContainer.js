import {connect} from "react-redux";
import AddProduct from "../PresentationalComponent/ShopPage/ProductsPage/AddProduct/AddProduct";
import {currentWritingProductSelector} from "../../ReduxBLL/PageSelectors/ShopPageSelectors";
import {
    addProduct,
    productDescriptionOnChange,
    productTitleOnChange
} from "../../ReduxBLL/ActionThunksCreators/ShopsPageActionCreators";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        currentWritingProduct: currentWritingProductSelector(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product) => {
            dispatch(addProduct({product}))
        },
        productTitleOnChange: (title) => {
            dispatch(productTitleOnChange({title}))
        },
        productDescriptionOnChange: (description) => {
            dispatch(productDescriptionOnChange({description}))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AddProduct);