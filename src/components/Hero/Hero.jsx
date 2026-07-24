import { Link } from "react-router";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.homeHero}>
      <div className={styles.homeHeroCover}>
        <img
          className={styles.homeHeroCoverImage}
          src="/undraw_happy-customer_4h84.png"
          alt="undraw happy customer"
        />
      </div>
      <div className={styles.homeHeroContent}>
        <h2 className={styles.homeHeroContentTitle}>New Summer, New You!</h2>
        <p className={styles.homeHeroContentLeading}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          repudiandae perferendis tempora iste beatae consequuntur perspiciatis
          aperiam dolore quis cupiditate.
        </p>
        <Link to="/shop">
          <button className={styles.buttonPrimary}>Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
