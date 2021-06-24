import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  background-color: rgb(8 17 36);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  position: -webkit-sticky;
	position: sticky;
	top: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Li = styled.li`
  border-left: 3px solid rgba(255,255,255,0.75);
  border-radius: 2px;
  padding-left: 14px;
  padding-right: 16px;
  max-height: 36px;
  transition: .4s ease-out;
  &:hover {
    box-shadow: inset 200px 0 0 0 rgb(255, 255, 255, .75);
    opacity: 1;
  }
  &:hover > a {
    color: rgb(8, 17, 36);
  }
  &:hover + li {
    transition: .2s;
    border-left: 3px solid rgba(255,255,255,0);
  }
`;

export const Anchor = styled.a`
  display: flex;
  align-items:center;
  color: white;
  margin-bottom: 18px;
`;

export const Span = styled.span`
  font-size: 2rem;
  padding-left: 6px;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding-left: 1em;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  padding-left: 5em;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
    padding-left: 0;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  position: relative;
  top: -8px;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;  
  line-height: 32px;
  color: rgba(255, 255, 255, .75);
  transition: .4s ease-out;

  &:hover {
    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px;
padding-top: 0px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
& > svg { 
  position: relative;
  top: 5px;
}
`