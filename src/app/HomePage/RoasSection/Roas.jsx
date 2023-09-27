import React from "react";
import {Content, RoasButton,  RoasCarouselWrapper, RoasHeader, RoasWrapper} from "./Roas.styles";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const Roas = () => {
    const data = [
        {
            id:0,
            title:"Raqobatchilarni O`rganish",
            text:"Bozorni analiz qilish, Raqobatchilarni taklifini tahlil qilamiz"
        },
        {
            id:1,
            title:"Reklama kompaniyalarini yaratish",
            text:"Google va Yandexda Semantika  to`plash, maqsadli auditoriyani topish, reklamalarni tayyorlash web analitikani ulash, "
        },
        {
            id:2,
            title:"Optimizatsiya",
            text:"Reklama yoqilganidan keyn biz uni o`z holiga tashlab qo`ymaymiz, Uni optimizatsiya orqali reklamani to`g`ri tahlil qilib, uni kuchaytiramiz"
        },
        {
            id:3,
            title:"Remarketing & Retarget",
            text:"Saytingizga kirgan yoki Instagram, Facebook akkountingizga qiziqish bildirgan lekin sotib olmagan mijozlarni reklama orqali taqib qilamiz "
        },
        {
            id:4,
            title:"Web analitika",
            text:"Google tag manager, Google analytics, Yandex Metrica.Ushbu qurilmalar orqali web saytingizni analiz qilamiz"
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
       <Content>
           <RoasHeader>
               <p className={'title'}>
                   5x  ROAS QANDAY <br/>
                   ISHLAYDI ?
               </p>
               <div className={'show'}>
                   <p className={'mini-title'}>100+ mijoz <br/>
                       $64 mln</p>
                   <p className={'text'}>Reklamaga sarflangan</p>
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
                                                       {title}
                                                   </p>
                                                   <p className={"text"}>
                                                       {text}
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

           <RoasButton>
               5x  ROASdan <br/> Foydalanmoqchiman
           </RoasButton>
       </Content>

      </RoasWrapper>
    )
}
export default Roas