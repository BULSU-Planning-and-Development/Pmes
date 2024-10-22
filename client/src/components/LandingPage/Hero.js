import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowSVG, MockupHeroImage, OPCRFormTrackerHeroImage,FormStatisticsHeroImage, CollegeOfLaw, CollegeOfEducation,CollegeOfBusinessAdministration, GraduateSchool,
    CollegeOfInformationAndCommunicationsTechnology,CollegeOfNursing,CollegeOfArchitectureAndFineArts,
    CollegeOfHospitalityAndTourismManagement,CollegeOfEngineering,CollegeOfCriminalJusticeEducation,
    CollegeOfArtsAndLetters,CollegeOfScience,CollegeOfIndustrialTechnology,OfficeOfTheCampusDirectorForResearchAndInnovation,
    SportsDevelopmentOffice,PlanningAndDevelopmentOffice,OfficeOfTheViceChancellorForStudentAffairsMainCampus,
    OfficeOfTheStudentOrganizationActivities,OfficeOfTheChancellorExternalCampus,OfficeOfTheCultureAndArts,
    OfficeOfTheStudentGovernment,OfficeOfTheVicePresidentForResearchAndDevelopmentExtension,PlacementAndEmploymentServicesOffice,
    StudentPublicationOffice,StudentWelfareAndDevelopmentOffice,OfficeOfInternationalAffairs,OfficeOfTheCampusDirectorForExtensionServices,
    GuidanceAndCounselingServiceCenter,AssetManagementUnit,BulacanStateUniversitySarmientoCampusLogo,BulacanStateUniversityMenesesCampusLogo,
    BulacanStateUniversityHagonoyCampusLogo,UniversityInfirmaryUnit,ExternalRelationsAndInternationalization,OfficeOfTheScholarships,
    LaboratoryHighSchool,HumanResourceManagementOffice,UniversityLibrary,NationalServiceTrainingProgram,ChevronRightIcon,
 }  from '../../assets/assets'
import '../../styles/landing_page.css'  

