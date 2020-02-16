import styled from "styled-components"
import { FiMenu } from "react-icons/fi"

const StyledMenu = styled.nav`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  background: #0e2f5a;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 93vh;
  margin-top: 2.7em;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  width: 13em;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  font-size: 1.3em;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

const StyledBurger = styled.button`
  position: right;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  margin-right  : 10px
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? "#fff" : "#fff")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const StyledNotification = styled(FiMenu)`
  position: right;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2.1em;
  color: #0e2f5a;
  margin-right  : 5px
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? "#fff" : "#fff")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Hover = styled.div`
  cursor: pointer;
  color: ${props => (props.white ? "#fff" : null)};
`

export { StyledMenu, StyledBurger, StyledNotification, Hover }
