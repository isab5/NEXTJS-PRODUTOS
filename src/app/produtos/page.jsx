'use client';
import styles from './produtos.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Skeleton, Modal, Pagination } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image';

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY }; 

export default function Produtos() {
    const [data, setData] = useState({
        produtos: [],
        loading: true,
        current: 1,
        pageSize: 0,
    });

    const [modalInfo, setModalInfo] = useState({
        visible: false,
        produto: null,
        venda: null,
        loading: false,
    });

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const { data: produtos } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/produto`,
                { 
                    headers: HEADERS, 
                });
                setData({ produtos, loading: false, current: 1, pageSize: 5});
            } catch (error) {
                console.error("Erro ao buscar dados do produto", error);
                setData((d) => ({...d, loading: false}));
            }
        }
        fetchProdutos();
    }, []);

    const vendaModal = async (produto) => {
        setModalInfo({ visible: true, produto, venda: null, loading: true });
        try {
            const { data: venda } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/venda/${produto.id}`,
                {
                    headers: HEADERS,
                });
            setModalInfo({ ...m, venda, loading: false });
        } catch (error) {
            toast.error("Erro ao buscar dados da venda");
            setModalInfo((m) => ({ ...m, loading: false }));
        }
    };

    const paginaProdutos = () => {
        const start = (data.current - 1) * data.pageSize;
        return data.produtos.slice(start, start + data.pageSize);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Página de Produtos</h1>
            <Pagination
            current={data.current}
            pageSize={data.pageSize}
            total={data.produtos.length}
            onChange={(page, size) => {
                setData((d) => ({ ...d, current: page, pageSize:size }));
            }
        }
        showSizeChanger
        pageSizeOptions={["5", "10", "50"]}
            />
            {data.loading ? (
                    <Skeleton active />
            ) : (
                <div className={styles.cardContainer}> 
                {paginaProdutos().map((produto) => (
                    <Card 
                    key={produto.id}
                    className={styles.card}
                    onClick={() => vendaModal(produto)}
                    cover={
                        <Image
                        alt={produto.nome_produto}
                        src={produto.photo ? produto.photo : "/image/placehold.svg"}
                        width={200}
                        height={200}
                        />
                    }
                    />
                ))}
                </div>
            )}
        </div>
    );
}
