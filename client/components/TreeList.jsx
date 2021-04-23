import React from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from 'meteor/react-meteor-data';
import {ChampionTrees} from "../../imports/collections/ChampionTrees";
import TreeDetail from "./TreeDetail";

const TreeList = ({trees}) => {
    return (
        <ul className="tree-list media-list list-group">
            {trees.map(tree => <TreeDetail key={tree.name} image={tree}/>)}
        </ul>
    );
}

export default withTracker(() => {
    Meteor.subscribe('ChampionTrees');
    return {
        trees: ChampionTrees.find({}).fetch()
    };
})(TreeList);