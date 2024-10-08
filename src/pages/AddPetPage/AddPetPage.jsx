import {
  addPetImg,
  addPetImg2x,
  addPetImgDesk,
  addPetImgDesk2x,
  addPetImgTab,
  addPetImgTab2x,
} from '../../assets/images/index.js';
import AddPetForm from '../../components/AddPetForm/AddPetForm.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import PetBlock from '../../shared/components/PetBlock/PetBlock.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import s from './AddPetPage.module.scss';

const AddPetPage = () => {
  return (
    <main className={s.section}>
      <Container className={s.petContainer}>
        <PetBlock
          mob={addPetImg}
          mob2x={addPetImg2x}
          tab={addPetImgTab}
          tab2x={addPetImgTab2x}
          desk={addPetImgDesk}
          desk2x={addPetImgDesk2x}
          alt="Dog"
        />
        <section className={s.formWrapper}>
          <div className={s.titleWrapper}>
            <Title title="Add my pet /" />
            <p className={s.subtitle}>Personal details</p>
          </div>
          <AddPetForm />
        </section>
      </Container>
    </main>
  );
};

export default AddPetPage;
