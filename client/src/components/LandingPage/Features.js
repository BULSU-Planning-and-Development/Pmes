import React, { useEffect } from 'react'
import { Feature1, Feature2, Feature3, Feature4} from '../../assets/assets'

import '../../styles/landing_page.css'  

function Features() {

  // Handle scroll animation for features
  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll(".feature");

      features.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (
          featureBounding.top >= 0 &&
          featureBounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          feature.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="features">
    {/* Feature 1 */}
    <div className="feature">
      <div>
        <div className="headingAndParagraph">
          <h2>
            <span>Save time</span> by having everything on one platform!{" "}
          </h2>
          <p>
            Office Performance Commitment and Review (OPCR),
            Organizational Outcome (OO), and Planning and Development
            Office’s announcements are on one platform.
          </p>
        </div>

        <img src={Feature1} alt="Image" />
      </div>
    </div>

    {/* Feature 2 */}
    <div className="feature">
      <div>
        <div className="headingAndParagraph">
          <h2>
            Fill up the forms <span>easily!</span>
          </h2>
          <p>
            Easily complete forms on our user-friendly platform, saving
            you time and hassle while ensuring optimal usability across
            various screen sizes.
          </p>
        </div>

        <img src={Feature2} alt="Image" />
      </div>
    </div>

    {/* Feature 3 */}
    <div className="feature">
      <div>
        <div className="headingAndParagraph">
          <h2>
            <span>Ensure the accuracy</span> of your performance!
          </h2>
          <p>
            Maximize your performance accuracy with our robust tools and
            guidance, empowering you to achieve optimal results.
          </p>
        </div>

        <img src={Feature3} alt="Image" />
      </div>
    </div>

    {/* Feature 4 */}
    <div className="feature">
      <div>
        <div className="headingAndParagraph">
          <h2>
            Track your forms in <span>real-time!</span>
          </h2>
          <p>
            Gain instant insights into form submissions, progress, and
            revisions, allowing you to stay informed every step of the
            way.
          </p>
        </div>

        <img src={Feature4} alt="Image" />
      </div>
    </div>
  </div>

  )
}

export default Features