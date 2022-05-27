import React, { Component } from 'react'
import './Card.scss'

import CardMUI from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='card-container'>
                <CardMUI sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fruby.vn%2Fbalo-da-nang-3-chieu-xixa%2F&psig=AOvVaw17sHlI-98TtCBu-_Wdpl2W&ust=1653749620171000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDw3sX3__cCFQAAAAAdAAAAABAE"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CardMUI>
            </div>
        )
    }
}
