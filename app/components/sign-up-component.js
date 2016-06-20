import Ember from 'ember';

export default Ember.Component.extend({
  firebaseApp: Ember.inject.service(),

  actions: {
    createUser() {
      var email = this.get('email');
      var password = this.get('password');
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
