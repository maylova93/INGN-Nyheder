import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/variables.scss';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/Vector.jpg';
import menuImage from '../../assets/images/menu.jpg'; 

export const Navbar = ( onCategorySelect ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const categories = [
        { name: 'Alle', path: '/' },
        { name: 'Indland', path: '/indland' },
        { name: 'Udland', path: '/udland' },
        { name: 'Teknologi', path: '/teknologi' },
        { name: 'Sport', path: '/sport' },
        { name: 'Politik', path: '/politik' },
        { name: 'Samfund', path: '/samfund' },
    ];

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoText}>INGN</div>

            <div className={styles.burgerMenu} onClick={handleMenuToggle}>
                <i className="fas fa-bars"></i>
            </div>

            <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
                {categories.map((category) => (
                    <li key={category.name}>
                        <NavLink 
                            to={category.path} 
                            className={styles.activeLink} 
                            onClick={() => onCategorySelect(category.name)} 
                        >
                            {category.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logoImage} />
            </div>
            <img src={menuImage} alt="Mobile Menu" className={styles.mobileMenuImage} />
        </nav>
    );
};
