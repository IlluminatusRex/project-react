import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import Lists from '../Lists/Lists';
import { useDispatch } from 'react-redux'
import { updateSearch } from '../../redux/store';
import ListForm from '../ListForm/ListForm';

const Home = props => {
  const dispatch = useDispatch();
  dispatch(updateSearch(''));
  return (
    <div className={styles.hero}>
        <Hero />
        <Lists />
        <ListForm />
    </div>
  );
};

  export default Home;