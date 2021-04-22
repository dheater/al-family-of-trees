import React from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from 'meteor/react-meteor-data';
import {ChampionTrees} from "../../imports/collections/ChampionTrees";
import ImageDetail from "./ImageDetail";

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