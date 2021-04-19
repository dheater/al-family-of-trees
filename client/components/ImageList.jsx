import React from 'react';
import ImageDetail from "./ImageDetail";

const AL_CHAMPION_TREES = [
    {
        name: 'ALDER, Hazel',
        species: 'Alnus serrulata',
        year_named_champion: '2013',
        circumference_in: '15',
        height_ft: '36',
        spread_ft: '18',
        total_points: '56',
        county: 'Talladega',
        last_year_remeasured: '2018',
        owner: 'Allen McBride',
        nominator: 'John McBride',
        image: 'https://dummyimage.com/600x400'
    },
    {
        name: 'AMERICAN SMOKETREE',
        species: 'Cotinus obovatu',
        year_named_champion: '2010',
        circumference_in: '61',
        height_ft: '64',
        spread_ft: '38',
        total_points: '135',
        county: 'Madison',
        last_year_remeasured: '2021',
        owner: 'Carol Rampey',
        nominator: 'Melody Stewart',
        image: 'https://dummyimage.com/600x400'
    }
];

const ImageList = () => {
    const RenderedImages = AL_CHAMPION_TREES.map(image => {
        return <ImageDetail key={image.name} image={image}/>
    });

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

export default ImageList;