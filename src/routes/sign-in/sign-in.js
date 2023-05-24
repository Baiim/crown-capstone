import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const LoginGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>SIGN IN WITH GOOGLE</div>
      <button onClick={LoginGoogle}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
