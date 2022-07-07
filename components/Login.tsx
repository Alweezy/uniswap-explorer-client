import { useMoralis } from "react-moralis";

const Login: React.FC = () => {
  const { authenticate, authError } = useMoralis();
  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-white hover:bg-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        onClick={() => authenticate()}
      >
        <div className="h-6 w-6 mr-2">
          <img src="images/metaMask.svg" />
        </div>
        Login with MetaMask
      </button>
      {authError && (
        <div
          className="right-1/2 translate-x-1/2 absolute top-10 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-100 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">{authError.name}</span>
          {authError.message}
        </div>
      )}
    </>
  );
};

export default Login;
