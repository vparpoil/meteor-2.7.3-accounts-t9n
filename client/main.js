import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import Tracker from "meteor/tracker"

import './main.html'
import { T9n } from 'meteor-accounts-t9n'

T9n = (require('meteor-accounts-t9n')).T9n
Template.registerHelper('t', label => T9n.get(label));

T9n.setTracker(Tracker)
const T9N_en = require('meteor-accounts-t9n/build/en')

const T9N_fr = require('meteor-accounts-t9n/build/fr')
T9n.map('fr', T9N_fr)

Template.hello.events({
    'click button'(event, instance) {
        const newLang = T9n.getLanguage() === 'fr' ? 'en' : 'fr'
        T9n.setLanguage(newLang)
    },
})