import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {App} from './components/App';

import './main.html';

Meteor.startup(() => {
    render(<App />, document.querySelector('.render-target'));
});
