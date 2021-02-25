import React from 'react';
const { styled } = window;
import { CloseOutlined } from '@ant-design/icons';
import { colors, query } from '../utils';
import SaveModalCategory from './SaveModalCategory';

const ModalOverlay = styled.div`
  opacity: ${props => props.isOpen ? '1' : '0'};
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity .3s, z-index .3s;
  width: 100vw;
  z-index: ${props => props.isOpen ? '100' : '-2'};
`;

const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const InnerModalContainer = styled.div`
  background-color: white;
  border-radius: 12px 12px 0 0;
  bottom: 0;
  left: 0;
  opacity: ${props => props.isOpen ? '1' : '0'};
  position: fixed;
  transition: opacity .3s, z-index .3s;
  width: 100%;
  z-index: ${props => props.isOpen ? '200' : '-1'};
  @media (min-width: ${query.medium}) {
    border-radius: 12px;
    height: fit-content;
    left: 50%;
    max-width: 568px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SaveModalHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: flex;
  justify-content: space-between;
  min-height: 64px;
  padding: 0 24px;
  p {
    font-weight: 500;
  }
`;

const SaveModalBody = styled.div`
  padding: 20px 16px;
`;

const SaveModal = ({ active, isOpen, isSaved, toggleModal, updateSaved }) => {
  return (
    <ModalContainer>
      <ModalOverlay isOpen={isOpen} onClick={() => toggleModal()} />
      <InnerModalContainer isOpen={isOpen}>
        <SaveModalHeader>
          <CloseOutlined onClick={() => toggleModal()} />
          <p>Save to a list</p>
          <div></div>
        </SaveModalHeader>
        <SaveModalBody>
          <SaveModalCategory
            active={active}
            isSaved={isSaved}
            toggleModal={toggleModal}
            updateSaved={updateSaved}
          />
        </SaveModalBody>
      </InnerModalContainer>
    </ModalContainer>
  );
};

export default SaveModal;