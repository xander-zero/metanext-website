import { useLayoutEffect } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { palletColor } from "../styles/theme";
import { setLanguage } from "../redux/action/language";
import { GlobalStyle } from "../styles/GlobalStyle";

import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import ar from "../public/locales/ar/common.json";
import fa from "../public/locales/fa/common.json";
import en from "../public/locales/en/common.json";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const language = router.locale;
  const languageData = language === "en" ? en : language === "fa" ? fa : ar;

  useLayoutEffect(() => {
    if (language === "en") {
      document.body.style.direction = "ltr";
      dispatch(setLanguage(languageData));
    } else {
      document.body.style.direction = "rtl";
      dispatch(setLanguage(languageData));
    }
    router.push(`/${language}`);
  }, [language, dispatch, languageData]);

  return (
    <div>
      <ToastContainer />
      <ThemeProvider theme={palletColor}>
        <GlobalStyle />
        {router.pathname === "/login" ||
        router.pathname === "/contact" ? null : (
          <Navbar />
        )}
        {children}
        {router.pathname === "/login" ||
        router.pathname === "/contact" ? null : (
          <Footer />
        )}
      </ThemeProvider>
    </div>
  );
};
export default MainLayout;
