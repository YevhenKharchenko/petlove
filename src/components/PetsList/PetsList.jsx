import PetsItem from '../PetsItem/PetsItem.jsx';
import s from './PetsList.module.scss';

const PetsList = () => {
  return (
    <ul className={s.list}>
      <PetsItem />
      <PetsItem />
      <PetsItem />
    </ul>
  );
};

export default PetsList;
