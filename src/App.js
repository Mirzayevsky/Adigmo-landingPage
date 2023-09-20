import { AppWrapper } from "./App.styles";
import CarouselMain from "./app/HomePage/carouselSection/corouselPage";
import Header from "./components/header/header";
import PortfolioPage from "./app/HomePage/portfolioSection/portfolioPage";
import SecondPage from "./app/HomePage/ShowcaseSection/SecondPage";
import Service from "./app/HomePage/ServiceSection/Service";
import Roas from "./app/HomePage/RoasSection/Roas";
import Customer from "./app/HomePage/Customers/Customer";
import Advice from "./app/HomePage/AdviceSection/Advice";

function App() {
  return (
    <AppWrapper>
       <Header/>
       <SecondPage/>
       <PortfolioPage/>
       <CarouselMain/>
        <Service/>
        <Roas/>
        <Customer/>
        <Advice/>
      </AppWrapper>
  )
}

export default App;
