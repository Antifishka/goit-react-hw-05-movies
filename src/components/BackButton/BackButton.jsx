import { useLocation } from "react-router-dom";
import { StyledLink } from "./BackButton.styled";

export const BackButton = ({children}) => {
    const { state } = useLocation();

    if (!state?.from) {
        return null;
    };

    return <StyledLink to={state.from}>{children}</StyledLink>
}