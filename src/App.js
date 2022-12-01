import React from "react";
import Footer from "./components/pages/Footer"
import PortfolioContainer from "./components/PortfolioContainer";

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
  },
}
function App() {
  return (
    <div>
      <PortfolioContainer />
      <div styles={styles.div}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
