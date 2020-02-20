import firebase from 'src/services/firebase';

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
const signIn = () => {
  firebase.auth().signInWithRedirect(provider);
}

export default signIn;