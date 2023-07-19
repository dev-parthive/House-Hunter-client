import React, { useContext, useState } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import SmallSpinner from "../../Components/Spinner/SmallSpinner";
import toast from "react-hot-toast";
import { setAuthToken } from "../../Api/auth";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(true);

  //signup
  const signUpHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;
    const phoneNumber= event.target.phoneNumber.value
    const role = event.target.role.value
    console.log(name, email, password, image, phoneNumber, role);
    // for process the image
    const formData = new FormData();
    console.log(formData);
    formData.append("image", image);
    console.log(formData);
    console.log(JSON.stringify(import.meta.env.VITE_REACT_APP_IMAGEBB_API));
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_REACT_APP_IMAGEBB_API}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // const photoUrl = data.data.display_url;
        console.log(data);
      });
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
        onSubmit={signUpHandler}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
              required
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="phoneNumber" className="text-sm">
                  Phone Number
                </label>
              </div>
              <input
                required
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="phone number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="role" className="text-sm">
                  Select your role ?
                </label>
              </div>
              <select
                name="role"
                id="role"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              >
                <option value="House Renter">House Renter</option>
                <option value="House Owner">House Owner</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                {loading ? <SmallSpinner /> : "Sign Up"}
              </PrimaryButton>
            </div>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