function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [usersVisible, setUsersVisible] = useState(false);
    const usersRef = useRef(null);
  
    // Handle scroll event
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    // Intersection Observer for users section
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setUsersVisible(true);
          }
        },
        {
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
  
      if (usersRef.current) {
        observer.observe(usersRef.current);
      }
  
      return () => {
        if (usersRef.current) {
          observer.disconnect();
        }
      };
    }, []);


  return (
           
            <div id="hero">
            {/* Header */}
            <div className="header">
              <div className="badges">
                <div className="badge">
                  <p>Beta v1.0</p>
                </div>
  
                <Link to="#" className="badge">
                  <p>How we developed</p>
                  <ChevronRightIcon width="14px" height="14px" color="#636466" />
                </Link>
              </div>
  
              <h1>Monitoring and evaluation made easy and simple!</h1>
              <p>
                A system to assess and improve the performance of individual
                offices and departments within an organization of Bulacan State
                University.
              </p>
              <button className="primary solid btn">Watch Video Tutorial</button>
            </div>
  
            <div className="wrapper">
              {/* Arrow */}
              <img src={ArrowSVG} alt="Vector" className="arrow" />
  
              {/* Hero Image */}
              <div className="heroImageContainer">
                <img
                  src={MockupHeroImage}
                  alt="Hero Image"
                  className="mockupHeroImage"
                />
  
                <div
                  style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
                  className="imageContainer"
                >
                  <img
                    src={OPCRFormTrackerHeroImage}
                    alt="Hero Image"
                    className="opcrFormTrackerHeroImage"
                  />
                </div>
  
                <div
                  style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
                  className="imageContainer"
                >
                  <img
                    src={FormStatisticsHeroImage}
                    alt="Hero Image"
                    className="formStatisticsHeroImage"
                  />
                </div>
              </div>
            </div>
  
            {/* Rectangle Background */}
            <div className="rectangleBackground"></div>
  
            {/* Users */}
            <div ref={usersRef} className={`users ${usersVisible && "visible"}`}>
              <h2>
                Over 100+ institutes, offices, and non-offices in Bulacan State
                University can use this
              </h2>
  
              <div className="logos">
                <div style={{ transform: `translateX(-${scrollY * 0.2}px)` }}>
                  <img src={CollegeOfLaw} alt="Logo" className="small logo" />
                  <img
                    src={CollegeOfEducation}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={CollegeOfBusinessAdministration}
                    alt="Logo"
                    className="small logo"
                  />
                  <img src={GraduateSchool} alt="Logo" className="large logo" />
                  <img
                    src={CollegeOfInformationAndCommunicationsTechnology}
                    alt="Logo"
                    className="small logo"
                  />
                  <img src={CollegeOfNursing} alt="Logo" className="large logo" />
                  <img
                    src={CollegeOfArchitectureAndFineArts}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={CollegeOfHospitalityAndTourismManagement}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={CollegeOfEngineering}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={CollegeOfCriminalJusticeEducation}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={CollegeOfArtsAndLetters}
                    alt="Logo"
                    className="small logo"
                  />
                  <img src={CollegeOfScience} alt="Logo" className="large logo" />
                  <img
                    src={CollegeOfIndustrialTechnology}
                    alt="Logo"
                    className="small logo"
                  />
                  <img src={CollegeOfLaw} alt="Logo" className="small logo" />
                  <img
                    src={CollegeOfEducation}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={CollegeOfBusinessAdministration}
                    alt="Logo"
                    className="small logo"
                  />
                  <img src={GraduateSchool} alt="Logo" className="large logo" />
                  <img
                    src={CollegeOfInformationAndCommunicationsTechnology}
                    alt="Logo"
                    className="small logo"
                  />
                  <img src={CollegeOfNursing} alt="Logo" className="large logo" />
                  <img
                    src={CollegeOfArchitectureAndFineArts}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={CollegeOfHospitalityAndTourismManagement}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={CollegeOfEngineering}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={CollegeOfCriminalJusticeEducation}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={CollegeOfArtsAndLetters}
                    alt="Logo"
                    className="small logo"
                  />
                  <img src={CollegeOfScience} alt="Logo" className="large logo" />
                  <img
                    src={CollegeOfIndustrialTechnology}
                    alt="Logo"
                    className="small logo"
                  />
                </div>
  
                <div style={{ transform: `translateX(${scrollY * 0.2}px)` }}>
                  <img
                    src={OfficeOfTheCampusDirectorForResearchAndInnovation}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={SportsDevelopmentOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={PlanningAndDevelopmentOffice}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheViceChancellorForStudentAffairsMainCampus}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={OfficeOfTheStudentOrganizationActivities}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheChancellorExternalCampus}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={OfficeOfTheCultureAndArts}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheStudentGovernment}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={
                      OfficeOfTheVicePresidentForResearchAndDevelopmentExtension
                    }
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={PlacementAndEmploymentServicesOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={StudentPublicationOffice}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={StudentWelfareAndDevelopmentOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={OfficeOfInternationalAffairs}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={OfficeOfTheCampusDirectorForResearchAndInnovation}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={SportsDevelopmentOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={PlanningAndDevelopmentOffice}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheViceChancellorForStudentAffairsMainCampus}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={OfficeOfTheStudentOrganizationActivities}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheChancellorExternalCampus}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={OfficeOfTheCultureAndArts}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheStudentGovernment}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={
                      OfficeOfTheVicePresidentForResearchAndDevelopmentExtension
                    }
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={PlacementAndEmploymentServicesOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={StudentPublicationOffice}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={StudentWelfareAndDevelopmentOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={OfficeOfInternationalAffairs}
                    alt="Logo"
                    className="small logo"
                  />
                </div>
  
                <div style={{ transform: `translateX(-${scrollY * 0.15}px)` }}>
                  <img
                    src={OfficeOfTheCampusDirectorForExtensionServices}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={GuidanceAndCounselingServiceCenter}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={AssetManagementUnit}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={BulacanStateUniversitySarmientoCampusLogo}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={BulacanStateUniversityMenesesCampusLogo}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={BulacanStateUniversityHagonoyCampusLogo}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={UniversityInfirmaryUnit}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={ExternalRelationsAndInternationalization}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheScholarships}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={LaboratoryHighSchool}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={HumanResourceManagementOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={UniversityLibrary}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={NationalServiceTrainingProgram}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheCampusDirectorForExtensionServices}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={GuidanceAndCounselingServiceCenter}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={AssetManagementUnit}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={BulacanStateUniversitySarmientoCampusLogo}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={BulacanStateUniversityMenesesCampusLogo}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={BulacanStateUniversityHagonoyCampusLogo}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={UniversityInfirmaryUnit}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={ExternalRelationsAndInternationalization}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={OfficeOfTheScholarships}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={LaboratoryHighSchool}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={HumanResourceManagementOffice}
                    alt="Logo"
                    className="small logo"
                  />
                  <img
                    src={UniversityLibrary}
                    alt="Logo"
                    className="large logo"
                  />
                  <img
                    src={NationalServiceTrainingProgram}
                    alt="Logo"
                    className="large logo"
                  />
                </div>
              </div>
            </div>
          </div>
  
  )
}

export default Hero