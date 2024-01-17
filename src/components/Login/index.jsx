import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const token = res.user.accessToken;
        localStorage.setItem("auth-token", token);
        if (token) {
          navigate("/select-slide");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      <div
        id="login-popup"
        tabIndex="-1"
        className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-5">
              <h3 className="text-2xl mb-0.5 font-medium"></h3>
              <p className="mb-4 text-sm font-normal text-gray-800"></p>

              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                  Login to your account
                </p>
                <p className="mt-2 text-sm leading-4 text-slate-600">
                  You must be logged in to perform this action.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <button
                  onClick={signInWithGoogle}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  Signin with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
