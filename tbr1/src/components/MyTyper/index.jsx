import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { Box } from '@mui/system'
const Welcome = [" Welcome,\n my name is Tanner.\nI am a full stack web developer."]
const MsgArray2 = ["Javascript\nTypescript\nAngular\nBootstrap\nSCSS\nMONGO-DB\nJquery\nmySQL\n Lets work together! "];
const WelcomeSpeed = 100



const MyTyper = () => {

    const handleType = (count) => {
        // access word count number
        console.log(count)
    }


    const { text } = useTypewriter({
        words: Welcome, typeSpeed: WelcomeSpeed,
    })

    return (
        <div className='typer '>

            <div class="talk-bubble tri-right border round btm-left-in">
                <div class="talktext">
                    <p>
                        {text}
                    </p>
                </div>
            </div>

        </div>
    )
}




export default MyTyper