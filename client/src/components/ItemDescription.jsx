import React from 'react';
const { styled } = window;
import PropTypes from 'prop-types';

const ItemDescriptionContainer = styled.div`
  p {
    font-weight: 300;
    line-height: 20px;
    margin: 0 0 2px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    font-weight: 500;
    margin: 4px 0 0 0;
  }
`;

const ItemDescription = ({ beds, houseType, minNightlyRate, stayName }) => {
  return (
    <ItemDescriptionContainer>
      <p>{ houseType } · { beds } beds</p>
      <p>{ stayName }</p>
      <p><span>${ minNightlyRate }</span> / night</p>
    </ItemDescriptionContainer>
  );
};

ItemDescription.propTypes = {

};

export default ItemDescription;