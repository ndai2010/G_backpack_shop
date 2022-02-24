import React from "react";
import './Banner.scss'
import Banner1 from "../../../../asset/Banner/AdobeStock_273669946_Preview.jpeg"
import Banner2 from "../../../../asset/Banner/close-up-travelers-with-map-compass.jpg"
import Banner3 from "../../../../asset/Banner/male-traveler-making-his-coffee-van.jpg"

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ImgSlider: [],
            // properties: this.state.ImgSlider,
            // property: this.state.ImgSlider[0],
        };
    }



    // nextProperty = () => {
    //     let newIndex = this.state.ImgSlider.id + 1;
    //     this.setState({
    //         property: this.state.ImgSlider[newIndex]
    //     })
    // }

    // prevProperty = () => {
    //     let newIndex = this.state.ImgSlider.id - 1;
    //     this.setState({
    //         property: this.state.ImgSlider[newIndex]
    //     })
    // }


    async componentDidMount() {
        this.setState({
            ImgSlider: [{
                id: 1,
                img: Banner1
            },
            {
                id: 2,
                img: Banner2
            },
            {
                id: 3,
                img: Banner3
            }]
        });
    }
    render() {
        return (
            <div className="Banner">
                <div className="slider">

                    <div className="sliderImg"></div>

                    {/* {
                        this.state.ImgSlider.map((slide, index) => {
                            return (
                            )
                        })
                    } */}
                </div>
                <div className="overlay">
                    <div className="btn-slide">
                        <span className="prev-btn"><i className="fa-solid fa-angle-left"></i></span>
                        <span className="next-btn"><i className="fa-solid fa-angle-right"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;