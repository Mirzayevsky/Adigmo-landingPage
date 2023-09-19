import { AppWrapper } from "./App.styles";
import Header from "./app/header/header";
import PortfolioPage from "./app/portfolioPage/portfolioPage";
import SecondPage from "./app/secondPages/SecondPage";

function App() {
  return (
    <AppWrapper>
       <Header/>
       <SecondPage/>
       <PortfolioPage/>
      </AppWrapper>
  )
}

export default App;
