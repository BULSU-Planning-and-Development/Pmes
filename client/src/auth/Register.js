import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { useProjectContext, SET_ACTION, REGISTER_USER } from '../../context'

// import { Institutes } from '../../utils'

import {
  ChevronDownIcon,
  ChevronUpIcon,
  EyeOffIcon,
  EyeOnIcon,
} from "../assets/assets";

import "../../../client/src/styles/register.css";

import { BulSULogo } from "../assets/assets";
import { OPCRLogo } from "../assets/assets";
import { VectorForLogo1SVG } from "../assets/assets";
import { VectorForLogo2SVG } from "../assets/assets";

import { LoginIllustration } from "../assets/assets";
import { BackgroundElementSVG } from "../assets/assets";

function Register() {
  const navigate = useNavigate();
  // const [, dispatch] = useProjectContext()
  const [credentials, setCredentials] = useState({
    emailAddress: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    gender: "male",
    institute: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showInstituteDropdown, setShowInstituteDropdown] = useState(false);
  const [error, setError] = useState({ isError: false, errorMessage: "" });
  const [loading, setLoading] = useState(false);

  // const sortedInstitutes = [...Institutes].sort((a, b) =>
  //   a.institute.localeCompare(b.institute)
  // )

  const toggleGenderDropdown = () => {
    setShowGenderDropdown(!showGenderDropdown);
  };

  const toggleInstituteDropdown = () => {
    setShowInstituteDropdown(!showInstituteDropdown);
  };

  const isBulsuEmail = (email) => {
    return email.endsWith("@bulsu.edu.ph");
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setCredentials({ ...credentials, emailAddress: value });

    if (!isBulsuEmail(value)) {
      setError({
        isError: true,
        errorMessage: "Please use a BulSU email address",
      });
    } else {
      setError({ isError: false, errorMessage: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (credentials.password !== credentials.confirmPassword) {
      setError({ isError: true, errorMessage: "Passwords do not match" });
      setLoading(false);
      return;
    }

    if (credentials.emailAddress) {
      window.localStorage.setItem("verification", true);
      // dispatch({ type: SET_ACTION, payload: 'Register' })
      // dispatch({ type: REGISTER_USER, payload: credentials })
      setLoading(false);
      navigate("/verification");

      // await requestOtp({
      //   action: 'registration',
      //   receiver: credentials.emailAddress,
      // })
    }
  };

  useEffect(() => {
    document.title = "Registration";
  }, []);

  return (
    <section id="registration">
      <div className="wrapper">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <header>
            <div className="brandLogo">
              <img src={VectorForLogo1SVG} alt="Vector" />
              <img src={BulSULogo} alt="BulSU Logo" className="logo" />
              <img src={OPCRLogo} alt="OPCR Logo" className="logo" />
              <img src={VectorForLogo2SVG} alt="Vector" />
            </div>

            <div className="headingAndSubtitle">
              <h1>Create your account</h1>
              <p>
                Enter your credentials and details below to sign up your
                account.
              </p>
            </div>
          </header>

          {/* Input Fields */}
          <div className="inputFields">
            <div>
              <div className="wrapper">
                <div className="form-group">
                  <label htmlFor="forename">
                    First Name
                    <span className="required-symbol">*</span>
                  </label>

                  <input
                    type="text"
                    name="forename"
                    placeholder="Enter your first name"
                    style={{
                      border: `${error.isError && "1px solid #C01F28"}`,
                    }}
                    value={credentials.firstName}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="surname">
                    Last Name
                    <span className="required-symbol">*</span>
                  </label>

                  <input
                    type="text"
                    name="surname"
                    placeholder="Enter your last name"
                    style={{
                      border: `${error.isError && "1px solid #C01F28"}`,
                    }}
                    value={credentials.lastName}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="gender">
                  Gender
                  <span className="required-symbol">*</span>
                </label>

                <div className="select input-field">
                  <select
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        gender: e.target.value,
                      })
                    }
                    onClick={toggleGenderDropdown}
                    name="gender"
                    id="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  <div className="suffix">
                    {showGenderDropdown ? (
                      <ChevronUpIcon color="#232323" />
                    ) : (
                      <ChevronDownIcon color="#232323" />
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="institute">
                  Institute
                  <span className="required-symbol">*</span>
                </label>

                <div className="select input-field">
                  <select
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        institute: e.target.value,
                      })
                    }
                    onClick={toggleInstituteDropdown}
                    name="institute"
                    id="institute"
                  >
                    {/* {sortedInstitutes.map((inst) => (
                      <option key={inst._id_} value={inst.institute}>
                        {inst.institute}
                      </option>
                    ))} */}
                  </select>

                  <div className="suffix">
                    {showInstituteDropdown ? (
                      <ChevronUpIcon color="#232323" />
                    ) : (
                      <ChevronDownIcon color="#232323" />
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="emailAddress">
                  Email Adress
                  <span className="required-symbol">*</span>
                  <span className="guide">(BulSU Email Address)</span>
                </label>

                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Enter your email address"
                  value={credentials.emailAddress}
                  onChange={handleEmailChange}
                  style={{ border: `${error.isError && "1px solid #C01F28"}` }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password
                  <span className="required-symbol">*</span>
                </label>

                <div
                  className="input-field"
                  style={{ border: `${error.isError && "1px solid #C01F28"}` }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                  />

                  <a
                    onClick={() => setShowPassword(!showPassword)}
                    className="suffix"
                  >
                    {showPassword ? (
                      <EyeOffIcon color="#B1B3B6" />
                    ) : (
                      <EyeOnIcon color="#B1B3B6" />
                    )}
                  </a>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                  <span className="required-symbol">*</span>
                </label>

                <div
                  className="input-field"
                  style={{ border: `${error.isError && "1px solid #C01F28"}` }}
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={credentials.confirmPassword}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        confirmPassword: e.target.value,
                      })
                    }
                  />

                  <a
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="suffix"
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon color="#B1B3B6" />
                    ) : (
                      <EyeOnIcon color="#B1B3B6" />
                    )}
                  </a>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error.isError && <p className="error">{error.errorMessage}</p>}

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </div>

          {/* Footer */}
          {/* <footer>
            <p className="loginLink">
              Already have an account?{" "}
              <Link to="/login" className="highlight">
                Log in here
              </Link>
            </p>
          </footer> */}

          {/* Login Link */}
          <div className="loginLink">
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>

          {/* Terms & Privacy Policy */}
          <div className="termsAndPrivacyPolicy">
            <p>
              By creating an account, you agree to{" "}
              <Link to="/temrs">Terms</Link> and{" "}
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </p>
          </div>

          {/* Illustration */}
          <div className="illustration">
            {/* Heading & Paragraph */}
            <div className="headingAndParagraph">
              <h2>Performance Monitoring and Evaluation System</h2>
              <p>
                A system to assess and improve the performance of individual
                offices and departments within an organization of Bulacan State
                University.
              </p>
            </div>

            {/* Login Illustration */}
            <img
              src={LoginIllustration}
              alt="Illustration"
              className="loginIllustration"
            />

            {/* Background Element */}
            <img
              src={BackgroundElementSVG}
              alt="Vector"
              className="backgroundElement"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;