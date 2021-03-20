import React from "react";
import {Carousel} from 'antd';

let imagenesDefault = 'https://cdnb.artstation.com/p/assets/images/images/028/853/683/large/nicholas-cole-jordan-flgtz-rickmorty-panorama-watermarked.jpg?1595716690'
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `URL(${imagenesDefault})`,
};
const Carrusels = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>Morty Smith</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Beth Smith</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Rick Sanchez</h3>
            </div>
            <div>
                <h3 style={contentStyle}>The Rick and Morty API
                </h3>
            </div>
        </Carousel>
    )
}
export default Carrusels;
