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
  width: 100%;
  height: auto;
`;

const ItemPhoto = ({ isSaved, isSuperhost, thumbnailUrl }) => {
  return (
    <ItemPhotoContainer>
      <StyledItemPhoto src={thumbnailUrl} />
      {isSuperhost && <SuperhostBadge isSuperhost={isSuperhost} />}
      <SavedBadge isSaved={isSaved} />
    </ItemPhotoContainer>
  );
};

ItemPhoto.propTypes = {
  isSaved: PropTypes.bool,
  isSuperhost: PropTypes.bool,
  thumbnailUrl: PropTypes.string.isRequired
};

export default ItemPhoto;

