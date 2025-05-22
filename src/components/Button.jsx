import styles from "../styles/Button.module.css";

export default function Button({ text, onClick }) {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button}>{text}</button>
        </div>
    )
}