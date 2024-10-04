import AddPet from '../AddPet/AddPet.jsx';
import PetsList from '../PetsList/PetsList.jsx';
import s from './PetsBlock.module.scss';

const PetsBlock = () => {
  return (
    <section>
      <div className={s.petsWrapper}>
        <h2 className={s.title}>My pets</h2>
        <AddPet />
      </div>
      <PetsList />
    </section>
  );
};

export default PetsBlock;
