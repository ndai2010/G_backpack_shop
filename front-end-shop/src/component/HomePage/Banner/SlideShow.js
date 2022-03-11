import React from "react";
import './Banner.scss'
import Slider from 'react-slick'
import Banner1 from '../../../asset/Banner/bn1.jpg'
import Banner2 from '../../../asset/Banner/close-up-travelers-with-map-compass.jpg'
import Banner3 from '../../../asset/Banner/male-traveler-making-his-coffee-van.jpg'

class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Slider >
                <div className="slide-img"></div>
                <div className="slide-img"></div>
                <div className="slide-img"></div>
            </Slider>
        )
    }
}

export default SlideShow;