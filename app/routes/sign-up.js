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
      var self = this;
      auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
        debugger;
        const user = self.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email
        });
        return user.save();
      });
    }

  }
});
