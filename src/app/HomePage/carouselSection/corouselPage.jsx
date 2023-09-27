import React,{useState} from "react";
import {
    Button,
    CarouselWrapper,
    Container, Content, ContentSubTitle, ContentTitle,
    ImageSide, InnerContainer, LeftSide, OurService, RightSide, Tab, TabContentWrapper, TabSide, TabWrapper,
    Title, Wrapper,Main
} from "./corouselPage.style";
import Images from "../../../components/TabNative";
import Text from "../../../language/langManager";

const CarouselMain = () => {
    const [activeTab, setActiveTab] = useState({numb:1});
    const [color,setColor] = useState(false)
    const data = [
        {
            id:1,
            img:"",
            title:"titleOne",
            subtitle:"subtitleTwo",
            button:
               [
                        {
                            id:1,
                            title:"btnOne"
                        },
                        {
                            id:2,
                            title:"btnTwo"
                        },
                        {
                            id:3,
                            title:"btnThird"
                        },
                        {
                            id:4,
                            title:"btnFourth"
                        },
                        {
                            id:5,
                            title:"btnFifth"
                        },
                    ]


        },
        {
            id:2,
            img:"",
            title:"titleSecond",
            subtitle:"subtitleOne",
            button:
                [
                    {
                        id:1,
                        title:"buttonTitleOne"
                    },
                    {
                        id:2,
                        title:"buttonTitleSecond"
                    },
                    {
                        id:3,
                        title:"buttonTitleThird"
                    },
                    {
                        id:4,
                        title:"buttonTitleFourth"
                    },
                    {
                        id:5,
                        title:"buttonTitleFifth"
                    },
                ]
        },
        {
            id: 3,
            title: "titleThird",
            subtitle: "subtitleEx",
            button:
                [
                    {
                        id:1,
                        title:"btnSix"
                    },
                    {
                        id:2,
                        title:"btnSeven"
                    },
                    {
                        id:3,
                        title:"btnNine"
                    },
                    {
                        id:4,
                        title:"btnTen"
                    },

                ]
        }

]
    const dataTab =[
        {
            id:1,
            title:"tabOne"
        },
        {
            id:2,
            title:"tabSecond"
        },
        {
            id:3,
            title:"tabThird"
        },
    ]




return(
   <CarouselWrapper>
    <Container>
        <Title>
            <>
                <Text id={"usingRoas"}/>
            </>
        </Title>

       <Wrapper>
           <ImageSide>
               <Images activeTab={activeTab.numb}/>
           </ImageSide>
          <Main>
              <OurService>
                  <Text id={"ourServiceOne"}/>
              </OurService>
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
                                  <p>
                                      <Text id={title}/>
                                  </p>
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
                                              <Text id={title}/>
                                          </ContentTitle>
                                          <ContentSubTitle>
                                              <Text id={subtitle}/>
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
                                                              <Text id={title}/>
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