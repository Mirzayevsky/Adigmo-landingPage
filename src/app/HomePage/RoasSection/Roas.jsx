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
                       <RoasCarouselCard>
                         <div className={'container'}>
                             <p className={'title'}>
                                 Raqobatchilarni
                                 O`rganish
                             </p>
                             <p className={'text'}>
                                 Bozorni analiz qilish,
                                 Raqobatchilarni taklifini tahlil
                                 qilamiz
                             </p>
                         </div>
                       </RoasCarouselCard>
                   </div>
                   <div className="keen-slider__slide number-slide2 animation-one">
                       <RoasCarouselCard>
                           <div className={"container"}><p className={'title'}>
                               Reklama kompaniya
                               larini yaratish
                           </p>
                               <p className={'text'}>
                                   Google va Yandexda Semantika
                                   to`plash, maqsadli auditoriyani
                                   topish, reklamalarni tayyorlash,
                                   web analitikani ulash
                               </p></div>
                       </RoasCarouselCard>

                       </div>
                   <div className="keen-slider__slide number-slide3 animation-one">
                       <RoasCarouselCard>
                         <div className={'container'}>
                             <p className={'title'}>
                                 Optimizatsiya
                             </p>
                             <p className={'text'}>
                                 Reklama yoqilganidan keyn
                                 biz uni o`z holiga tashlab
                                 qo`ymaymiz, Uni optimizatsiya
                                 orqali reklamani to`g`ri tahlil
                                 qilib, uni kuchaytiramiz
                             </p>
                         </div>
                       </RoasCarouselCard>

                   </div>
                   <div className="keen-slider__slide number-slide4 animation-one">
                       <RoasCarouselCard>
                           <div className={'container'}>
                               <p className={'title'}>
                                   Remarketing &
                                   Retarget
                               </p>
                               <p className={'text'}>
                                   Saytingizga kirgan yoki
                                   Instagram, Facebook akkount
                                   tingizga qiziqish bildirgan lekin
                                   sotib olmagan mijozlarni rekla
                                   ma orqali taqib qilamiz
                               </p>
                           </div>
                       </RoasCarouselCard>

                   </div>
                   <div className="keen-slider__slide number-slide5 animation-one">
                       <RoasCarouselCard>
                           <div className={'container'}>
                               <p className={'title'}>
                                   Raqobatchilarni
                                   O`rganish
                               </p>
                               <p className={'text'}>
                                   Bozorni analiz qilish,
                                   Raqobatchilarni taklifini tahlil
                                   qilamiz
                               </p>
                           </div>
                       </RoasCarouselCard>

                   </div>
                   <div className="keen-slider__slide number-slide6 animation-one">
                       <RoasCarouselCard>
                           <div className={'container'}>
                               <p className={'title'}>
                                   Raqobatchilarni
                                   O`rganish
                               </p>
                               <p className={'text'}>
                                   Bozorni analiz qilish,
                                   Raqobatchilarni taklifini tahlil
                                   qilamiz
                               </p>
                           </div>
                       </RoasCarouselCard>

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