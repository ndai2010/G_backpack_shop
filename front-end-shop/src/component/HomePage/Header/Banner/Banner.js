import React from "react";
import './Banner.scss'
import Banner1 from "../../../../asset/Banner/AdobeStock_273669946_Preview.jpeg"
import Banner2 from "../../../../asset/Banner/close-up-travelers-with-map-compass.jpg"
import Banner3 from "../../../../asset/Banner/male-traveler-making-his-coffee-van.jpg"

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: '',
            properties: this.data.properties,
            property: this.data.properties[0]
        };
    }
    data = {
        "properties": [
            {
                id: 0,
                img: Banner1
            },
            {
                id: 1,
                img: Banner2
            },
            {
                id: 2,
                img: Banner3
            }
        ]

    }
    componentDidMount() {

    }

    nextProperty = () => {
        let newIndex = this.state.property.id + 1;
        this.setState({
            property: this.data.properties[newIndex]
        })
    }

    prevProperty = () => {
        let newIndex = this.state.property.id - 1;
        this.setState({
            property: this.data.properties[newIndex]
        })
    }
    render() {
        let { properties, property } = this.state;
        return (
            <div className="Banner">
                <div className="slider">
                    <div className="sliderImg">
                        {
                            properties && properties.length > 0 &&
                            properties.map(property =>
                                <div className="img" style={{ backgroundImage: `url(${property.img})` }}></div>
                            )
                        }
                    </div>
                    <div className="overlay">
                        <div className="btn-slide">
                            <button className="prev-btn"
                                onClick={() => this.prevProperty()}
                                disabled={property.id === 0}
                            ><i className="fa-solid fa-angle-left"></i></button>
                            <button className="next-btn"
                                onClick={() => this.nextProperty()}
                                disabled={property.id === 2}
                            ><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;