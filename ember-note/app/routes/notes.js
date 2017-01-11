import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: "1", title: "こんにちは！", body: "今日はとっても寒いですね"},
      {id: "2", title: "これは Ember.js のチュートリアルです", body: "ようこそ！"}
    ];
  }
});
