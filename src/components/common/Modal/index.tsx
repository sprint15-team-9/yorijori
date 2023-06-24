import { ReactNode } from 'react';
import styled from 'styled-components';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <div>
        <button onClick={() => onClose()}>닫기</button>
        {children}
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  button {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10px;
  }
  > div {
    position: fixed;
    z-index: 50;
    padding: 3rem;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    top: 50%;
    left: 50%;
  }
`;
