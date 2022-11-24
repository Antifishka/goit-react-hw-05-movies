import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 96px;
  margin-top: 8px;
  padding: 8px 0;
  border-radius: 4px;

  text-decoration: none;
  font-size: 16px;

  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
  color: white;
  background-color: orangered;
}
`;