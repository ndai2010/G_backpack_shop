import React from "react";
import './Banner.scss'
import Slider from 'react-slick'
import data from "./Data";
class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArr: data.dataSlideShow
        }
    }

    render() {
        let { imgArr } = this.state
        return (
            <Slider>
                {
                    imgArr && imgArr.length > 0 &&
                    imgArr.map(item => {
                        return (
                            <img src={item.picture} alt="slide-show" className="slide-img" />
                        )
                    })
                }
            </Slider>
        )
    }
}

export default SlideShow;