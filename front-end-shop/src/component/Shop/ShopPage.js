import React, { Fragment } from 'react';
import HomeHeader from '../HomePage/Header/HomeHeader';
import ContentProduct from './ContentProduct/ContentProduct'
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <HomeHeader />
                <ContentProduct />
            </Fragment>
        )
    }
}

export default ShopPage