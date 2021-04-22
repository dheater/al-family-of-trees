import React from 'react';

const ImageDetail = (props) => {
    const {name, image} = props;

    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={image.image} alt={name}/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.name}
                </h4>
                <p>In {props.image.county} county.</p>
            </div>
        </li>
    );
};

export default ImageDetail;
