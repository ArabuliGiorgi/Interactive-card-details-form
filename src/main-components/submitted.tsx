import { Submitted } from "../styled-components/submittedStyle";
import CompleteImage from "/images/icon-complete.svg"

export default function submitted(){
    return (
        <Submitted>
            <img src={CompleteImage} alt="complete icon" />
            <h1 className="gratitude">THANK YOU!</h1>
            <p>We’ve added your card details</p>
            <button><h1>Continue</h1></button>
        </Submitted>
    )
}