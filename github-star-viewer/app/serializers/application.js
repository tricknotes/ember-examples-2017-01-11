import DS from 'ember-data';
import {pluralize} from 'ember-inflector';

export default DS.RESTSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      [primaryModelClass.modelName]: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      [pluralize(primaryModelClass.modelName)]: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
