import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 8px;
  border-radius: 4px;

  &.active{
     
  }

  :hover:not(.active),
  :focus-visible:not(.active){
    color: white;
    background-color: orangered;
  }
`;