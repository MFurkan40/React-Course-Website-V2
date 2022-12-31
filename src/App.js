import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Container from "./components/styles/Container.styled";
import data from "./helper/data";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useState } from "react";

const lightTheme = {
  colors: {
    body: "#fff",
    footer: "#951556",
    fontColor: "#000",
    footerFontColor: "#fff",
    title: "#000",
    icon: "#202124",
  },
  margins: {},
  responsive: "768px",
};

const darkTheme = {
  colors: {
    card: "#75797D",
    body: "#202124",
    footer: "#951556",
    fontColor: "#fff",
    footerFontColor: "#202124",
    title: "#fff",
    icon: "#fff",
  },
  margins: {},
  responsive: "768px",
};

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Container>
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
