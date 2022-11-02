import { Fragment } from "react";

import About from "../About/About";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Intro from "../Intro/Intro";
import Management from "../Management/ManageMent";
import Security from "../Security/Security";
import Services from "../Services/Services";

const HomeDynamic = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Services />
      <Info />
      <Management />
      <Security />
      {/* <Content /> */}
      <Intro />
      {/* <Comment /> */}
    </Fragment>
  );
};

export default HomeDynamic;
