import { AppWrapper } from "./App.styles";
import CarouselMain from "./app/HomePage/carouselSection/corouselPage";
import Header from "./components/header/header";
import PortfolioPage from "./app/HomePage/portfolioSection/portfolioPage";
import SecondPage from "./app/HomePage/ShowcaseSection/SecondPage";
import Service from "./app/HomePage/ServiceSection/Service";

function App() {
  return (
    <AppWrapper>
       <Header/>
       <SecondPage/>
       <PortfolioPage/>
       <CarouselMain/>
        <Service/>
      </AppWrapper>
  )
}

export default App;
