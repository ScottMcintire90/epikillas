import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  user: hasMany('user', {async: true}),
  organization: attr(),
  theme: attr(),
  rules: attr(),
  weapon: attr(),
  adminName: attr(),
  adminPassword: attr(),
});
