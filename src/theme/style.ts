import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const WapperLogoSpin = styled.img`
  animation: ${rotate360} infinite 20s linear;
`


// ----------------------------------------------------

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.875rem;
    margin:auto;
    @media screen and (min-width:768px){
      box-shadow:0.25rem 0.25rem 1rem rgb(0,0,0,0.2);
      flex-direction: row;
      max-width:40rem;
    }
`

export const ResultCard = styled.div`
    color:#fff;
    padding: 1.25rem;
    border-radius: 0 0 1.875rem 1.875rem;
    flex:1;
    dispaly:flex;
    background: linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%));
  
    @media (min-width:768px){
        border-radius: 1.875rem;
        max-width:25rem;
    }
`

export const ScoreCircle = styled.div`
    border-radius:50%;
    width:7.5rem;
    height:7.5rem;
    display: flex;
    flex-direction: column;
    font-size:1rem;
    margin:auto;
    background: linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
  
    span:first-child {
      margin-top:1.25rem;
      font-size: 2.75rem;
      line-height:1.2;
      font-weight: 700;
    }
`
// Summary 区域
export const SummarySection = styled.div`
    padding: 1.25rem;
    max-width: 25rem;
    flex: 1;
    h2{
        margin: 0 auto 0 0;
        padding-bottom:0.625rem;
        text-align:left;
    }
`
// Summary 每一项
export const SummaryItem = styled.div<{ color: string }>`
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
    border-radius: 3.125rem;
    width:100%;
    height:3rem;
    margin:1rem auto;
    padding:1rem auto;
    color:hsl(0, 0%, 100%);
    
    &:hover{
        background: linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%));
    }

`