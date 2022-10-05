import React from "react";
import { useCycle } from "framer-motion";
import GlobalStyle from "./styles/globalStyles";

//Pages
import Main from "./Pages/Main";
import About from "./Pages/About";
import Project from "./Pages/Project";

//Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BackDrop from "./Components/Backdrop";

function App() {
  const [isOpenBackDrop, toggleOpenOpenBackDrop] = useCycle(false, true);

  return (
    <div className="container">
      {/* Common variables such as styles and color that apply to the entire project are in the global file. */}
      <GlobalStyle />
      <Navbar
        isOpenBackDrop={isOpenBackDrop}
        toggleOpenOpenBackDrop={() => toggleOpenOpenBackDrop()}
      />
      <BackDrop
        isForProjectPage={false}
        isOpenBackDrop={isOpenBackDrop}
        toggleOpenOpenBackDrop={() => toggleOpenOpenBackDrop()}
      />
      <Main />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
