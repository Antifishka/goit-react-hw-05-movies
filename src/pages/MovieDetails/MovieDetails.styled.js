import styled from "styled-components";

export const MovieBox = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid black;
`;

export const MovieImg = styled.img`
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 
  0px 4px 4px rgb(0 0 0 / 6%), 
  1px 4px 6px rgb(0 0 0 / 16%);
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
