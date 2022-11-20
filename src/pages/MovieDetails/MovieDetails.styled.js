import styled from "styled-components";

export const MovieBox = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid black;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

export const MovieGenres = styled.ul`
  display: flex;
  gap: 8px;

`;

export const MovieCastBox = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid black;
`;

export const MovieText = styled.div`
  margin-bottom: 15px;
`;

export const MovieItem = styled.li`
  margin-bottom: 5px;
  margin-left: 20px;
  list-style: inside;

  :last-child{
    margin-bottom: 0px;
  }
`;
