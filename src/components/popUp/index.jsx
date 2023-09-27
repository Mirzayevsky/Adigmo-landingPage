import React, { useEffect, useState } from "react";
import {AdviceForm, AdviceWrapper, Container, Title, Input, PopUpWrapper} from "./styles";
import { PatternFormat } from 'react-number-format';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Text from "../../language/langManager";
import {ReactComponent as ExitSvg} from '../../source/logo/x-symbol-svgrepo-com.svg';
const PopUp = ({popUp,setPopUp}) => {
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
                    Toastify({
                        text: "Данные успешно отправлены",
                        className: "info",
                        style: {
                            background: "linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%)",
                        }
                    }).showToast();
                    console.log(`Message sent successfully to chat ID: ${chatId}`);
                    setNameValue("")
                    setNumberValue("")
                    setPopUp(false)
                } else {
                    alert("Данные не отправляются")
                    console.log(

                        Error (`sending message to chat ID ${chatId}: ${data.description}`)
                    );
                }
            }
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
       <PopUpWrapper>
           <AdviceWrapper>
               <ExitSvg className={"svg-one"} onClick={() => setPopUp(false)}/>
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
       </PopUpWrapper>
    )
}
export default PopUp