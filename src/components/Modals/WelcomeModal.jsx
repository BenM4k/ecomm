import React from 'react';
import { useSelector } from 'react-redux';

const WelcomeModal = () => {
    const { welcomeModal } = useSelector((store) => store.modal);
    console.log(welcomeModal)
    const user = "Ben";
    return (
        <>
            {welcomeModal && (
                <div className='backdrop'>
                    <div className="welcome-modal flex-center">
                        <h1>welcome {user}</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default WelcomeModal;