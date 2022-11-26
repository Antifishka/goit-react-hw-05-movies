import { useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { StyledLink } from "./BackButton.styled";

export const BackButton = ({children}) => {
    const { state } = useLocation();

 
    return <StyledLink to={state?.from || '/'}>
        <BsArrowLeft size={16}/>
        {children}</StyledLink>
}
