import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', {path: 'user/:login'}, function() {
    this.route('repositories', {path: '/'});
  });
});

export default Router;
