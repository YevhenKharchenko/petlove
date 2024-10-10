import { useSelector } from 'react-redux';
import { selectPets } from '../../redux/auth/selectors.js';
import PetsItem from '../PetsItem/PetsItem.jsx';
import s from './PetsList.module.scss';

const PetsList = () => {
  const pets = useSelector(selectPets);
  return (
    <ul className={s.list}>
      {pets.map(el => {
        return (
          <li key={el._id}>
            <PetsItem item={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default PetsList;
