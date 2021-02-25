import React from 'react';
const { styled } = window;
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { colors } from '../utils';
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

const SavedBadge = ({ index, isSaved, setActive, toggleModal }) => {
  return (
    <SavedBadgeContainer onClick={() => toggleModal()}>
      {isSaved
        ? <HeartFilled style={{ color: colors.radicalred, fontSize: '24px' }} onClick={() => setActive(index)} />
        : <HeartOutlined style={{ color: 'white', fontSize: '24px' }} onClick={() => setActive(index)} />}
    </SavedBadgeContainer>
  );
};

SavedBadge.propTypes = {
  isSaved: PropTypes.bool
};

export default SavedBadge;

