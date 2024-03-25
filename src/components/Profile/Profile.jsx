import styles from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img className={styles.image} src={image} alt={tag} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.cardBottom}>
        <li className={styles.stat}>
          <span className={styles.statTitle}>Followers</span>
          <span className={styles.statValue}>{stats.followers}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statTitle}>Views</span>
          <span className={styles.statValue}>{stats.views}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statTitle}>Likes</span>
          <span className={styles.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
