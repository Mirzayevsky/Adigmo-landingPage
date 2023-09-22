import { AppWrapper } from "./App.styles";
import CarouselMain from "./app/HomePage/carouselSection/corouselPage";
import Header from "./components/Navbar/header";
import PortfolioPage from "./app/HomePage/portfolioSection/portfolioPage";
import SecondPage from "./app/HomePage/ShowcaseSection/SecondPage";
import Service from "./app/HomePage/ServiceSection/Service";
import Roas from "./app/HomePage/RoasSection/Roas";
import Customer from "./app/HomePage/Customers/Customer";
import Advice from "./app/HomePage/AdviceSection/Advice";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
        <AppWrapper>
            <Provider store={store}>
                <Header/>
                <SecondPage/>
                <PortfolioPage/>
                <CarouselMain/>
                <Service/>
                <Roas/>
                <Customer/>
                <Advice/>
                <Footer/>
            </Provider>
        </AppWrapper>
  )
}

export default App;
