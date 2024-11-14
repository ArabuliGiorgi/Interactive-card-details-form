import { Form } from "../styled-components/formStyled"
import { Card } from "../App";

const form: React.FC<{
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    cardDetails: Card,
    setCardDetails: React.Dispatch<React.SetStateAction<Card>>,
    cardErrors: Card,
    setCardErrors: React.Dispatch<React.SetStateAction<Card>>
}> = ({setSubmitted, cardDetails, setCardDetails, cardErrors, setCardErrors}) =>{
    const setCardDetailsErrors = (key: string, callback: React.Dispatch<React.SetStateAction<Card>>, argument: string) => {
        callback((prevs: Card) => ({
            ...prevs,
            [key]: argument
        }));
    }
    const handleSubmit = () => {
        let tempErrors: Card = {
            name: "",
            number: "",
            expMonth: "",
            expYear: "",
            CVC: ""
        }

        for(let key in cardDetails){
            if(cardDetails[key as keyof Card] === ''){
               tempErrors[key as keyof Card] = "Can't be blank";
            }
        }

        if(cardDetails.name.length < 3 && cardDetails.name.length !== 0)
            tempErrors.name = "Name too short";

        if(isNaN(Number(cardDetails.number.split(' ').join(''))))
            tempErrors.number = "Wrong format, numbers only";

        if(cardDetails.number.length !== 19 && cardDetails.number.length !== 0)
            tempErrors.number = "Please fill the number";

        let year = Number("20" + cardDetails.expYear.padStart(2, '0'));
        let exp_date = new Date(year, Number(cardDetails.expMonth));
        let curr_date = new Date();
        if((Number(cardDetails.expMonth) > 12 || Number(cardDetails.expMonth) === 0) && tempErrors.expMonth === ''){
            tempErrors.expMonth = "Invalid month entered";
        }
        else if(exp_date < curr_date && tempErrors.expYear === ''){
            tempErrors.expMonth = "Card is expired";
            tempErrors.expYear = "Card is expired";
        }

        if(cardDetails.CVC.length !== 3 && cardDetails.CVC.length !== 0)
            tempErrors.CVC = "Please fill CVC";

        setCardErrors(tempErrors);
        for(let key in tempErrors){
            if(tempErrors[key as keyof Card] !== '')
                return;
        }
        setSubmitted(true);
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value !== '' && isNaN(Number(event.target.value)) && event.target.name !== "name")
            return;
        setCardDetailsErrors(event.target.name, setCardDetails, event.target.value);
        setCardDetailsErrors(event.target.name, setCardErrors, '');
    }
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let str = event.target.value.replace(/\s+/g, '').split('');
        let newStr = '';
        for(let i = 1; i <= str.length; i++){
            newStr += str[i-1];
            if(i%4 === 0 && i !== 16)
                newStr += ' ';
        }
        setCardDetailsErrors('number', setCardDetails, newStr);
        setCardDetailsErrors('number', setCardErrors, '');
    }
    const handleBackSpaceNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Backspace'){
            event.preventDefault();
            let str = (cardDetails.number.endsWith(' ') ? cardDetails.number.slice(0, -2) : cardDetails.number.slice(0, -1));
            setCardDetailsErrors('number', setCardDetails, str);
        }
    }
    return (
        <Form>
            <div className="cardDetails-divs" id="cardholder-div">
                <h1>CARDHOLDER NAME</h1>
                <input 
                    name="name"
                    type="text" 
                    placeholder="e.g. Jane Appleseed" 
                    value={cardDetails.name}
                    maxLength={30}
                    onChange={handleChange}
                    style={{borderColor: (cardErrors.name === '' ? '#DFDEE0' : '#FF5050')}}
                />
                <p className={`${cardErrors.name === '' ? 'hidden' : 'block'}`}>{cardErrors.name}</p>
            </div>
            <div className="cardDetails-divs" id="cardnumber-div">
                <h1>CARD NUMBER</h1>
                <input 
                    type="text" 
                    placeholder="e.g. 1234 5678 9123 0000" 
                    value={cardDetails.number}
                    maxLength={19}
                    onChange={handleNumberChange}
                    onKeyDown={handleBackSpaceNumber}
                    style={{borderColor: (cardErrors.number === '' ? '#DFDEE0' : '#FF5050')}}
                />
                <p className={`${cardErrors.number === '' ? 'hidden' : 'block'}`}>{cardErrors.number}</p>
            </div>
            <div className="threeInputGroup">
                <div className="cardDetails-divs" id="expdate-div">
                    <h1>EXP. DATE (MM/YY)</h1>
                    <div className="exp-inputs">
                        <input 
                            name="expMonth"
                            type="text" 
                            placeholder="MM"
                            value={cardDetails.expMonth}
                            maxLength={2}
                            onChange={handleChange}
                            style={{borderColor: (cardErrors.expMonth === '' ? '#DFDEE0' : '#FF5050')}}
                        />
                        <input 
                            name="expYear"
                            type="text" 
                            placeholder="YY"
                            value={cardDetails.expYear}
                            maxLength={2}
                            onChange={handleChange}
                            style={{borderColor: (cardErrors.expYear === '' ? '#DFDEE0' : '#FF5050')}}
                        />
                    </div>
                    <p className={`${cardErrors.expMonth === '' && cardErrors.expYear === '' ? 'hidden' : 'block'}`}>{cardErrors.expMonth === '' ? cardErrors.expYear : cardErrors.expMonth}</p>
                </div>
                <div className="cardDetails-divs" id="cvc-div">
                    <h1>CVC</h1>
                    <input 
                        name="CVC"
                        type="text" 
                        placeholder="e.g. 123"
                        value={cardDetails.CVC}
                        maxLength={3}
                        onChange={handleChange}
                        style={{borderColor: (cardErrors.CVC === '' ? '#DFDEE0' : '#FF5050')}}
                    />
                    <p className={`${cardErrors.CVC === '' ? 'hidden' : 'block'}`}>{cardErrors.CVC}</p>
                </div>
            </div>
            <button onClick={handleSubmit}><h1>Confirm</h1></button>
        </Form>
    )
};

export default form;