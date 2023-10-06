import React from "react";
import {Container, FirstCarouselWrapper, ServiceTitle, ServiceWrapper} from "./Service.styles";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {FirstWrapper} from "../portfolioSection/portfolioPage.styles";
import {ReactComponent as SvgOne} from "../../source/assets/services items/Y (1).svg";
import {ReactComponent as SvgSecond} from "../../source/assets/services items/Y.svg";
import {ReactComponent as Svgthird} from "../../source/assets/services items/🦆 icon _chart 1_.svg";
import {ReactComponent as Svgfourth} from "../../source/assets/services items/🦆 icon _diagram_.svg";
import {ReactComponent as Svgfifth} from "../../source/assets/services items/🦆 icon _google 1_.svg";
import {ReactComponent as SvgSix} from "../../source/assets/services items/🦆 icon _instagram_.svg";
import {ReactComponent as SvgSeven} from "../../source/assets/services items/🦆 icon _refresh 2_.svg";
import {ReactComponent as SvgNine} from "../../source/assets/services items/🦆 icon _shopping cart_.svg";
import {ReactComponent as SvgTen} from "../../source/assets/services items/🦆 icon _star_.svg";
import {ReactComponent as SvgVerify} from "../../source/assets/services items/🦆 icon _verify_.svg";
import Text from "../../language/langManager";




const animation = { duration: 100000, easing: (t) => t }
const animationSecond = { duration: 100000, easing: (t) => t }
const animationThird = { duration: 80000, easing: (t) => t }


const Service = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        // renderMode: "performance",

        drag: false,
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
        // renderMode: "performance",
        renderMode:"precision",
        drag: false,

        rtl:"true",
        // drag: false,
        created(s) {
            s.moveToIdx(4, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 4, true, animationSecond)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 4, true, animationSecond)
        },
    })
    const [sliderRefRight] = useKeenSlider({
        loop: true,
        // renderMode: "performance",
        renderMode:"precision",
        // rtl:"true",
        drag: false,
        created(s) {
            s.moveToIdx(4, true, animationThird)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 4, true,animationThird)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 4, true, animationThird)
        },
    })
    return(
        
<ServiceWrapper>

    <ServiceTitle> <Text id="serviceTitle"/><br/> <Text id="serviceTitleOne"/></ServiceTitle>
        <FirstCarouselWrapper>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1 `">
                    <div className="child-mini ">
                        <Svgfifth className={"svg-touch"}/>
                       <Text id="googleText"/>
                    </div>
                    <div className="child-mini">
                        <SvgOne className={"svg-touch"}/>
                        <Text id="yandexText"/>
                    </div>
                    <div className="child-mini">
                        <Svgthird className={"svg-touch"}/>
                        <Text id="oponentText"/>
                        </div>
                    <div className="child-mini">
                        <SvgSeven className={"svg-touch"}/>
                        <Text id="optimization"/> </div>
                    <div className="child-mini">
                        <Svgfifth className={"svg-touch"}/>
                       <Text id="googleText"/>
                    </div>

                </div>
                <div className="keen-slider__slide number-slide1 slide-2 `">
                    <div className="child-mini dp-none">
                        <Svgfifth className={"svg-touch"}/>
                        <Text id="googleText"/>
                    </div>
                    <div className="child-mini">
                        <SvgOne className={"svg-touch"}/>
                        <Text id="yandexText"/>
                    </div>
                    <div className="child-mini">
                        <Svgthird className={"svg-touch"}/>
                        <Text id="oponentText"/>
                    </div>
                    <div className="child-mini">
                        <SvgSeven className={"svg-touch"}/>
                        <Text id="optimization"/> </div>
                    <div className="child-mini">
                        <SvgOne className={"svg-touch"}s/>
                        <Text id="yandexText"/>
                    </div>
                </div>

            </div>
        </FirstCarouselWrapper>

        <FirstCarouselWrapper>
            <div ref={sliderRef2} className="keen-slider">
                <div className="keen-slider__slide number-slide1 `">
                    <div className="child-mini ">
                        <SvgSix className={"svg-touch"}/>
                        <Text id="reklame"/>
                    </div>
                    <div className="child-mini">
                        <SvgTen className={"svg-touch"}/>
                        <Text id="reklamaBanner"/>
                    </div>
                    <div className="child-mini">
                        <SvgNine  className={"svg-touch"}/>
                       <Text id="salesUpService"/>
                    </div>
                    <div className="child-mini">
                        <Svgfourth  className={"svg-touch"}/>
                       <Text id="webAnalyse"/>
                    </div>
                    <div className="child-mini">
                        <Svgfifth className={"svg-touch"}/>
                       <Text id="googleText"/>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 `">
                    <div className="child-mini ">
                        <SvgSix className={"svg-touch"}/>
                        <Text id="reklame"/>
                    </div>
                    <div className="child-mini">
                        <SvgTen className={"svg-touch"}/>
                        <Text id="reklamaBanner"/>
                    </div>
                    <div className="child-mini">
                        <SvgNine  className={"svg-touch"}/>
                        <Text id="salesUpService"/>
                    </div>
                    <div className="child-mini">
                        <Svgfourth  className={"svg-touch"}/>
                        <Text id="webAnalyse"/>
                    </div>
                    <div className="child-mini">
                        <Svgfifth className={"svg-touch"}/>
                        <Text id="googleText"/>
                    </div>
                </div>

            </div>
        </FirstCarouselWrapper>
        <FirstCarouselWrapper>
            <div ref={sliderRefRight} className="keen-slider">
                <div className="keen-slider__slide number-slide1 `">
                    <div className="child-mini ">
                        <Svgfifth className={"svg-touch"}/>
                       <Text id="oponentText"/>
                    </div>
                    <div className="child-mini">
                        <SvgOne className={"svg-touch"}/>
                       <Text id="reklamaBanner"/>
                    </div>
                    <div className="child-mini">
                        <SvgVerify className={"svg-touch"}/>
                        <Text id="salesSite"/>
                    </div>
                    <div className="child-mini">
                        <SvgSeven className={"svg-touch"}/>
                        <Text id="reklamaBanner"/> </div>
                    <div className="child-mini">
                        <Svgfifth className={"svg-touch"}/>
                         <Text id="yandexText"/>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 `">
                    <div className="child-mini ">
                        <Svgfifth className={"svg-touch"}/>
                        <Text id="oponentText"/>
                    </div>
                    <div className="child-mini">
                        <SvgOne className={"svg-touch"}/>
                        <Text id="reklamaBanner"/>
                    </div>
                    <div className="child-mini">
                        <SvgVerify className={"svg-touch"}/>
                        <Text id="salesSite"/>
                    </div>
                    <div className="child-mini">
                        <SvgSeven className={"svg-touch"}/>
                        <Text id="reklamaBanner"/> </div>
                    <div className="child-mini">
                        <Svgfifth className={"svg-touch"}/>
                        <Text id="yandexText"/>
                    </div>
                </div>


            </div>
        </FirstCarouselWrapper>



</ServiceWrapper>
    )
}
export default Service

