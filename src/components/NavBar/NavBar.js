import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <span className={styles.icon + ' fa fa-' + 'server'} />
      <ul className={styles.NavBarList}>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favourite">Favourite</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
      </ul>
    </div>
  );
};

  export default NavBar;