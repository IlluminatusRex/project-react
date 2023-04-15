import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favourite = () => {
  return (
    <div className={styles.favourite}>
      <PageTitle 
        title={"Favourite"}
        subtitle={"Lorem Ipsum"}>
      </PageTitle>
    </div>
  );
};

  export default Favourite;