import React from 'react';
const { styled } = window;
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';
import { query } from '../utils';

const CarouselSectionContainer = styled.div`
  margin: 0 -24px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: ${query.medium}) {
    overflow-x: hidden;
    margin: 0;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 0 0 14px;
  transition: transform 0.75s;
  transform: translateX(calc((${props => props.page} - 1) * -100%));
  @media (min-width: ${query.medium}) {
    margin: 0 -10px;
  }
`;

const CarouselSection = ({ page, perPage, places, setActive, toggleModal }) => {
  const items = places.map((place, i) => {
    console.log(place)
    return (
      <CarouselItem index={i} id={place.id} key={`${place.stayName}-${i}`} place={place} setActive={setActive} toggleModal={toggleModal}/>
    );
  });

  return (
    <CarouselSectionContainer>
      <CarouselContainer page={page}>
        { items }
      </CarouselContainer>
    </CarouselSectionContainer>
  );
};

CarouselSection.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  places: PropTypes.array
};

export default CarouselSection;