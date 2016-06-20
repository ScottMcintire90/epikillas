import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';


export default Model.extend({
  user: attr(),
  name: attr(),
  organization: attr(),
  theme: attr(),
  rule: attr(),
  weapon: attr(),
  adminName: attr(),
  adminPassword: attr(),
});
