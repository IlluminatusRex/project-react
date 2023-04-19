import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavouriteCard } from '../../redux/cardsRedux';

const Favourite = () => {
  const cards = useSelector(getFavouriteCard);

  if (cards.length === 0) {
    return (
      <div className={styles.favourite}>
        <PageTitle>No cards...</PageTitle>
      </div>
    );
  }

  return (
    <div>
      <PageTitle>Favourite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} isFavourite={card.isFavourite} id={card.id} />)}
        </ul>
      </div>
    </div>
  );
};

  export default Favourite;