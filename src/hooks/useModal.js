import { useContext } from 'react';
import { ModalContext } from '../context/index.js';

export const useModal = () => useContext(ModalContext);
