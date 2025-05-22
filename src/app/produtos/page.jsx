'use client';
import styles from './produtos.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton, Modal, Pagination } from 'antd';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY }; 

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/produtos`, { headers: HEADERS });
                setProdutos(response.data);
            } catch (error) {
                toast.error("Erro ao buscar produtos");
            }
        }
        fetchProdutos();
    }, []);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Página de Produtos</h1>
            <Skeleton active />
        </div>
    );
}
