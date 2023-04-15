import styles from './ErrorPage.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const ErrorPage = () => {
  return (
    <div className={styles.hero}>
      <PageTitle 
        title={"404 NOT FOUND"}
        subtitle={"Please verify the URL address."}>
      </PageTitle>
    </div>
  );
};

  export default ErrorPage;