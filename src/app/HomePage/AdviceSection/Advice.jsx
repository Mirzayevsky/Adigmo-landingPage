import React, { useEffect, useState } from "react";

import {AdviceForm, AdviceWrapper, Container, Title,Input} from "./Advice.styles";
import { PatternFormat } from 'react-number-format';
import Text from "../../../language/langManager";

const Advice = () => {
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const TELEGRAM_API = `https://api.telegram.org/bot6161161153:AAFoEJSlXC6yT0nnudy478cBCWorsnA7T2s/sendMessage`;
    const chatIds = [6090223711]; // Add the additional chat IDs you want to send the message to
    const message = `
     Name: ${nameValue},
     Number:${numberValue}
    `;

        const handleSubmit = async (event) => {
            event.preventDefault();

            // Check if the input values meet the required length
            if (nameValue.length < 5 || numberValue.length < 7) {
                alert("Name must be at least 5 characters and number must be at least 7 digits");
                return; // Don't proceed with sending the message
            }

            try {
                for (const chatId of chatIds) {
                    const response = await fetch(TELEGRAM_API, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message,
                        }),
                    });
                    const data = await response.json();
                    if (data.ok) {
                        console.log(`Message sent successfully to chat ID: ${chatId}`);
                    } else {
                        console.log(
                            Error (`sending message to chat ID ${chatId}: ${data.description}`)
                            );
                    }
                }
                window.location.reload();
            } catch (error) {
                console.log("Error:", error);
            }
        };

        const handleNameChange = (e) => {
            const newValue = e.target.value;
            setNameValue(newValue);
        };

        const handleNumberChange = (e) => {
            const newValue = e.target.value;
            setNumberValue(newValue);
        };
    return(
        <AdviceWrapper>
            <Container>
                <Title>
                    <Text id={"advise"}/>
                </Title>
                <AdviceForm onSubmit={handleSubmit}>
                        <>
                            <PatternFormat
                                className={"num-for"}
                                format="+998 (##) ###-##-##"
                                valueIsNumericString={true}
                                placeholder={"+998 (00) 000-00-00"}
                                value={numberValue}
                                 onChange={handleNumberChange}
                            />

                            <Input placeholder={"Text"}
                                   value={nameValue}
                                   onChange={handleNameChange}
                            />
                            {/*<Text id="inputText"/>*/}
                        </>
                        <button >
                            <Text id={"freeBtn"}

                            />
                        </button>
                </AdviceForm>
            </Container>
        </AdviceWrapper>
    )
}
export default Advice