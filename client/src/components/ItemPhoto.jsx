import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SuperhostBadge from './SuperhostBadge';
import SavedBadge from './SavedBadge';

const ItemPhotoContainer = styled.div`
  width: 300px;
  height: 250px;
`;

const StyledItemPhoto = styled.div`
  background-image: url(${props => props.thumbnailUrl});
  position: relative;
  width: 300px;
  height: 250px;
`;

const ItemPhoto = ({ isSaved, isSuperhost, thumbnailUrl }) => {
  return (
    <ItemPhotoContainer>
      <StyledItemPhoto thumbnailUrl={thumbnailUrl}>
        {isSuperhost && <SuperhostBadge isSuperhost={isSuperhost} />}
        <SavedBadge isSaved={isSaved} />
      </StyledItemPhoto>
    </ItemPhotoContainer>
  );
};

ItemPhoto.propTypes = {
  isSaved: PropTypes.bool,
  isSuperhost: PropTypes.bool,
  thumbnailUrl: PropTypes.string.isRequired
};

export default ItemPhoto;

