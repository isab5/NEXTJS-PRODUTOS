import styles from "./home.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button"

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/image/Isabella.jpg"
                        alt="Profile Picture"
                        width={250}
                        height={250}
                        className={styles.profileImage}
                    />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <h1>Página Inicial</h1>
                        <p>Meu nome é Isabella Borin de Moraes Rosa, da Turma 2TDS1 do curso do SENAI de Valinhos-SP. Meus professores são o Marcelo Carboni e o Thiago Ferreira. </p>
                        <p>Esta é uma atividade avaliativa da matéria de Front-End, na qual será integrada uma API criada por mim, chamada "API PRODUTOS E VENDAS", ele possui um CRUD completo integrado ao banco de dados que contém duas entidades, produtos (Entidade 1) e vendas(Entidade 2), e pretende simular um sistema de gerenciamento de produtos e vendas. </p>
                    </div>
                    <Link href="/produtos">
                        <Button text="Acesse a API de produtos e vendas" styles={styles.button} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
