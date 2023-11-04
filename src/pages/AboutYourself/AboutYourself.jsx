// In V6, is the yellow background with text supposed to be an input field or just a long paragraph?

const AboutYourself = () => {

    return (
        <div>
            <h1>All done! Fantastic job, Sasha Fierce!</h1>

            <p>Based on your responses, here's a personalized answer to the question "Tell me about yourself."</p>

            <input type='text'>Big block of text with answers goes here.</input>
            
            <button type='button'>View your profile</button>

            <button type='button'>Redo questions</button>
        </div>
    )
}

export default AboutYourself;