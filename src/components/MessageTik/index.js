import React from  "react"
import "./index.css"
const MessageTik = () =>{
    return(
            <div className="icon-animated icon-animated-tick" tabIndex="-1" aria-hidden="true">
                <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"/>
                </svg>

                <div className="tick">
                    <svg className="tick-leg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 52">
                        <polygon className="" points="1,41 0,48 25,52 25,45" />
                    </svg>
                    <svg className="tick-leg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 52">
                        <polygon class="" points="18,45 25,47 25,0 18,0" />
                    </svg>
                </div>
            </div>
    )
}
export default MessageTik