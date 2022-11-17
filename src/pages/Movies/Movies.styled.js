import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 350px;
`;

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font-size: 18px;
    outline: none;
    padding: 4px;

::placeholder {
    font: inherit;
    font-size: 16px;
}
`;

export const FormButton = styled.button`
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

:hover {
    opacity: 1;
}
`;