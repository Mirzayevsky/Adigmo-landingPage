import { AppWrapper } from "./App.styles";
import CarouselMain from "./app/HomePage/carouselSection/corouselPage";
import Header from "./components/header/header";
import PortfolioPage from "./app/HomePage/portfolioSection/portfolioPage";
import SecondPage from "./app/HomePage/ShowcaseSection/SecondPage";

function App() {
  return (
    <AppWrapper>
       <Header/>
       <SecondPage/>
       <PortfolioPage/>
       <CarouselMain/>
      </AppWrapper>
  )
}

export default App;
