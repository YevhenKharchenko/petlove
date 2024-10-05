import { sprite } from '../../assets/icons/index.js';
import Container from '../../shared/components/Container/Container.jsx';
import EditUserBtn from '../EditUserBtn/EditUserBtn.jsx';
import PetsBlock from '../PetsBlock/PetsBlock.jsx';
import UserBlock from '../UserBlock/UserBlock.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import s from './UserCard.module.scss';

const UserCard = () => {
  return (
    <section className={s.section}>
      <Container className={s.container}>
        <div className={s.editBtnWrapper}>
          <div className={s.userContainer}>
            <span className={s.userText}>User</span>
            <svg className={s.icon} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-user-02`}></use>
            </svg>
          </div>
          <EditUserBtn />
        </div>
        <UserBlock />
        <PetsBlock />
        <LogOutBtn className={s.logoutBtn} />
      </Container>
    </section>
  );
};

export default UserCard;
