import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.lorem.words,
  body: faker.lorem.sentence
});
