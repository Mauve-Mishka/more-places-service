import React from 'react';
const { styled } = window;
import PropTypes from 'prop-types';

const SuperhostBadgeContainer = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  left: 10px;
  padding: 4px 8px;
  position: absolute;
  top: 10px;
  p {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    text-transform: uppercase;
  }
`;

const SuperhostBadge = ({ isSuperhost }) => {
  return (
    <SuperhostBadgeContainer>
      <p>Superhost</p>
    </SuperhostBadgeContainer>
  );
};

SuperhostBadge.propTypes = {
  isSuperhost: PropTypes.bool
};

export default SuperhostBadge;

