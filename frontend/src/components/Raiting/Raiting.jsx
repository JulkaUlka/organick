import { RatingStyled } from "./Raiting.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as farfaStar } from "@fortawesome/free-regular-svg-icons";

export function Rating(props) {
  const { rating } = props;
  return (
    <RatingStyled>
      <span>
        {rating >= 1 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 0.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={farfaStar} />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 1.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={farfaStar} />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 2.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={farfaStar} />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 3.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={farfaStar} />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : rating >= 4.5 ? (
          <FontAwesomeIcon icon={faStarHalfStroke} />
        ) : (
          <FontAwesomeIcon icon={farfaStar} />
        )}
      </span>
    </RatingStyled>
  );
}
