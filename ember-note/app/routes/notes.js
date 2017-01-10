import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: "1", title: "こんにちは！"},
      {id: "2", title: "これは Ember.js のチュートリアルです"}
    ];
  }
});
