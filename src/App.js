import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import "bootstrap/dist/js/bootstrap";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <>
      <Helmet>
        <title>Hughie Phan</title>
        <meta property="og:site_name" content="hughiephan" />
        <meta
          property="og:url"
          content="https://hughiephan.co"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hughie Phan Personal Website"
        />
        <meta property="og:description" content="I'm Huy Phan, but you can call me Hughie. My research is centered on creating next-generation AI models. On this website, you can discover the courses I'm currently teaching and my research interests as well. Feel free to contact me or just say hi!" />
        <meta
          name="keywords"
          content="AI, Machine Learning, Deep Learning, Research, Personal AI Teacher, Book, Study, Neural Network, Hughie Phan"
        />
        <meta
          name="description"
          content="I'm Huy Phan, but you can call me Hughie. My research is centered on creating next-generation AI models. On this website, you can discover the courses I'm currently teaching and my research interests as well. Feel free to contact me or just say hi!"
        />
        <meta name="description" content="Hughie Phan Personal Website" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      {/* End Scroll top */}

      <AllRoutes />
    </>
  );
};

export default App;
