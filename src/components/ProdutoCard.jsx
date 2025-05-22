import styles from "../styles/ProdutoCard.module.css";
import Image from "next/image";
import Button from "./Button";
import placehold from "../../public/image/placehold.svg"

export default function ProdutoCard({ produto, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <Image
                src={produto.photo || placehold}
                alt={produto.nome}
                width={200}
                height={200}
                className={styles.image}
            />
            <h2 className={styles.title}>{produto.nome}</h2>
            <p className={styles.categoria}>{produto.categoria}</p>
            <p className={styles.preco}>{produto.preco}</p>
            <Button text="Ver Detalhes" />
        </div>
    );
}
