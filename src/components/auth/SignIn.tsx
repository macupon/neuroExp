import { useState } from "react";
import { useAuth } from "../../contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { useUser } from "../../contexts/UserContext";
import { User } from "../../models/user";
import { UserManager } from "../../services/database/UserManager";

export default function SignIn() {  
  const navigate = useNavigate();
  const { login, createUserAuth } = useAuth();
  // const { setDocument, getDocument } = useDB();
  const { setUser } = useUser()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [loginMode, setLoginMode] = useState<"login" | "signup">("login");  // login or signup
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (loginMode==="login") {
        const userCredential = await login(email, password)
        // No need to 'setUser' as since the authUser is updated, the effect in the userContext will trigger and call 'setUser'
        navigate("/user-detail");
      }
      else{
        // create user in Auth
        const userCredential = await createUserAuth(email, password);
        // add user to the database and fetch it
        const user = await UserManager.createUser(name, surname, userCredential)
        //  // Fetch the newly created user data
        if (user) {
          setUser(user);
          navigate("/user-detail");
        } else {
          setErrorMessage("Failed to retrieve user data after signup.");
        }
      }
    } catch (error) {
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
          case "auth/weak-password":
            setErrorMessage("The password is too weak. Please choose a stronger password.");
            break;
          default:
            setErrorMessage("An error occurred during authentication. Please try again.");
        }
      } else {
        // Handle other types of errors
        setErrorMessage("The email or password are incorrect.");
      }
    }
  };

  // Toggle between "login" and "signin"
  const handleChangeLoginSignin = () => {
    setLoginMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
    setErrorMessage(null); // Clear any existing error messages
  };


  return (
    <div className="flex flex-col items-center">
      <div className="flex bg-white/50 w-[50vw] p-8 mx-10 lg:p-14 rounded-xl mt-10 mb-8 shadow-md justify-center">

        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          
          <h1 className="mb-5">{loginMode === "login" ? "LOG IN" : "CREATE ACCOUNT"}</h1>

          {errorMessage && (
            <span className="mb-4 text-sm text-red-600">{errorMessage}</span>
          )}

          {
            loginMode !== "login" && (
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  className="p-2 mb-4 w-full rounded-lg bg-gray-50 border-solid border-2 border-gray-300"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
                <input
                  type="text"
                  className="p-2 mb-4 w-full rounded-lg bg-gray-50 border-solid border-2 border-gray-300"
                  placeholder="Enter your surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                ></input>
              </div>
            )
          }

          <input
            type="email"
            className="p-2 mb-4 w-full rounded-lg bg-gray-50 border-solid border-2 border-gray-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>

          <input
            type="password"
            className="p-2 mb-4 w-full rounded-lg bg-gray-50 border-solid border-2 border-gray-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <button
            type="submit"
            className="p-2 mb-4 w-full rounded-lg bg-sky-200 hover:bg-sky-300 transition-colors">
            {loginMode === "login" ? "Log in" : "Create Account"}
          </button>
          {
            loginMode==="login" ? 
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
      </div>
    </div>
  );
}
