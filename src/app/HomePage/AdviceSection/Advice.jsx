import React from "react";
import {AdviceForm, AdviceWrapper, Container, Title} from "./Advice.styles";

const Advice = () => {
    return(
        <AdviceWrapper>
            <Container>
                <Title>5x  ROAS Bepul <br/> konsultatsiya</Title>
                <AdviceForm>
                        <input name={"Number"} type={"number"} maxLength={14} min={14}/>
                        <input name={"Text"}/>
                        <button>BEPUL MASLAXAT!</button>
                </AdviceForm>
            </Container>
        </AdviceWrapper>
    )
}
export default Advice