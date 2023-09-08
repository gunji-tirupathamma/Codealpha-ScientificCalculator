import styled from 'styled-components'

export const MainContainer=styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    background-image: url("https://img.freepik.com/free-photo/abstract-luxury-gold-yellow-gradient-studio-wall-well-use-as-background-layout-banner-product-presentation_1258-54613.jpg?w=360");
    background-size: cover;
    height: 100vh;
    padding: 10px;
`

export const Heading=styled.h1`
    font-size: 35px;
    margin-top: 30px;
    font-weight: bold;
    text-decoration: underline;
    @media screen and (max-width: 576px){
        font-size: 25px;
    }
`

export const Calculator=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding: 10px;
    background-color: #2b0275;
    backround-size: cover;    
    border-radius: 10px;  
    `

export const Display=styled.div`    
    background-color: #594680;
    height: 70px;
    width: 300px;
    border: 0px;
    outline: 0px;
    border-radius: 10px;
    text-align: right;
    padding: 10px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
    font-size: 20px;
`

export const Input=styled.input`
    background-color: transparent;
    outline: 0px;
    text-align: right;
    border: 0px;
    color: #fff;
    height: 40%;
    width: 100%;
    font-size: 20px;
`

export const Output=styled.p`
background-color: transparent;
outline: 0px;
text-align: right;
border: 0px;
color: #fff;
font-size: 20px;
`

export const ButtonsContainer=styled.div`
    margin-top: 20px;
`

export const Button=styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.5);
    border: 0px;
    outline: 0px;
    color: #fff;
    background-color: #038a61;
    margin: 3px;
    margin-left: 15px;

    &:hover {
        background-color: #ffff;
        color: #000;
        transform: scale(1.1);
        cursor: pointer;
      }
`

export const NumButton=styled.button`
    width: 60px;
    height: 35px;
    border-radius: 15px;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.5);
    border: 0px;
    outline: 0px;
    color: #fff;
    background-color: #91072d;
    margin: 5px;
    margin-left: 10px;
    font-size: 18px;    
    
    &:hover {
        background-color: #ffff;
        color: #000;
        transform: scale(1.1);
        cursor: pointer;
      }
`