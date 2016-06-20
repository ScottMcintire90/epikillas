import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user')
    });
  },
  firebaseApp: Ember.inject.service(),

  actions: {
    createUser(params) {
      var email = params.email;
      var password = params.password;
      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(email, password);
      var user = this.store.createRecord('user', params);
      user.save();
      console.log(params);
      this.transitionTo('index');
    }
  }
});
