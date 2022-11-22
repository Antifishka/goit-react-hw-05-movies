import PropTypes from 'prop-types';
import { MoviesCard, StyledLink, MoviesImg, MoviesCardInfo, MoviesTitle, MoviesVote } from "./MoviesItem.styled";

export const MoviesItem = ({id, title, imagePath, vote}) => {
    return (
        <MoviesCard key={id}>
            <StyledLink to={`/movies/${id}`}>
                <MoviesImg src={imagePath} alt={title} />
                <MoviesCardInfo>
                    <MoviesTitle>{title}</MoviesTitle>
                    <MoviesVote>{vote}
                    </MoviesVote>
                </MoviesCardInfo>
            </StyledLink>
          </MoviesCard>
    );
};

MoviesItem.propTypes = {
    // id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
}