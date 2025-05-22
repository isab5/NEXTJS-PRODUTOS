'use client';
import styles from './produtos.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Skeleton, Modal, Pagination } from 'antd';

export default function Produtos() {
    return (
        <div className={styles.produtos}>
            <Skeleton active />
        </div>
    );
}
