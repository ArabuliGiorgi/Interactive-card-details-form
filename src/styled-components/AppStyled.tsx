import styled from "styled-components";
import MobileBack from "/images/bg-main-mobile.png"
import DesktopBack from "/images/bg-main-desktop.png"
import BackCard from "/images/bg-card-back.png"
import FrontCard from "/images/bg-card-front.png"

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .cards{
        width: 100%;
        max-width: 720px;
        height: 283px;
        position: relative;

        .back-card{
            width: 286px;
            height: 157px;
            background-image: url(${BackCard});
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: absolute;
            top: 32px;
            right: 16px;

            .CVC-font{
                font-size: 9px;
                font-weight: 500;
                line-height: 11.48px;
                letter-spacing: 1.29px;
                text-align: right;
                color: white;
                position: absolute;
                top: 72px;
                right: 37px;
            }
        }
        .front-card{
            width: 286px;
            height: 157px;
            background-image: url(${FrontCard});
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: absolute;
            bottom: 0;
            left: 16px;
            padding: 17.5px 20.5px 19.5px 19.5px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: space-between;

            .card-number{
                font-size: 18px;
                font-weight: 500;
                line-height: 22.97px;
                letter-spacing: 2.2px;
                text-align: left;
                color: white;
            }
            .name-date-div{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 17px;
            }
            .name-date-div h1{
                font-size: 9px;
                font-weight: 500;
                line-height: 11.48px;
                letter-spacing: 1.29px;
                color: white;
            }
        }
    }
    .cards::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 240px;
        background-image: url(${MobileBack});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        z-index: -1;
    }
`

export {Main}