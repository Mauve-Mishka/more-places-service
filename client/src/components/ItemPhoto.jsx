import React from 'react';
const { styled } = window;
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

const ItemPhoto = ({ index, isSaved, isSuperhost, setActive, thumbnailUrl, toggleModal }) => {
  return (
    <ItemPhotoContainer>
      <StyledItemPhoto src={thumbnailUrl} />
      {isSuperhost && <SuperhostBadge isSuperhost={isSuperhost} />}
      <SavedBadge index={index} isSaved={isSaved} setActive={setActive} toggleModal={toggleModal}/>
    </ItemPhotoContainer>
  );
};

ItemPhoto.propTypes = {
  isSaved: PropTypes.bool,
  isSuperhost: PropTypes.bool,
  thumbnailUrl: PropTypes.string.isRequired
};

export default ItemPhoto;

