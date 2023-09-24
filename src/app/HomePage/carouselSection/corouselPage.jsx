import React,{useState} from "react";
import {
    Button,
    CarouselWrapper,
    Container, Content, ContentSubTitle, ContentTitle,
    ImageSide, InnerContainer, LeftSide, OurService, RightSide, Tab, TabContentWrapper, TabSide, TabWrapper,
    Title, Wrapper,Main
} from "./corouselPage.style";
import Images from "../../../components/TabNative";

const CarouselMain = () => {
    const [activeTab, setActiveTab] = useState({numb:1});
    const [color,setColor] = useState(false)
    const data = [
        {
            id:1,
            img:"",
            title:"Raqobatchilaringizdan oldinda bo`ling!",
            subtitle:"Kalit so`zlar orqali Topga chiqing",
            button:
               [
                        {
                            id:1,
                            title:"Togri kalit so'zlarini topish"
                        },
                        {
                            id:2,
                            title:"Web analitika"
                        },
                        {
                            id:3,
                            title:"Qidiruvda TOP da turish"
                        },
                        {
                            id:4,
                            title:"reklamani optimizatsiya qilish"
                        },
                        {
                            id:5,
                            title:"Togri kalit so'zlarini topish"
                        },
                    ]


        },
        {
            id:2,
            img:"",
            title:"Instagram & Facebook orqali sotuvingizni  oshiring!",
            subtitle:"O`z potensial Mijozlaringizga ega bo`ling va savdoni oshiring",
            button:
                [
                    {
                        id:1,
                        title:"Raqobatchilarni o'rganish"
                    },
                    {
                        id:2,
                        title:"Copyrighting"
                    },
                    {
                        id:3,
                        title:"Bannerlar yaratish"
                    },
                    {
                        id:4,
                        title:"Kuchli taklif yaratish"
                    },
                    {
                        id:5,
                        title:"Optimizatisiya "
                    },
                ]
        },
        {
            id: 3,
            img: "",
            title: "Potensial auditoriyangizni Sotuvchi Sayt orqali mijozga aylantiring",
            subtitle: "Sotuvchi Sayt orqali potensial auditoriyangizga mahsulot xizmatingizni Soting.",
            button:
                [
                    {
                        id:1,
                        title:"Copyrighting"
                    },
                    {
                        id:2,
                        title:"UX&UI"
                    },
                    {
                        id:3,
                        title:"Saytni optimizatsiya qilish"
                    },
                    {
                        id:4,
                        title:"Kuchli sarlavha yaratish"
                    },

                ]
        }

]
    const dataTab =[
        {
            id:1,
            title:"Reklama Google & Yandex"
        },
        {
            id:2,
            title:"Target Reklama Meta Instagram & Facebook "
        },
        {
            id:3,
            title:"Sotuvchi Sayt (Landing Page)"
        },
    ]




return(
   <CarouselWrapper>
    <Container>
        <Title>
            <>5x  ROASdan Foydalanish</>
        </Title>

       <Wrapper>
           <ImageSide>
               <Images activeTab={activeTab.numb}/>
           </ImageSide>
          <Main>
              <OurService> Bizning Xizmatlar </OurService>
              <TabSide>
                  <TabWrapper>
                      {dataTab.map(({id,title})=>{
                          return(
                              <Tab  key={id}
                                    color={color}

                                    onClick={
                                        () => {
                                            setActiveTab({numb: id});
                                            setColor(true)
                                        }
                                    }
                              >
                                  <p>{title}</p>
                              </Tab>
                          )
                      })}

                  </TabWrapper>

                  <TabContentWrapper>
                      <Content>
                          {
                              data.map(({id,title,subtitle})=>{
                                  return(
                                      <LeftSide key={id} isActive={activeTab.numb === id}>
                                          <ContentTitle>
                                              {title}
                                          </ContentTitle>
                                          <ContentSubTitle>
                                              {subtitle}
                                          </ContentSubTitle>
                                      </LeftSide>
                                  )
                              })
                          }

                          {
                              data.map(({id,title,button})=>{
                                  return(
                                      <RightSide key={id}  isActive={activeTab.numb === id}>
                                          <InnerContainer>
                                              {
                                                  button.map(({id,title})=>{
                                                      return (
                                                          <Button key={id}>
                                                              {title}
                                                          </Button>
                                                      )
                                                  })
                                              }



                                          </InnerContainer>
                                      </RightSide>
                                  )
                              })
                          }

                      </Content>
                  </TabContentWrapper>
              </TabSide>
          </Main>
       </Wrapper>
    </Container>
   </CarouselWrapper>
)
}
export default CarouselMain