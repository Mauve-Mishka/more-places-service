import React from 'react';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { colors } from '../utils';

const SaveModalCategoryContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  div {
    display: flex;
  }
  div > img {
    border-radius: 4px;
    margin-right: 16px;
  }
  .category-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .category-text > p {
    margin: 0;
  }
  .tiny {
    color: ${colors.dovegray};
    font-size: 12px;
    margin-bottom: 4px;
  }
  .location {
    color: ${colors.mineshaft};
    font-weight: 500;
    margin-bottom: 4px;
  }
  .stays {
    color: ${colors.mineshaft};
    font-size: 14px;
  }
`;


const SaveModalCategory = ({ active, isSaved, toggleModal, updateSaved }) => {

  const handleClick = () => {
    toggleModal();
    updateSaved(active);
  };

  return (
    <SaveModalCategoryContainer>
      <div>
        <img src='http://placekitten.com/64/64'/>
        <div className='category-text'>
          <p className='tiny'>Any time</p>
          <p className='location'>Mt. Hood, OR</p>
          <p className='stays'>1 stay</p>
        </div>
      </div>
      {isSaved
        ? <HeartFilled style={{ color: colors.radicalred, fontSize: '24px' }} onClick={() => handleClick()}/>
        : <HeartOutlined style={{ color: colors.mineshaft, fontSize: '24px' }} onClick={() => handleClick()}/>}
    </SaveModalCategoryContainer>
  );
};

export default SaveModalCategory;