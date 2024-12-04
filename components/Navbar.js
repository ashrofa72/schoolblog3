import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { useUserAuth } from '../context/UserAuthContext';

const Navbar = () => {
  const { logOut, user } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <h1 style={{ color: 'white' }}>{user && user.email}</h1>
        <li className={styles.navbarItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/cloudupload">Upload</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/blogform">Create</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/blogs">Blogs</Link>
        </li>

        {!user && (
          <li className={styles.navbarItem}>
            <Link href="/login">Login</Link>
          </li>
        )}
        {user && (
          <li>
            <button style={{ color: 'white' }} onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
