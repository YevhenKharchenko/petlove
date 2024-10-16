import FriendsList from '../../components/FriendsList/FriendsList.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import s from './OurFriendsPage.module.scss';

const OurFriendsPage = () => {
  return (
    <main className={s.main}>
      <DocumentTitle>Our friends</DocumentTitle>
      <section className={s.section}>
        <Container className={s.friendsContainer}>
          <Title title="Our friends" />
          <FriendsList />
        </Container>
      </section>
    </main>
  );
};

export default OurFriendsPage;
