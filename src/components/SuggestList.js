import React from 'react';
import '../styles/SuggestList.css';

export default function SuggestList({ products }) {
    return (
        <div className="suggestlist-container">
            {products && products.map((product) =>
                <div key={product.groupId} className="suggestlist-element">
                    <div className="suggestlist-category"><span>Category</span>&nbsp;{product.name}</div>
                    <div className="suggestlist-product">
                        <ul>
                            {product.products.map((item) =>
                                <li key={item.typeId}>{item.name}</li>
                                 )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

