import React from 'react';
import userImg from '../../images/userImg.jpg';

const UserProfile = () => {
    return (
        <div className='userProfile'>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={userImg} alt="" className='w-100 img-fluid rounded-circle' />
                        <h4>Mustaque Nadim</h4>
                        <p>I'm a passionate programmer.</p>
                    </div>
                    <div className='col-md-9'></div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
