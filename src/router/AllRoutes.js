import React from "react";
// Route Specific
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// All HOME PAGE ROUTES
// import DocSignatureLanding from "../views/all-home-pages/DocSignatureLanding";
// import EventOrganizer from "../views/all-home-pages/EventOrganizer";
// import DocLanding from "../views/all-home-pages/DocLanding";
// import ProjectManagement from "../views/all-home-pages/ProjectManagement";
// import CustomerSupport from "../views/all-home-pages/CustomerSupport";
// import ProductLanding from "../views/all-home-pages/ProductLanding";
// import ProductLandingDark from "../views/all-home-pages/ProductLandingDark";
// import NoteTakingLanding from "../views/all-home-pages/NoteTakingLanding";
// import VideoEditorLanding from "../views/all-home-pages/VideoEditorLanding";
// import AppointmentScheduling from "../views/all-home-pages/AppointmentScheduling";
// import MobileAppLanding from "../views/all-home-pages/MobileAppLanding";
// import WebsiteBuilderLanding from "../views/all-home-pages/WebsiteBuilderLanding";
// import Ecommerce from "../views/all-home-pages/Ecommerce";
// import ComingSoon from "../views/all-home-pages/ComingSoon";

// All INNER PAGES ROUTES START FROM BELLOW
// PAGES DROPDOWN ALL ROUTES
// Team inner pages
// import Team1 from "../views/inner-pages/pages/team/Team1";
// import Team2 from "../views/inner-pages/pages/team/Team2";
// import Team3 from "../views/inner-pages/pages/team/Team3";
// import Team4 from "../views/inner-pages/pages/team/Team4";
// import Team5 from "../views/inner-pages/pages/team/Team5";
// import Team6 from "../views/inner-pages/pages/team/Team6";
// import TeamDetailsV1 from "../views/inner-pages/pages/team/TeamDetailsV1";
// import TeamDetailsV2 from "../views/inner-pages/pages/team/TeamDetailsV2";


// Contact us inner pages
// import ContactCustomerSupport from "../views/inner-pages/pages/contact/ContactCustomerSupport";
// import ContactEventOrganizer from "../views/inner-pages/pages/contact/ContactEventOrganizer";
// import ContactProjectManagement from "../views/inner-pages/pages/contact/ContactProjectManagement";

// About us inner pages
// import AboutEventOrganizer from "../views/inner-pages/pages/about/AboutEventOrganizer";
// import AboutProjectManagement from "../views/inner-pages/pages/about/AboutProjectManagement";
// import AboutDocumentation from "../views/inner-pages/pages/about/AboutDocumentation";

// Pricing inner pages
// import PricingCustomerSupport from "../views/inner-pages/pages/pricing/PricingCustomerSupport";
// import PricingEventOrganizer from "../views/inner-pages/pages/pricing/PricingEventOrganizer";
// import PricingProjectManagement from "../views/inner-pages/pages/pricing/PricingProjectManagement";

// FEATURES DROPDOWN ALL ROUTES
// import Login from "../views/inner-pages/features/miscellaneous/Login";
// import SignUp from "../views/inner-pages/features/miscellaneous/SignUp";
// import SolutionMangement from "../views/inner-pages/features/SolutionMangement";
// import FeaturesCustomerSupport from "../views/inner-pages/features/FeaturesCustomerSupport";


// SERVICE PAGES ROUTES
// import ServiceV1 from "../views/inner-pages/service/ServiceV1";
// import ServiceV2 from "../views/inner-pages/service/ServiceV2";
// import ServiceV3 from "../views/inner-pages/service/ServiceV3";
// import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// DOCS DROPDOWN ALL ROUTES
// import DocFullWidth from "../views/inner-pages/docs/DocFullWidth";
// import DocFullWidthBanner from "../views/inner-pages/docs/DocFullWidthBanner";
// import DocBox from "../views/inner-pages/docs/DocBox";
// import DocBoxWithBanner from "../views/inner-pages/docs/DocBoxWithBanner";
// import Changelog from "../views/inner-pages/docs/Changelog";

