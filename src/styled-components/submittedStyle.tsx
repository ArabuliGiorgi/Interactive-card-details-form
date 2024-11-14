import styled from "styled-components";

const Submitted = styled.div`
    width: 100%;
    max-width: 429px;
    margin: 45px 0 82px;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: 80px;
        margin-bottom: 35px;
    }
    .gratitude{
        font-size: 28px;
        font-weight: 500;
        line-height: 35.73px;
        letter-spacing: 3.42px;
        text-align: center;
        color: #21092F;
        margin-bottom: 16px;
    }
    P{
        font-size: 18px;
        font-weight: 500;
        line-height: 22.97px;
        text-align: center;
        color: #8F8694;
        margin-bottom: 48px;
    }
    button{
        width: 100%;
        height: 53px;
        border-radius: 8px;
        background-color: #21092F;
        display: flex;
        justify-content: center;
        align-items: center;

        h1{
            font-size: 18px;
            font-weight: 500;
            line-height: 22.97px;
            text-align: left;
            color: white;
        }
    }
`

export {Submitted}