import { Form } from "../styled-components/formStyled"
import { Card } from "../App";

const form: React.FC<{
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    cardDetails: Card,
    setCardDetails: React.Dispatch<React.SetStateAction<Card>>,
    cardErrors: Card,
    setCardErrors: React.Dispatch<React.SetStateAction<Card>>
}> = ({setSubmitted, cardDetails, setCardDetails, cardErrors, setCardErrors}) =>{
    const handleSubmit = () => {
        setSubmitted(true);
    }
    return (
        <Form>
            <div className="cardDetails-divs" id="cardholder-div">
                <h1>CARDHOLDER NAME</h1>
                <input type="text" placeholder="e.g. Jane Appleseed"/>
                <p className={`${cardErrors.name === '' ? 'hidden' : 'block'}`}>{cardErrors.name}</p>
            </div>
            <div className="cardDetails-divs" id="cardnumber-div">
                <h1>CARD NUMBER</h1>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000"/>
                <p className={`${cardErrors.number === '' ? 'hidden' : 'block'}`}>{cardErrors.number}</p>
            </div>
            <div className="threeInputGroup">
                <div className="cardDetails-divs" id="expdate-div">
                    <h1>EXP. DATE (MM/YY)</h1>
                    <div className="exp-inputs">
                        <input type="number" placeholder="MM"/>
                        <input type="number" placeholder="YY"/>
                    </div>
                    <p className={`${cardErrors.expMonth === '' && cardErrors.expYear === '' ? 'hidden' : 'block'}`}>{cardErrors.expMonth === '' ? cardErrors.expMonth : cardErrors.expYear}</p>
                </div>
                <div className="cardDetails-divs" id="cvc-div">
                    <h1>CVC</h1>
                    <input type="number" placeholder="e.g. 123"/>
                    <p className={`${cardErrors.CVC === '' ? 'hidden' : 'block'}`}>{cardErrors.CVC}</p>
                </div>
            </div>
            <button><h1>Confirm</h1></button>
        </Form>
    )
};

export default form;