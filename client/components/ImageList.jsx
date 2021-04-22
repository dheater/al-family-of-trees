import React from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from 'meteor/react-meteor-data';
import {ChampionTrees} from "../../imports/collections/ChampionTrees";
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

const ImageList = ({trees}) => {
    return (
        <ul className="media-list list-group">
            {trees.map(tree => <ImageDetail key={tree.name} image={tree}/>)}
        </ul>
    );
}

export default withTracker(() => {
    Meteor.subscribe('ChampionTrees');
    return {
        trees: ChampionTrees.find({}).fetch()
    };
})(ImageList);