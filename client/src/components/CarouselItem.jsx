import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { query } from '../utils';
import ItemPhoto from './ItemPhoto';
import ItemReviews from './ItemReviews';
import ItemDescription from './ItemDescription';

const CarouselItemContainer = styled.div`
  border: 0 solid rgba(0, 0, 0, 0);
  border-left-width: 10px;
  border-right-width: 10px;
  flex-shrink: 0;
  width: 66%;
  @media (min-width: ${query.medium}) {
    width: calc(33.333%);
  }
  @media (min-width: ${query.large}) {
    width: calc(25%);
  }
`;

const CarouselItem = ({ place }) => {
  return (
    <CarouselItemContainer>
      <ItemPhoto
        isSaved={place.isSaved}
        isSuperhost={place.isSuperhost}
        thumbnailUrl={place.thumbnailUrl}
      />
      <ItemReviews
        reviews={place.reviews}
        reviewsAvg={place.reviewsAvg}
      />
      <ItemDescription
        beds={place.beds}
        houseType={place.houseType}
        price={place.price}
        stayName={place.stayName}
      />
    </CarouselItemContainer>
  );
};

CarouselItem.propTypes = {
  place: PropTypes.object
};

export default CarouselItem;

