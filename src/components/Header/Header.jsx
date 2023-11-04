import BackButton from '../BackButton/BackButton';
import NavTitle from '../NavTitle/NavTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Header.scss';

const Header = () => {

    return (
        <div className='header'>
            <div className='header__top'>
                <div className='header__back'>
                    <BackButton/>
                </div>
                <div className='header__title'>
                    <NavTitle/>
                </div>
            </div>
            <div className='header__progress'>
                <ProgressBar/>
            </div>
        </div>
    )
}

export default Header;