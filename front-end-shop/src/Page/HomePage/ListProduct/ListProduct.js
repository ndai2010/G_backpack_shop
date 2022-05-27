import React, { Component } from 'react'
import Card from "../../../component/Card/Card"
import Slider from 'react-slick';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let settingListProduct = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "20px",
            slidesToShow: 4,
            speed: 500,
            rows: 2,
            slidesPerRow: 1
        }
        return (
            <div className='list-product'>
                <Slider {...settingListProduct}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Slider>
            </div>
        )
    }
}
