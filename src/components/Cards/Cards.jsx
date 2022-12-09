import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
    const { characters } = props;

    return (
        <div className={styles.contenedor}>
            {characters.length ? (
                characters.map((element) => (
                    <Card
                        key={element.id}
                        {...element}
                        onClose={props.onClose}
                        id={element.id}
                    />
                ))
            ) : (
                <div className={styles.initialMessage}>
                    <p>Please add a character by ID or by the ramdom button</p>
                </div>
            )}
        </div>
    );
}
