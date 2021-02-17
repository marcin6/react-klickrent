import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import SuggestList from './SuggestList';

const Modal = ({ isShowing, hide, products, setSearch, error }) => isShowing ?
    <>
        <div className="modal-overlay" />
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-header">
                    <h3>Direct Request</h3>
                    <button type="button" className="modal-close-button" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-container">
                    <div className="modal-element">
                        {error === null
                            ? <Search setSearch={setSearch} />
                            : <div className="modal-element-empty">Service unavailable! Please try again later.</div>}
                        {error === null && (<SuggestList products={products} />)}
                    </div>
                </div>
            </div>
        </div>
    </> : null;

Modal.propTypes = {
    products: PropTypes.any,
    isShowing: PropTypes.bool,
    error: PropTypes.bool,
    setSearch: PropTypes.any
}

export default Modal;