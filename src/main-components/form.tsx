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

        </Form>
    )
};

export default form;