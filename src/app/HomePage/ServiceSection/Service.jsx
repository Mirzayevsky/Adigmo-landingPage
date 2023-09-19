import React from "react";
import {Container, FirstCarouselWrapper, ServiceWrapper} from "./Service.styles";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {FirstWrapper} from "../portfolioSection/portfolioPage.styles";
const animation = { duration: 35000, easing: (t) => t }
const Service = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        // drag: false,
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
    const [sliderRef2] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        rtl:"true",
        // drag: false,
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
        
<ServiceWrapper>
    <Container>

        <FirstCarouselWrapper>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1 `">
                    <div>Googleda Reklama Joylash</div>
                    <div>Raqobatchilarni O'rganish</div>
                    <div>Reklamani Optimizatsiya Qilish</div>
                    <div>Reklamani Optimizatsiya Qilish</div>
                </div>
                <div className="keen-slider__slide number-slide1 `">
                    <div>Instagram va Facebook reklama joylash</div>
                    <div>Googleda Reklama Joylash</div>
                    <div>Googleda Reklama Joylash</div>
                </div>
            </div>
        </FirstCarouselWrapper>
        <FirstCarouselWrapper>
            <div ref={sliderRef2}  className="keen-slider">
                <div className="keen-slider__slide number-slide1 `">
                    <div>Googleda Reklama Joylash</div>
                    <div>Raqobatchilarni O'rganish</div>
                    <div>Reklamani Optimizatsiya Qilish</div>
                    <div>Reklamani Optimizatsiya Qilish</div>
                </div>
                <div className="keen-slider__slide number-slide1 `">
                    <div>Instagram va Facebook reklama joylash</div>
                    <div>Googleda Reklama Joylash</div>
                    <div>Googleda Reklama Joylash</div>
                </div>
            </div>
        </FirstCarouselWrapper>
        <FirstCarouselWrapper>
            <div ref={sliderRef}  className="keen-slider">
                <div className="keen-slider__slide number-slide1 `">
                    <div>Googleda Reklama Joylash</div>
                    <div>Raqobatchilarni O'rganish</div>
                    <div>Reklamani Optimizatsiya Qilish</div>
                    <div>Reklamani Optimizatsiya Qilish</div>
                </div>
                <div className="keen-slider__slide number-slide1 `">
                    <div>Instagram va Facebook reklama joylash</div>
                    <div>Googleda Reklama Joylash</div>
                    <div>Googleda Reklama Joylash</div>
                </div>
            </div>
        </FirstCarouselWrapper>
    </Container>
</ServiceWrapper>
    )
}
export default Service

