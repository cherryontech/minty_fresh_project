import './FeelingsPopup.scss';



const FeelingsPopup = ( {showFeelings, setshowFeelings}) =>{

    const handelHideModal = () => {
        setshowFeelings(false);
    };
    return(
        <div className='feelings'>
            <div className='feelings__card'>
            <div className='feelings__back'>
                <p onClick={handelHideModal}>Back</p>
            </div>
                <div className='feelings__title'>
                    <h2>Feelings List</h2>
                </div>
                <div className='feelings__emotions'>
                <div className='feelings__emotions-row' >
                        <div className='feelings__emotions-group'>
                            <div className='feelings__emotions-group-top' >
                                                                {/* <p>img</p> */}

                                <h3 className='feelings__emotions-title'> Angry </h3>
                            </div>
                            <ul className='feelings__emotions-sub'>
                                <li>Humiliated</li>
                                <li>Frustrated</li>
                                <li>Jealous</li>
                                <li>Infuriated</li>
                                <li>Indignant</li>
                                <li>Skeptical</li>
                            </ul>
                        </div>
                        <div className='feelings__emotions-group'>
                            <div className='feelings__emotions-group-top' >
                                                                {/* <p>img</p> */}

                                <h3 className='feelings__emotions-title'> Bad </h3>
                            </div>
                            <ul className='feelings__emotions-sub'>
                                <li>Stressed</li>
                                <li>Overwhelmed</li>
                                <li>Pressured</li>
                                <li>Unfocussed</li>
                                <li>Indifferent</li>
                                <li>Apathetic</li>
                            </ul>
                        </div>
                    </div>
                    <div className='feelings__emotions-row' >
                        <div className='feelings__emotions-group'>
                            <div className='feelings__emotions-group-top' >
                                                                {/* <p>img</p> */}

                                <h3 className='feelings__emotions-title'> Fearful </h3>
                            </div>
                            <ul className='feelings__emotions-sub'>
                                <li>Anxious</li>
                                <li>Insecure</li>
                                <li>Rejected</li>
                                <li>Inadequate</li>
                                <li>Scared</li>
                                <li>Worthless</li>
                            </ul>
                        </div>
                        <div className='feelings__emotions-group'>
                            <div className='feelings__emotions-group-top' >
                                                                {/* <p>img</p> */}

                                <h3 className='feelings__emotions-title'> Happy </h3>
                            </div>
                            <ul className='feelings__emotions-sub'>
                                <li className='feelings__emotion'>Optimistic</li>
                                <li>Powerful</li>
                                <li>Curious</li>
                                <li>Inspired</li>
                                <li>Proud</li>
                                <li>Courageous</li>
                            </ul>
                        </div>
                    </div>
                    <div className='feelings__emotions-row' >
                        <div className='feelings__emotions-group'>
                            <div className='feelings__emotions-group-top' >
                                                                {/* <p>img</p> */}

                                <h3 className='feelings__emotions-title'> Sad </h3>
                            </div>
                            <ul className='feelings__emotions-sub'>
                                <li>Vulnerable</li>
                                <li>Isolated</li>
                                <li>Inferior</li>
                                <li>Dissapointed</li>
                                <li>Powerless</li>
                                <li>Ashamed</li>
                            </ul>
                        </div>
                        <div className='feelings__emotions-group'>
                            <div className='feelings__emotions-group-top' >
                                {/*                                 {/* <p>img</p> */}
                                <h3 className='feelings__emotions-title'> Suprised </h3>
                            </div>
                            <ul className='feelings__emotions-sub'>
                                <li>Excited</li>
                                <li>Confused</li>
                                <li>Disillusioned</li>
                                <li>Egar</li>
                                <li>Energetic</li>
                                <li>Amazed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeelingsPopup;