import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SuperhostBadge from './SuperhostBadge';
import SavedBadge from './SavedBadge';

const ItemPhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const StyledItemPhoto = styled.img`
  border-radius: 8px;
  height: auto;
  width: 100%;
`;

const ItemPhoto = ({ isSaved, isSuperhost, thumbnailUrl, toggleModal }) => {
  return (
    <ItemPhotoContainer>
      <StyledItemPhoto src={thumbnailUrl} />
      {isSuperhost && <SuperhostBadge isSuperhost={isSuperhost} />}
      <SavedBadge isSaved={isSaved} toggleModal={toggleModal}/>
    </ItemPhotoContainer>
  );
};

ItemPhoto.propTypes = {
  isSaved: PropTypes.bool,
  isSuperhost: PropTypes.bool,
  thumbnailUrl: PropTypes.string.isRequired
};

export default ItemPhoto;

