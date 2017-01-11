import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.lorem.sentence(); },
  body() { return faker.lorem.paragraphs(); }
});
