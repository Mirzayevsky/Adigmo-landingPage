import React from "react";
import Header from "../../components/Header/header";
import SecondPage from "../../components/ShowcaseSection/SecondPage";
import PortfolioPage from "../../components/portfolioSection/portfolioPage";
import CarouselMain from "../../components/carouselSection/corouselPage";
import Service from "../../components/ServiceSection/Service";
import Roas from "../../components/RoasSection/Roas";
import Customer from "../../components/Customers/Customer";
import Advice from "../../components/AdviceSection/Advice";
import Footer from "../../components/footer";
const HomePage = () => {
    return(
        <>
            <Header/>
            <SecondPage/>
            <PortfolioPage/>
            <CarouselMain/>
            <Service/>
            <Roas/>
            <Customer/>
            <Advice/>
            <Footer/>
        </>
    )
}
export default HomePage