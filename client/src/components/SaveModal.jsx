import React from 'react';
import styled from 'styled-components';
import { colors, query } from '../utils';

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerModalContainer = styled.div`
  background-color: white;
  border-radius: 10px 10px 0 0;
  width: 100%;
`;

const ModalImage = styled.img`
  background: url('http://placekitten.com/64/64')
`;

const SaveModal = ({ isSaved, toggleModal, updateSaved }) => {
  return (
    <ModalContainer>
      <ModalOverlay onClick={() => toggleModal()} />
      <InnerModalContainer>
        <div>
          <p onClick={() => toggleModal()}>X</p>
          <p>Save to a list</p>
          <p></p>
        </div>
        <div>
          <div>
            <ModalImage />
            <div>
              <p>Any time</p>
              <p>Mt. Hood, OR</p>
              <p>1 stay</p>
            </div>
          </div>
          <p>♡</p>
        </div>
      </InnerModalContainer>
    </ModalContainer>
  );
};

export default SaveModal;