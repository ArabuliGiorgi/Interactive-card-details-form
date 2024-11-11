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

  return (
    <Main>
      <div className="cards">
        <div className="back-card">
          <h1 className="CVC-font">000</h1>
        </div>
        <div className="front-card">
          <img src={CardLogo} alt="card logo" className="h-[30px] lg:h-[47px]"/>
          <div className="front-details">
            <h1 className="card-number">0000 0000 0000 0000</h1>
            <div className="name-date-div">
              <h1>JANE APPLESEED</h1>
              <h1>00/00</h1>
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
