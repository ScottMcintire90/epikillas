import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      games: this.store.findAll('game')
    });
  },
  actions: {
    save(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
