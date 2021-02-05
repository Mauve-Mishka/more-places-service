import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SavedBadgeContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  p {
    font-size: 16px;
    margin: 0;
  }
`;

const SavedBadge = ({ isSaved }) => {
  return (
    <SavedBadgeContainer>
      {isSaved ? <p>♥️</p> : <p>♡</p>}
    </SavedBadgeContainer>
  );
};

SavedBadge.propTypes = {
  isSaved: PropTypes.bool
};

export default SavedBadge;

