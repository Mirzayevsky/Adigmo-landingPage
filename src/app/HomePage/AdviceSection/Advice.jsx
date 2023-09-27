import React from "react";
import {AdviceForm, AdviceWrapper, Container, Title,Input} from "./Advice.styles";
import { PatternFormat } from 'react-number-format';
import Text from "../../../language/langManager";

const Advice = () => {
    return(
        <AdviceWrapper>
            <Container>
                <Title>
                    <Text id={"advise"}/>
                </Title>
                <AdviceForm>
                        <>
                            <PatternFormat className={"num-for"} format="+998 (##) ###-##-##" value="00000000" valueIsNumericString={true}/>
                            <Input placeholder={"Text"}/>
                            {/*<Text id="inputText"/>*/}
                        </>
                        <button>
                            <Text id={"freeBtn"}/>
                        </button>
                </AdviceForm>
            </Container>
        </AdviceWrapper>
    )
}
export default Advice