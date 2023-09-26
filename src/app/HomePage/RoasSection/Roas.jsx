import React from "react";
import {Content, RoasButton, RoasCarouselCard, RoasCarouselWrapper, RoasHeader, RoasWrapper} from "./Roas.styles";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Roas = () => {
    const animation = { duration: 20000, easing: (t) => t }
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",


        slides: { origin: "center", perView: 3, spacing: 10 },
        // range: {
        //     min: -5,
        //     max: 5,
        // },
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    const data = [
        {
            id:0,
            title:"Raqobatchilarni O`rganish",
            text:"Bozorni analiz qilish, Raqobatchilarni taklifini tahlil qilamiz"
        },
        {
            id:1,
            title:"Raqobatchilarni O`rganish",
            text:"Bozorni analiz qilish, Raqobatchilarni taklifini tahlil qilamiz"
        },
        {
            id:2,
            title:"Raqobatchilarni O`rganish",
            text:"Bozorni analiz qilish, Raqobatchilarni taklifini tahlil qilamiz"
        },
        {
            id:3,
            title:"Raqobatchilarni O`rganish",
            text:"Bozorni analiz  qilish, Raqobatchilarni taklifini tahlil qilamiz"
        },
        {
            id:4,
            title:"Raqobatchilarni O`rganish",
            text:"Bozorni analiz qilish, Raqobatchilarni taklifini tahlil qilamiz"
        },
    ]

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
               <div ref={sliderRef} className="keen-slider">
                   <div className="keen-slider__slide number-slide1 animation-one">
                         <div className={'container'}>
                             <p className={'title'}>

                             </p>
                             <p className={'text'}>

                             </p>
                         </div>
                   </div>
                   <div className="keen-slider__slide number-slide1 animation-one">
                       <div className={'container'}>
                           <p className={'title'}>

                           </p>
                           <p className={'text'}>

                           </p>
                       </div>
                   </div>
                   <div className="keen-slider__slide number-slide1 animation-one">
                       <div className={'container'}>
                           <p className={'title'}>

                           </p>
                           <p className={'text'}>

                           </p>
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