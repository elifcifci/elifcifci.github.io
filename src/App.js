import React from "react";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Project from "./Pages/Project";
// import OpenedCard from "./Pages/Project/OpenedCard";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlobalStyle from "./styles/globalStyles";
import { AnimateSharedLayout } from "framer-motion";
// import Scroll from "./Components/Scroll/index";

function App() {
  return (
    <div className="container">
      {/* Common variables such as styles and color that apply to the entire project are in the global file. */}
      <GlobalStyle />
      {/* The AnimateSharedLayout component enables you to perform layout animations between different components that share a layoutId as they're added/removed. */}
      <AnimateSharedLayout>
        <Navbar />
        {/* <Scroll
          scrollPoint={66}
          ScrollIconAppearPoint={500}
          direction={"scrollUp"}
        />
        <Scroll
          scrollPoint={99999}
          ScrollIconAppearPoint={65}
          direction={"scrollDown"}
        /> */}
        <Main />
        <About />
        <Project />
        {/* <Routes>
            <Route path="/project-page/:id" exact element={<OpenedCard />} />
          </Routes> */}
        <Footer />
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
