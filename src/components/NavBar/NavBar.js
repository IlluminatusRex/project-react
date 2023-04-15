import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <span className={styles.icon + ' fa fa-' + 'server'} />
      <ul className={styles.NavBarList}>
        <li><a href="/">Home</a></li>
        <li><a href="/favourite">Favourite</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
};

  export default NavBar;