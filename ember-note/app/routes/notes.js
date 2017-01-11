import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: "1", title: "こんにちは！", description: "今日はとっても寒いですね"},
      {id: "2", title: "これは Ember.js のチュートリアルです", description: "ようこそ！"}
    ];
  }
});
