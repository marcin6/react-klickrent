import React, { useEffect, useState } from 'react';
import useModal from '../hooks/useModal';
import Modal from './Modal';
import '../styles/Homepage.css';
import '../styles/Modal.css';

export const API_DATA = '../api/products/data.json';

export default function Homepage() {
    const { isShowing, toggle } = useModal();
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    const getProducts = async () => {
        await fetch(API_DATA)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(() => setError(true))
    }

    const filterProducts = () => {
        if (search.trim() !== '') {
            const copiedProduct = [...products];
            const filtered = copiedProduct.filter(product => {
                let searchKey = 'name';
                return typeof product[searchKey] === 'string' && product[searchKey].toLowerCase().includes(search.trim().toLowerCase());
            });
            setFilterProduct(filtered)
        } else {
            setFilterProduct('')
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        const handlerFilter = setTimeout(() => {
            filterProducts();
        }, 300)
        return () => { clearTimeout(handlerFilter) }
    }, [search])

    useEffect(() => {
        if (!isShowing) setFilterProduct('')
    }, [isShowing])

    return (
        <div className="homepage-container">
            <div className="homepage-header">
                <h3>klickrent</h3>
            </div>
            <div className="homepage-content">
                <button className="homepage-content-btn" onClick={toggle}>Start inquiry</button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    error={error}
                    products={filterProduct}
                    setSearch={e => setSearch(e.target.value)}
                />
            </div>
        </div>
    );
}
