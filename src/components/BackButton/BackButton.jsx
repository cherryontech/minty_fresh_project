import "./BackButton.scss"





const BackButton = () =>{
    return (
        <div>
            <button className="back__button">
                <image className="back__arrow" src='../../assets/icons/icon.png'alt='back button'></image>
            </button>
        </div>
    )
}

export default BackButton