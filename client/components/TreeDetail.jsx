import React from 'react';

const TreeDetail = (props) => {
    const {name, image} = props;

    return (
        <li className="tree-detail media list-group-item">
            <div className="media-left">
                <img src={image.image} alt={name}/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.name}
                </h4>
                <p>In {props.image.county} county.</p>
                <a href={props.image.inat}>See on more on iNaturalist</a>
            </div>
        </li>
    );
};

export default TreeDetail;
