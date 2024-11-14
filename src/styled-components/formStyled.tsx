import styled from "styled-components";

const Form = styled.div`
    width: 100%;
    max-width: 429px;
    margin: 45px 0;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cardDetails-divs{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;

        h1{
            font-size: 12px;
            font-weight: 500;
            line-height: 15.31px;
            letter-spacing: 2px;
            text-align: left;
            color: #21092F;
            margin-bottom: 9px;
        }
        input{
            outline: none;
            border: 1px solid #DFDEE0;
            min-width: 0;
            width: 100%;
            border-radius: 8px;
            height: 45px;
            padding: 0 16px;

            font-size: 18px;
            font-weight: 500;
            line-height: 22.97px;
            text-align: left;
            color: #21092F;
        }
        input::placeholder{
            font-size: 18px;
            font-weight: 500;
            line-height: 22.97px;
            text-align: left;
            color: #21092F;
            opacity: 0.25;
        }
        input:focus{
            border: 1px solid #6348FE !important;
        }
        p{
            font-size: 12px;
            font-weight: 500;
            line-height: 15.31px;
            text-align: left;
            color: #FF5050;
            margin-top: 8px;
        }
    }
    .threeInputGroup{
        display: flex;
        align-items: start;
        gap: 11px;

        .exp-inputs{
            display: flex;
            align-items: start;
            gap: 8px;
        }
    }
    #cardnumber-div, .threeInputGroup{
        margin-top: 20px;
    }
    button{
        background-color: #21092F;
        width: 100%;
        height: 53px;
        border-radius: 8px;
        margin-top: 28px;
        display: flex;
        align-items: center;
        justify-content: center;

        h1{
            font-size: 18px;
            font-weight: 500;
            line-height: 22.97px;
            color: #FFFFFF;
        }
    }
`

export {Form}