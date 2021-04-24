import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating'
import {render} from 'react-dom';
import {App} from '/client/components/App';

import './templates/layout.html'
import './main.html';

Meteor.startup(() => {
    render(<App/>, document.querySelector('.container'));
});

Template.layout.events({})
