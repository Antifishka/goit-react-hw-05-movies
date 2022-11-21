import PropTypes from 'prop-types';
import { CardWrapper, CardInfo, CardText } from './CastItem.styled';

export const CastItem = ({id, imagePath, name, character}) => {
    return (
        <CardWrapper key={id}>
            <img src={imagePath} alt={name} width="100" />

            <CardInfo>
                <h4>{name}</h4>
                <CardText>Character:<br />{character}</CardText>
            </CardInfo>
        </CardWrapper>
    );

};

CastItem.propTypes = {
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
}