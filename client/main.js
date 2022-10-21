import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';
import Tracker from "meteor/tracker";

T9n = (require('meteor-accounts-t9n')).T9n;
T9n.setTracker(Tracker);
const T9N_en = require('meteor-accounts-t9n/build/en');
T9n.map('en', T9N_en);
const T9N_fr = require('meteor-accounts-t9n/build/fr');
T9n.map('fr', T9N_fr);

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});
