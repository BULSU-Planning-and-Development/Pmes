import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BulacanStateUniversityLogo, PlanningAndDevelopmentOffice } from '../../assets/assets'
import '../../styles/landing_page.css'

function Footer() {
    const contactSectionRef = useRef(null);
    const currentYear = new Date().getFullYear();
  return (
    <footer ref={contactSectionRef}>
    <div className="wrapper">
      {/* Form */}
      <form>
        <div className="headingAndParagraph">
          <h3>Get in touch!</h3>
          <p>Have a question or need assistance? Reach out to us.</p>
        </div>
        <div className="inputFieldsAndButton">
          <div className="inputFields">
            <div className="wrap">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name
                  <span className="required-symbol">*</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="emailAddress">
                  Email Adress
                  <span className="required-symbol">*</span>
                </label>

                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
                <span className="required-symbol">*</span>
              </label>

              <textarea
                name="message"
                placeholder="Enter your message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>

          <button className="secondary solid btn">Submit</button>
        </div>
      </form>

      <div className="section">
        <div className="logo">
          <div className="images">
            <img src={BulacanStateUniversityLogo} alt="Image" />
            <img src={PlanningAndDevelopmentOffice} alt="Image" />
          </div>

          <h4>Performance Monitoring & Evaluation System </h4>
        </div>

        <div className="info">
          <p>
            <a
              href="https://www.google.com/maps/place/Bulacan+State+University/@14.8581375,120.8140185,20z/data=!4m6!3m5!1s0x3397af7324f0f857:0xc21f39ed5b256ece!8m2!3d14.8582445!4d120.8141646!16s%2Fm%2F02q__rl?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brgy. Guinhawa, Malolos, Philippines
            </a>
          </p>
          <p>
            <a href="mailto:planninganddevelopmentoffice@bulsu.edu.ph">
              planninganddevelopmentoffice@bulsu.edu.ph
            </a>
          </p>
          <p>
            <a
              href="https://facebook.com/BulSUPlanningandDevelopmentOffice"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/BulSUPlanningandDevelopmentOffice
            </a>
          </p>
        </div>

        <div className="links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
          <p>
            © {currentYear} Planning and Development Office. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer