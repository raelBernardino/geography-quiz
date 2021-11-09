import { getAuth, getRedirectResult, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth();

const retrieveLoginRes = getRedirectResult(auth)
  .then((result: any) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential: any = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

const redirectToLogin = () => getRedirectResult(auth, provider)
export { retrieveLoginRes, redirectToLogin }