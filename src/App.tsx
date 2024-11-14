import { useState } from "react"
import { Main } from "./styled-components/AppStyled"
import Form from "./main-components/form";
import Submitted from "./main-components/submitted";
import CardLogo from "/images/card-logo.svg"

export interface Card{
  name: string,
  number: string,
  expMonth: string,
  expYear: string,
  CVC: string
}

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [cardDetails, setCardDetails] = useState<Card>({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    CVC: ""
  });
  const [cardErrors, setCardErrors] = useState<Card>({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    CVC: ""
  });
  const formattedCardNumber = ():string => {
    if(cardDetails.number === '')
      return "0000 0000 0000 0000";
    let temp = cardDetails.number.split(' ');
    for(let i = 0; i < 4; i++){
      if(i >= temp.length)
        temp[i] = '';
      temp[i] = temp[i].padEnd(4, '0');
    }
    return temp.join(' ');
  } 

  return (
    <Main>
      <div className="cards">
        <div className="back-card">
          <h1 className="CVC-font">{cardDetails.CVC.padStart(3, '0')}</h1>
        </div>
        <div className="front-card">
          <img src={CardLogo} alt="card logo" className="h-[30px] lg:h-[47px]"/>
          <div className="w-[100%]">
            <h1 className="card-number">{formattedCardNumber()}</h1>
            <div className="name-date-div">
              <h1>{cardDetails.name.trim() === "" ? "JANE APPLESEED" : cardDetails.name.toUpperCase()}</h1>
              <h1>{cardDetails.expMonth.padStart(2, '0')}/{cardDetails.expYear.padStart(2, '0')}</h1>
            </div>
          </div>
        </div>
      </div>
      {submitted ? 
      <Submitted></Submitted> : 
      <Form
        setSubmitted={setSubmitted}
        cardDetails={cardDetails}
        setCardDetails={setCardDetails}
        cardErrors={cardErrors}
        setCardErrors={setCardErrors}
      ></Form>}
    </Main>
  )
}

export default App