// PORTFOLIO DROPDOWN ALL ROUTES
// import PortfolioV1 from "../views/inner-pages/portfolio/PortfolioV1";
// import PortfolioV2 from "../views/inner-pages/portfolio/PortfolioV2";
// import PortfolioV3 from "../views/inner-pages/portfolio/PortfolioV3";
// import PortfolioV4 from "../views/inner-pages/portfolio/PortfolioV4";
// import PortfolioV5 from "../views/inner-pages/portfolio/PortfolioV5";

// BLOGS DROPDOWN ALL ROUTES
// import BlogV1 from "../views/inner-pages/blog-pages/BlogV1";
// import BlogV2 from "../views/inner-pages/blog-pages/BlogV2";
// import BlogV3 from "../views/inner-pages/blog-pages/BlogV3";
// import BlogV4 from "../views/inner-pages/blog-pages/BlogV4";
// import BlogV5 from "../views/inner-pages/blog-pages/BlogV5";
// import BlogV6 from "../views/inner-pages/blog-pages/BlogV6";

// Not Found Page
// import FormSurveyLanding from "../views/all-home-pages/FormSurveyLanding";
// import VrLanding from "../views/all-home-pages/VrLanding";
// import Cart from "../views/inner-pages/e-commerce/Cart";
// import Checkout from "../views/inner-pages/e-commerce/Checkout";
// import ProductDetails from "../views/inner-pages/e-commerce/ProductDetails";

import Home from "../views/inner-pages/pages/contact/Home";
import Lesson from "../views/inner-pages/pages/Lesson";
import Tutorial from "../views/inner-pages/pages/Tutorial";
import Assignment from "../views/inner-pages/pages/Assignment";
import BookLesson from "../views/inner-pages/features/BookLesson";
import AvailableProject from "../views/inner-pages/features/miscellaneous/AvailableProject";
import PersonalProject from "../views/inner-pages/features/miscellaneous/PersonalProject";
import ArchivedProject from "../views/inner-pages/features/miscellaneous/ArchivedProject";
import Excerise from "../views/inner-pages/service/Exercise";
import Student from "../views/inner-pages/portfolio/Student";
import LessonDetails from "../views/inner-pages/blog-pages/LessonDetails";
import TutorialDetails from "../views/inner-pages/blog-pages/TutorialDetails";
import AssignmentDetails from "../views/inner-pages/blog-pages/AssignmentDetails";
import Course from "../views/inner-pages/pages/about/Course";
import Domain from "../views/inner-pages/pages/about/Domain";
import NotFound from "../views/NotFound";
import Published from "../views/inner-pages/features/miscellaneous/Published";
import StudentGuide from "../views/inner-pages/pages/StudentGuide";
import Experiment from "../views/inner-pages/pages/experiment/Experiment";
import Math from "../views/inner-pages/features/Math";
import ReadingList from "../views/inner-pages/pages/ReadingList";
import Content from "../views/inner-pages/pages/Content";

