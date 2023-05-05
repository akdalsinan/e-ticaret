import React from "react";

/* Global Component */
//import Header from "./MyHeader";
import Footer from "./Footer";
import Section from "./Section";
import Sidebar from "./Sidebar";
import Header from "./Header";

/* Layout Style CSS */
import "./Layout.css";

function Root() {
  return (
    /* Global Page */
    <div>
      <>
        <Header />
        <Section />
        <Footer />
      </>
    </div>
  );
}

export default Root;
