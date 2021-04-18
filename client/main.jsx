import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { Template } from 'meteor/templating'

import './main.html';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});

if (Meteor.isClient) {
  // This code only runs on the client
  Template.myParagraph.helpers({
    text: 'This is paragraph...'
  });
}
