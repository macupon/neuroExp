import { useState } from "react";
import { useAuth } from "../../contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

export default function SignIn() {
  const navigate = useNavigate();
  const {authUser, login, logout, createUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSignin, setLoginSignin] = useState("login");  // login or signup
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (loginSignin==="login") {
        await login(email, password)
        navigate("/user-detail");
      }
      else{
        await createUser(email, password)
        navigate("/user-detail");
      }
    }catch (error) {
      if (error instanceof FirebaseError) {
        // Firebase-specific error handling
        switch (error.code) {
          case "auth/user-not-found":
            setErrorMessage("The email you entered does not exist.");
            break;
          case "auth/invalid-user-credentials":
            setErrorMessage("The email or password are incorrect.");
            break;
          case "auth/email-already-in-use":
            setErrorMessage("An account with this email already exists. Please sign in instead.");
            break;
          default:
            setErrorMessage("The email or password are incorrect.");
        }
      } else {
        // Handle other types of errors
        setErrorMessage("The email or password are incorrect.");
      }
    }
  };

  // Toggle between "login" and "signin"
  const handleChangeLoginSignin = () => {
    setLoginSignin((prevState) => (prevState === "login" ? "signin" : "login"));
  };


  return (
    <div className="flex flex-col items-center">
      <div className="flex bg-white/50 w-[50vw] p-8 mx-10 lg:p-14 rounded-xl mt-10 mb-8 shadow-md justify-center">

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          
          <h1 className="mb-5">{loginSignin === "login" ? "LOG IN" : "CREATE ACCOUNT"}</h1>

          {errorMessage && (
            <span className="mb-4 text-sm text-red-600">{errorMessage}</span>
          )}

          <input
            type="email"
            className="p-2 mb-4 w-[20vw] rounded-lg bg-gray-50 border-solid border-2 border-gray-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            type="password"
            className="p-2 mb-4 w-[20vw] rounded-lg bg-gray-50 border-solid border-2 border-gray-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            type="submit"
            className="p-2 mb-4 w-[20vw] rounded-lg bg-sky-200">
            {loginSignin === "login" ? "Log in" : "Create Account"}
          </button>
          {
            loginSignin==="login" ? 
            <div>
              <span
                className="text-sm italic text-gray-400 mr-2">
                Don't have an account?
              </span>
              <span
                className="text-sm italic cursor-pointer text-sky-700 mr-2"
                onClick={handleChangeLoginSignin}>
                Create an account
              </span>
              <span
                className="block text-xs italic cursor-pointer text-sky-600">
                Forgot my password
              </span>
            </div>
            :
            <div>
              <span
                className="text-sm italictext-gray-400 mr-2"
                onClick={handleChangeLoginSignin}>
                Already have an account?
              </span>
              <span
                className="text-sm italic cursor-pointer text-sky-700"
                onClick={handleChangeLoginSignin}>
                Sign in
              </span>
            </div>
          }

        </form>

        {/* {
          authUser && (
            <div>
              <p>{authUser.email}</p>
              <button onClick={logout}>logout</button>
            </div>
          )
        } */}

      </div>
    </div>
  );
}
