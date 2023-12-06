import './Profile.scss';


const Profile = () => {
    return(
        <div className='profile'>
            <div className='profile__progress'>
                <div className="profile__progress-bar"></div>
                <div className="profile__progress-position"> 
                    <div className='profile__progress-position-1'>
                        <p>1</p>
                    </div>
                    <div className='profile__progress-position-1-b'></div>
                    <div className='profile__progress-position-1-c'></div>
                    <div className='profile__progress-position-2'>
                        <p>2</p>
                    </div>
                    <div className='profile__progress-position-3'>
                        <p>3</p>
                    </div>
                    <div className='profile__progress-position-4'>
                        <p>4</p>
                    </div>
                    <div className='profile__progress-position-5'>
                        <p>5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;