const AllRoutes = () => {
  return (
    <div>
    <ScrollTopBehaviour />
      <Routes>
        {/* <Route path="/" element={<DocSignatureLanding />} /> */}
        {/* <Route path="/doc-landing" element={<DocLanding />} />
        <Route path="/doc-signature" element={<DocSignatureLanding />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/product-landing" element={<ProductLanding />} />
        <Route path="/product-landing-dark" element={<ProductLandingDark />} />
        <Route path="/note-taking-landing" element={<NoteTakingLanding />} />
        <Route path="/video-editor-landing" element={<VideoEditorLanding />} />
        <Route
          path="/appointment-scheduling"
          element={<AppointmentScheduling />}
        />
        <Route path="/mobile-app-landing" element={<MobileAppLanding />} />
        <Route path="/website-builder" element={<WebsiteBuilderLanding />} />
        <Route path="/form-survey-landing" element={<FormSurveyLanding />} />
        <Route path="/vr-landing" element={<VrLanding />} />
        <Route path="/e-commerce" element={<Ecommerce />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/coming-soon" element={<ComingSoon />} /> */}

        {/* Pages Dropdown Routes */}
        {/* <Route path="/team-1" element={<Team1 />} />
        <Route path="/team-2" element={<Team2 />} />
        <Route path="/team-3" element={<Team3 />} />
        <Route path="/team-4" element={<Team4 />} />
        <Route path="/team-5" element={<Team5 />} />
        <Route path="/team-6" element={<Team6 />} />
        <Route path="/team-details-v1" element={<TeamDetailsV1 />} />
        <Route path="/team-details-v2" element={<TeamDetailsV2 />} /> */}

        {/* contact us inner pages */}
        {/* <Route path="/contact-cs" element={<ContactCustomerSupport />} />
        <Route path="/contact-eo" element={<ContactEventOrganizer />} />
        <Route path="/contact-pm" element={<ContactProjectManagement />} />
         */}

        {/* about us inner pages */}
        {/* <Route path="/about-eo" element={<AboutEventOrganizer />} />
        <Route path="/about-pm" element={<AboutProjectManagement />} />
        <Route path="/about-doc" element={<AboutDocumentation />} /> */}

        {/* pricing inner pages */}
        {/* <Route path="/pricing-cs" element={<PricingCustomerSupport />} />
        <Route path="/pricing-eo" element={<PricingEventOrganizer />} />
        <Route path="/pricing-pm" element={<PricingProjectManagement />} /> */}

        {/* Feature Dropdown Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        {/* <Route path="/solution-management" element={<SolutionMangement />} /> */}
        {/* <Route path="/features-customer-support" element={<FeaturesCustomerSupport />}/> */}

        {/* Service inner pages */}
        {/* <Route path="/service-v1" element={<ServiceV1 />} />
        <Route path="/service-v2" element={<ServiceV2 />} />
        <Route path="/service-v3" element={<ServiceV3 />} />
        <Route path="/service-details" element={<ServiceDetails />} /> */}
        
        {/* inner pages Docs   */}
        {/* <Route path="/doc-full-width" element={<DocFullWidth />} />
        <Route path="/doc-full-width-banner" element={<DocFullWidthBanner />} />
        <Route path="/doc-box" element={<DocBox />} />
        <Route path="/doc-box-with-banner" element={<DocBoxWithBanner />} />
        <Route path="/changelog" element={<Changelog />} /> */}

        {/* inner Portfolio pages Dropdown   */}
        {/* <Route path="/classic-style" element={<PortfolioV1 />} /> */}
        {/* <Route path="/grid-two-col" element={<PortfolioV2 />} />
        <Route path="/grid-three-col" element={<PortfolioV3 />} />
        <Route path="/gallery-slider" element={<PortfolioV4 />} />
        <Route path="/grid-single" element={<PortfolioV5 />} /> */}
        
        {/* inner Blog pages Dropdown   */}
        {/* <Route path="/blog-v1" element={<BlogV1 />} />
        <Route path="/blog-v2" element={<BlogV2 />} />
        <Route path="/blog-v3" element={<BlogV3 />} />
        <Route path="/blog-v4" element={<BlogV4 />} />
        <Route path="/blog-v5" element={<BlogV5 />} />
        <Route path="/blog-v6" element={<BlogV6 />} /> */}
        
        {/* <Route path="/topic/:topicId" element={<Topic />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId/:courseName" element={<Course />} />
        <Route path="/domain/:domainId/:domainName" element={<Domain />} />
        <Route path="/math" element={<Math />} />
        <Route path="/available-project" element={<AvailableProject />} />
        <Route path="/personal-project" element={<PersonalProject />} />
        <Route path="/archived-project" element={<ArchivedProject />} />
        <Route path="/published" element={<Published />} />
        <Route path="/book" element={<BookLesson />}/>
        <Route path="/exercise" element={<Excerise />} />
        <Route path="/student/:studentId/:studentName" element={<Student />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/lesson/:lessonId/:lessonName" element={<LessonDetails />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/tutorial/:tutorialId/:tutorialName" element={<TutorialDetails />} />
        <Route path="/assignment" element={<Assignment />} /> 
        <Route path="/assignment/:assignmentId/:assignmentName" element={<AssignmentDetails />} />
        <Route path="/fpt-undergrad" element={<StudentGuide />} />
        <Route path="/experiment/:experimentId/:experimentName" element={<Experiment />} />
        <Route path="/reading" element={<ReadingList />} />
        <Route path="/content" element={<Content />} />

        {/* NotFound Route */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
