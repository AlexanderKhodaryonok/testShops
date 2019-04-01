import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import EditProduct from "../PresentationalComponent/ShopPage/ProductsPage/EditProduct/EditProduct";
import {
    currentShopIdSelector,
    currentWritingProductSelector,
    productSelector
} from "../../ReduxBLL/PageSelectors/ShopPageSelectors";
import {
    editProduct,
    productDescriptionOnChange, productTitleOnChange,
    setProductId,
    setShopId
} from "../../ReduxBLL/ActionThunksCreators/ShopsPageActionCreators";
import {compose} from "redux";


class EditProductContainer extends React.Component {
    componentDidMount() {
        //if the page (for ex. press F5) is refresh, the state.currentProductId will be reset. Therefore, it is necessary to synchronize the id from the state and url
        this.props.setShopId(this.props.match.params.id);
        this.props.setProductId(this.props.match.params.productId)
    }

    render() {
        return (
            <>
                <EditProduct
                    product={this.props.product}
                    productDescriptionOnChange={this.props.productDescriptionOnChange}
                    productTitleOnChange={this.props.productTitleOnChange}
                    currentShopId={this.props.currentShopId}
                    editProduct={this.props.editProduct}
                    currentWritingProduct={this.props.currentWritingProduct}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: productSelector(state),
        currentShopId: currentShopIdSelector(state),
        currentWritingProduct: currentWritingProductSelector(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editProduct: product => {
            dispatch(editProduct({product}))
        },
        setShopId: id => {
            dispatch(setShopId({id}))
        },
        setProductId: id => {
            dispatch(setProductId({id}))
        },
        productDescriptionOnChange: (description) => {
            dispatch(productDescriptionOnChange({description}))
        },
        productTitleOnChange: title => {
            dispatch(productTitleOnChange({title}))
        },
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(EditProductContainer);