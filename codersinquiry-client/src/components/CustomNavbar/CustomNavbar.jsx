import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import times from '../../images/times.png';
import navbar from '../../images/navbar.png';
const customStyles = {
    content: {
        top: '53%',
        left: '155px',
        right: 'auto',
        width: '310px',
        height: '100vh',
        boxShadow: '6px 6px 12px gray',
        borderRadius: '8px',
        bottom: 'auto',
        // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const CustomNavbar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className='custom-navbar-container' >
                {' '}
                <button onClick={openModal} style={{border: 'none'}}>
                <img src={navbar} alt="" style={{width: '70px'}}/>
                </button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
                <div style={{ float: 'left', paddingBottom: '40px', paddingTop: '0' }}>
                    <button onClick={closeModal} style={{ border: 'none'}}>
                        <img src={times} alt="" style={{width: '35px', border: 'none'}} />
                    </button>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <form>
                        <Link to='/' className='text-decorations'>
                            <li className='common-feature'>Home</li>
                        </Link>
                        <Link to='/questions' className='text-decorations'>
                            <li className='common-feature'>Question</li>
                        </Link>
                        <Link to='' className='text-decorations'>
                            <li className='common-feature'>Tags</li>
                        </Link>
                        <Link to='' className='text-decorations'>
                            <li className='common-feature'>Articles</li>
                        </Link>
                        <Link to='/topLearners' className='text-decorations'>
                            <li className='common-feature'>Leaderboard</li>
                        </Link>
                        <Link to='' className='text-decorations'>
                            <li className='common-feature'>Code Playground</li>
                        </Link>
                        <Link className='text-decorations' style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link to="/login" className='common-feature'>LogIn</Link>
                            <Link to="/register" className='common-feature'>Register</Link>
                        </Link>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default CustomNavbar;
