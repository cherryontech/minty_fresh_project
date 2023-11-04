const PersonaName = () => {

    return (
        <div className='persona-container'>
            <h1>Let's start with a name</h1>

            <p>What's your name?</p>

            <input type='text' name='textbox' placeholder='Ex. Sasha Fierce'></input>

            <button type='button'>Next</button>
        </div>
    )
}

export default PersonaName;