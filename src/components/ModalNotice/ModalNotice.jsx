import { useDispatch, useSelector } from 'react-redux';
import { selectPet } from '../../redux/notices/selectors.js';
import { addPetToFavorites, removePetFromFavorites } from '../../redux/notices/operations.js';
import { getCurrentUser } from '../../redux/auth/operations.js';
import { selectIsFavorite } from '../../redux/auth/selectors.js';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import Star from '../../shared/components/Star/Star.jsx';
import s from './ModalNotice.module.scss';

const ModalNotice = ({ closeModal }) => {
  const dispatch = useDispatch();
  const pet = useSelector(selectPet);
  const isFavoriteSelector = selectIsFavorite(pet._id);
  const isFavorite = useSelector(isFavoriteSelector);
  const popularity = Number(pet.popularity / 1000).toFixed(0);
  const rating = popularity > 5 ? 5 : popularity;

  const handleAddBtnClick = async id => {
    if (isFavorite) {
      await dispatch(removePetFromFavorites(id));
    } else {
      await dispatch(addPetToFavorites(id));
    }

    dispatch(getCurrentUser());
  };

  return (
    <section className={s.backdrop}>
      <CloseBtn handleClick={closeModal} isHomePage={true} />
      <div className={s.imgWrapper}>
        <p className={s.category}>{pet.category}</p>
        <img className={s.img} src={pet.imgURL} alt="" width="120" height="120" />
      </div>
      <h2 className={s.title}>{pet.title}</h2>
      <div className={s.ratingWrapper}>
        {Array.from({ length: rating }, (_, idx) => (
          <div key={idx}>
            <Star />
          </div>
        ))}
        {Array.from({ length: 5 - rating }, (_, idx) => (
          <div key={idx}>
            <Star isGrey={true} />
          </div>
        ))}
        <p className={s.rating}>{rating}</p>
      </div>
      <ul className={s.characteristicsList}>
        <li className={s.listItem}>
          <h3 className={s.itemTitle}>Name</h3>
          <p className={s.itemText}>{pet.name}</p>
        </li>
        <li className={s.listItem}>
          <h3 className={s.itemTitle}>Birthday</h3>
          <p className={s.itemText}>{pet.birthday}</p>
        </li>
        <li className={s.listItem}>
          <h3 className={s.itemTitle}>Sex</h3>
          <p className={s.itemText}>{pet.sex}</p>
        </li>
        <li className={s.listItem}>
          <h3 className={s.itemTitle}>Species</h3>
          <p className={s.itemText}>{pet.species}</p>
        </li>
      </ul>
      <p className={s.comment}>{pet.comment}</p>
      <div className={s.btnWrapper}>
        <Button
          className={s.addBtn}
          title={isFavorite ? 'Remove from' : 'Add to'}
          onClick={() => handleAddBtnClick(pet._id)}
        />
        <a href={`tel:${pet.user.phone}`} target="_blank" className={s.contactBtn}>
          Contact
        </a>
      </div>
    </section>
  );
};

export default ModalNotice;
