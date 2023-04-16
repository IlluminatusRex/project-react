import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();

    const handleClick = e => {
      e.preventDefault();
      dispatch(toggleCardFavourite(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button
                    onClick={handleClick}
                    className={clsx(styles.button, props.isFavourite && styles.isActive)}>
                <i className={'fa fa-star-o'} />
                </button>
            </div>
        </li>
    );
};
export default Card;