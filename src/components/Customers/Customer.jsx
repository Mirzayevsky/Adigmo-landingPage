import React from "react";
import {
    CompanyShowcaseWrapper,
    Container,
    CustomerWrapper, Header,
    MainCustomerWrapper,
    MainTitle, ShowcaseInfo,
    SubTitle
} from "./Customer.styles";
// import {ReactComponent as SvgExante } from "../../../source/assets/images/a1.svg";
import img1 from "../../source/assets/images/a1.svg"
import img3 from "../../source/assets/customers/a3.png"
import img2 from "../../source/assets/customers/a2.png"
import img4 from "../../source/assets/customers/logo 1.png"
import img5 from "../../source/assets/customers/logo 2.png"
import img6 from "../../source/assets/customers/logo 3.png"
import img7 from "../../source/assets/customers/Concordia_Logo_HORIZ 1.png"
import img8 from "../../source/assets/customers/Final_LL_Logo_715d5aca-af44-40d7-8460-6b4f24a63ed2_160x 1.png"
import img9 from "../../source/assets/customers/qwe.png"
import ImgDirector from "../../source/assets/customers/compdir.png"
import imgRec from "../../source/assets/customers/Rectangle 1611.png"
import Text from "../../language/langManager";



const Customer = () => {
    return(
        <CustomerWrapper>
            <MainCustomerWrapper>
                <Container>
                    <div className={'title'}>
                        <Text id={"allCustomer"}/>
                    </div>
                    <div className={'wrapper'}>
                        <div className={'svg-wrapper'}>
                            <img src={img1}/>
                        </div>
                        <div className={'svg-wrapper'}>
                            <img src={img2}/>
                        </div>
                        <div className={'svg-wrapper'}>
                            <img src={img3}/>
                        </div>
                    </div>
                    <div className={'wrapper'}>
                        <div className={'svg-wrapper'}>
                            <img src={img6}/>
                        </div>
                        <div className={'svg-wrapper'}>
                            <img src={img5}/>
                        </div>
                        <div className={'svg-wrapper'}>
                            <img src={img4}/>
                        </div>
                    </div>
                    <div className={'wrapper'}>
                        <div className={'svg-wrapper'}>
                            <img src={img7}/>
                        </div>
                        <div className={'svg-wrapper cl-1'}>
                            <img src={img9}/>
                        </div>
                        <div className={'svg-wrapper'}>
                            <img src={img8}/>
                        </div>
                    </div>
                </Container>
            </MainCustomerWrapper>

            <CompanyShowcaseWrapper>
               <Header>
                   <MainTitle>SHAXBOZ SIDIKOV</MainTitle>
                   <SubTitle>
                       <Text id={"CompDirNAme"}/>
                   </SubTitle>
               </Header>

                <ShowcaseInfo>
                   <div className={'container'}>
                       <div className={"img"}>
                           <img src={ImgDirector}/>
                       </div>
                       <div className={"text"}>
                           <Text id={"basicText"}/>
                       </div>
                       <div className={"footer"}>
                           <div className={"footer-wrapper"}>
                               <div className={"icon"}>
                                   <img src={imgRec}/>
                               </div>
                               <div className={"footer-text"}>
                                 <Text id={"bottomTexOne"}/>
                               </div>
                           </div>
                           <div className={"footer-wrapper"}>
                               <div className={"icon"}>
                                   <img src={imgRec}/>
                               </div>
                               <div className={"footer-text"}>
                                   <Text id={"bottomTexTwo"}/>
                               </div>
                           </div>
                           <div className={"footer-wrapper"}>
                               <div className={"icon"}>
                                   <img src={imgRec}/>
                               </div>
                               <div className={"footer-text"}>
                                   <Text id={"bottomTexThree"}/>
                               </div>
                           </div>
                           <div className={"footer-wrapper"}>
                               <div className={"icon"}>
                                   <img src={imgRec}/>
                               </div>
                               <div className={"footer-text"}>
                                   <Text id={"bottomTexFour"}/>
                               </div>

                           </div>

                       </div>
                   </div>


                </ShowcaseInfo>

            </CompanyShowcaseWrapper>

        </CustomerWrapper>
    )
}
export default Customer