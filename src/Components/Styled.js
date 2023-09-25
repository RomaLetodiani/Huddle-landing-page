import styled from 'styled-components';
import bgDesk from '../images/bg-desktop.svg';
import bgMob from '../images/bg-mobile.svg';

export const Content = styled.div`
  background: url(${bgDesk}) no-repeat;
  width: 100%;
  min-height: 100vh;
  background-color: hsl(257, 40%, 49%);
  padding: 50px 80px;
  color: #fff;

  @media (max-width: 1100px) {
    background: url(${bgMob}) no-repeat center center / cover;
    background-color: hsl(257, 40%, 49%);
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 50px 0;
    @media (max-width: 1100px) {
      flex-direction: column;
      text-align: center;
      img {
        max-width: 623px;
        width: 100%;
      }
    }
    h1 {
      font-size: 44px;
      font-weight: 600;
    }
    p {
      opacity: 0.75;
      margin: 30px 0 20px 0;
      font-size: 18px;
    }
    button {
      background-color: #fff;
      color: hsl(257, 40%, 49%);
      padding: 15px 60px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 9999px;
      box-shadow: 0px 5px 20px #2d2d2d;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: hsl(300, 69%, 71%);
        color: #fff;
      }
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1100px) {
      justify-content: center;
    }
    div {
      display: flex;
      gap: 20px;
      font-size: 25px;
      a {
        border: 2px solid #fff;
        border-radius: 50%;
        padding: 10px;
        transition: all 0.4s ease-in-out;
        &:hover {
          border-color: hsl(300, 69%, 71%);
          color: hsl(300, 69%, 71%);
        }
      }
    }
  }
`;
