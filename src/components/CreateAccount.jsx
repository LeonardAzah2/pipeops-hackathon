import React from 'react';

const CreateAccount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">HealthHelp</h2>
        <h3 className="text-xl font-semibold text-center mb-2">Create Account</h3>
        <p className="text-center text-gray-600 mb-6">Provide the details below to Login</p>

        <form className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#forgot" className="text-blue-600 hover:underline">Forget Password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
          >
            Continue
          </button>
        </form>

        <div className="text-center my-4">
          <span className="text-gray-600">Or</span>
        </div>

        <button
          className="w-full py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center transition duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-6 h-6 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
