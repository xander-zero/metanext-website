import { Fragment } from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Management from "../components/Management/ManageMent";
import HeadPage from "../common/Head/Head";
import Security from "../components/Security/Security";
import Services from "../components/Services/Services";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import Info from "../components/Info/Info";
// import Comment from "../components/Comment/Comment";
// import Content from "../components/Content/Content";

export default function Home() {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const router = useRouter();
  const language = router.locale;

  return (
    <Fragment>
      <HeadPage
        title={languageData.main_title}
        description={languageData.main_desc}
      />
      <Header />
      <About />
      <Services />
      <Info />
      <Management />
      <Security />
      {/* <Content /> */}
      <Intro />
      {/* <Comment /> */}
      {/* <Suspense fallback={<p>Loading...</p>}>
        <DaynamicComment />
      </Suspense> */}
    </Fragment>
  );
}
