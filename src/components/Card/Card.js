import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const handleClick = e => {
      e.preventDefault();
      dispatch(toggleCardFavourite(props.id));
    };
    const removeClick = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
      };

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button
                    onClick={handleClick}
                    className={clsx(styles.button, props.isFavourite && styles.isActive)}>
                <i className={clsx( !props.isFavourite && 'fa fa-star-o', props.isFavourite && 'fa fa-star')} />
                </button>
                <button onClick={removeClick } className={styles.button}>
                    <i className={styles.icon + ' fa fa-trash-o'} />
                </button>
            </div>
        </li>
    );
};
export default Card;