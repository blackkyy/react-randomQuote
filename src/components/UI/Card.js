import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div id="quote-box" className={styles.card}>
      {props.children}
    </div>
  );
};

export default Card;
