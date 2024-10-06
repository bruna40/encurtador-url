
import { Container, GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./Pages/Home/index";

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Home />
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  );
}

export default App;
