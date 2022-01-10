import { ThemeProvider } from "styled-components";
import { crukTheme } from "@cruk/cruk-react-components";
import Main from './Components/Main';
import { SiteWrapper } from "./Style/Common";


function App() {
  return (
    <ThemeProvider theme={crukTheme}>
      <SiteWrapper>
        <div>
          <h1>CRUK technical exercise - React</h1>
        </div>
        <Main />
      </SiteWrapper>
    </ThemeProvider>
  );
}

export default App;
