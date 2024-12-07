import styled, { keyframes } from "styled-components";

const AppWapperCard = styled.div`
  padding: 2em;
  background-color: #fff;
`
const AppWapperDoc = styled.p`
  color: #888;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const WapperLogoSpin = styled.img`
  animation: ${rotate360} infinite 20s linear;
`
const WpaaerH1 = styled.h1``;


// ----------------------------------------------------

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.875rem;
    background-color: #fff;
    width:100%;
    color:#fff;
    @media (min-width:768){
        flex-direction: row;
        max-width:90rem;
    }
    
`

export const ResultCard = styled.div`
    padding: 1.25rem;
    border-radius: 0 0 1.875rem 1.875rem;
    background: #213547;
   background: linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%));
  
     
    @media (min-width:768){
        border-radius: 1.875rem;
        max-width: 400px;
  
    }
`

export const ScoreCircle = styled.div`
    border-radius:50%;
    width:7.5rem;
    height:7.5rem;
    align-items: center;
    display: flex;
    justify-items: center;
    flex-direction: column;
    margin: 0 auto;
     background: linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
    p {
        font-size: 2.5rem;
        margin: 0;
        font-weight: 700;
    }
`
// Summary 区域
export const SummarySection = styled.div`
    padding: 1.25rem;
    width: 100%;
    max-width: 25rem;
    flex: 1;
    h2{
        margin: 0 auto;
    }
`
// Summary 每一项
export const SummaryItem = styled.div<{ color: string }>`
  width: 100%;
    background-color:${({ color }) => `${color}20`};
    padding: 1rem 0.625rem;
    border-radius:  0.625rem;
    color: ${(props) => props.color};
    margin-top:0.625rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img{
        margin-right:0.625rem;
    }
    span:first-child{
        font-weight: 500;
        color: #000;
    }

    span:last-child{
        color: #a9a5a5;
    }
`

export const Button = styled.button`
    background-color: hsl(224, 30%, 27%);
    border-radius: 50px;
    width: 200px;
    margin: 10px auto;
    color:hsl(0, 0%, 100%);
    
    &:hover{
        background: linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%));
    }

`







//----------------------------------------------------------

export { AppWapperCard, AppWapperDoc, WapperLogoSpin, WpaaerH1 }