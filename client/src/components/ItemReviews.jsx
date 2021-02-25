import React from 'react';
const { styled } = window;
import PropTypes from 'prop-types';
import { colors, query } from '../utils';

const StyledItemReviews = styled.div`
  display: flex;
  align-items: flex-end;
  height: 24px;
  margin: 0 0 10px 0;
  p {
    color: ${colors.mineshaft};
    font-size: 14px;
    margin: 0;
  }
  span {
    color: ${colors.dovegray};
  }
`;

const ItemReviews = ({ reviews, reviewsAvg }) => {
  return (
    <StyledItemReviews>
      {reviews
        ? <p>⭐️ { reviewsAvg } <span>({reviews})</span></p>
        : <p><span>No reviews yet</span></p>
      }
    </StyledItemReviews>
  );
};

ItemReviews.propTypes = {
  reviews: PropTypes.number
};

export default ItemReviews;