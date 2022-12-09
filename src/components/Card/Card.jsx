import styles from "./Card.module.css";
import { Link } from "react-router-dom";

// export default function Card(props) {
//     return (
//         <div className={styles.contenedor}>
//             <button
//                 className={styles.button}
//                 onClick={props.onClose}
//                 id={props.id}>
//                 X
//             </button>
//             <div className={styles.contenedorImgInfo}>
//                 <img
//                     className={styles.img}
//                     src={props.image}
//                     alt=""
//                 />
//                 <div className={styles.divInfo}>
//                     <Link to={`/detail/${props.id}`}>
//                         <h2>{props.name}</h2>
//                     </Link>
//                     <h2>{props.species}</h2>
//                     <h2>{props.gender}</h2>
//                 </div>
//             </div>
//         </div>
//     );
// }

const Card = (props) => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.contenedorNameButton}>
                <h2>{props.name}</h2>
                <button
                    className={styles.button}
                    onClick={props.onClose}
                    id={props.id}>
                    X
                </button>
            </div>
            <Link to={`/detail/${props.id}`}>
                <img
                    className={styles.img}
                    src={props.image}
                    alt=""
                />
            </Link>
        </div>
    );
};

export default Card;
