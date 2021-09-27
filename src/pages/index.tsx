import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Auth, Amplify } from "aws-amplify";
import { useState } from "react";

export default function Home() {
  const [formState, setFormState] = useState("signUp");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  Amplify.configure({
    mandatorySingIn: true,
    region: "us-east-2",
    userPoolId: "us-east-2_MS4bVOlAT",
    identityPollId: "us-east-2:c11bf9f0-33a1-40d9-8f69-30143ec1b0b3",
    userPoolWebClientId: "4jd9j08b8a0na05b31k9rsvkj",
  });

  /* Sign up function */
  async function signUp() {
    try {
      await Auth.signUp({
        username: email,
        password: "Zignet2709@",
        attributes: {
          email: email,
        },
      });
      /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
      setFormState("confirmSignUp");
    } catch (err) {
      console.log({ err });
    }
  }

  /* Confirm sign up function for MFA */
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, verificationCode);
      /* Once the user successfully confirms their account, update form state to show the sign in form*/
      setFormState("signIn");
    } catch (err) {
      console.log({ err });
    }
  }

  /* Sign in function */
  async function signIn() {
    try {
      await Auth.signIn(email, "Zignet2709@");
      setFormState("signedIn");
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <div>
      {formState === "signUp" && (
        <div>
          signUp
          <input
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button onClick={signUp}>Sign Up</button>
        </div>
      )}
      {formState === "confirmSignUp" && (
        <div>
          confirmSignUp
          <input
            name="verificationCode"
            onChange={(e) => setVerificationCode(e.currentTarget.value)}
          />
          <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
      )}
      {formState === "signIn" && (
        <div>
          <input
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
      {formState === "signedIn" && (
        <div>
          <h1>Welcome to my app!</h1>
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["home"])),
  },
});
