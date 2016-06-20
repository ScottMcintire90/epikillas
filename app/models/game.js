import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  users: attr(),
  organization: attr(),
  theme: attr(),
  rules: attr(),
  weapon: attr(),
  adminName: attr(),
  adminPassword: attr(),
  users: hasMany('user', {async: true})
});
