import React, {useState} from "react";
import {Content, RoasButton,  RoasCarouselWrapper, RoasHeader, RoasWrapper} from "./Roas.styles";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Text from "../../language/langManager";
import PopUp from "../popUp";
const Roas = () => {
    const [popUp, setPopUp]=useState(false)
    const popChange = () =>{
        setPopUp(!popUp)
    }
    const data = [
        {
            id:0,
            title:"titleRoasOne",
            text:"subtitleRoasOne"
        },
        {
            id:1,
            title:"titleRoasTwo",
            text:"subtitleRoasTwo"
        },
        {
            id:2,
            title:"titleRoasThird",
            text:"subtitleRoasThird"
        },
        {
            id:3,
            title:"titleRoasFourth",
            text:"subtitleRoasFourth"
        },
        {
            id:4,
            title:"titleRoasFifth",
            text:"subtitleRoasFifth"
        },
    ]

    const carousel = (slider) => {
        const z = 300
        function rotate() {
            const deg = 360 * slider.track.details.progress
            slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
        }
        slider.on("created", () => {
            const deg = 360 / slider.slides.length
            slider.slides.forEach((element, idx) => {
                element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
            })
            rotate()
        })
        slider.on("detailsChanged", rotate)
    }
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return(
      <RoasWrapper>
          { popUp === true ? <PopUp popUp={popUp} setPopUp={setPopUp}/> :""
          }
       <Content>
           <RoasHeader>
               <p className={'title'}>
                   <Text id={"roasTitle"}/>
               </p>
               <div className={'show'}>
                   <p className={'mini-title'}>
                       <Text id={"customerOne"}/>
                       <br/>
                       <Text id={"customertwo"}/>
                      </p>
                   <p className={'text'}>
                       <Text id={"priceThatspentToReklame"}/>
                   </p>
               </div>
           </RoasHeader>
           <RoasCarouselWrapper>
               <div className="wrapper">
                   <div className="scene">
                       <div className="carousel keen-slider" ref={sliderRef}>
                           {
                               data.map(({id,title,text})=>{
                                   return(
                                       <div key={id} className="carousel__cell number-slide1 ">
                                           <div className={"container"}>
                                               <div>
                                                   <p className={"title"}>
                                                       <Text id={title}/>
                                                   </p>
                                                   <p className={"text"}>
                                                       <Text id={text}/>
                                                   </p>
                                               </div>
                                           </div>
                                       </div>
                                   )
                               })
                           }

                       </div>
                   </div>
               </div>

           </RoasCarouselWrapper>
           <RoasButton onClick={popChange}>
               <Text id={"roasBtnOne"}/>
                <br/>
               <Text id={"roasBtnTwo"}/>

           </RoasButton>
       </Content>

      </RoasWrapper>
    )
}
export default Roas