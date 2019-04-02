import React from "react";
import {connect} from "react-redux";
import ProductsPage from "../PresentationalComponent/ShopPage/ProductsPage/ProductsPage";
import {setProductId, setShopId} from "../../ReduxBLL/ActionThunksCreators/ShopsPageActionCreators";
import {productsSelector, shopByIdSelector} from "../../ReduxBLL/PageSelectors/ShopPageSelectors";
import {compose} from "redux";
import {withRouter} from "react-router";
import {createStructuredSelector} from 'reselect'

class ProductsPageContainer extends React.Component {
    componentDidMount() {
        //if the ProductsPage (for ex. press F5) is refresh, the state.currentShopId will be reset. Therefore, it is necessary to synchronize the id from the state and url
        this.props.setShopId(this.props.match.params.id)
    }

    render() {
        return (
            <>
                <ProductsPage products={this.props.products}
                              shop={this.props.shop}
                              setProductId={this.props.setProductId}
                />
            </>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    products: productsSelector,
    shop: shopByIdSelector
});


const mapDispatchToProps = dispatch => {
    return {
        setProductId: id => {
            dispatch(setProductId({id}))
        },
        setShopId: id => {
            dispatch(setShopId({id}))
        }

    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsPageContainer);