import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { Box } from '@mui/system'
import PhotoOfMe from '../PhotoOfMe';
const Welcome = [" Hello World!,\n my name is Tanner Bleakley.\nI am a full stack web developer. I have experience with, Javascript\nTypescript\nAngular React MaterialUI \Express\nAxios\nmySQL\nMongoDB The list is always growing! "];
const WelcomeSpeed = 30




const MyTyper = () => {

  const handleType = (count) => {
    // access word count number

  }


  const { text } = useTypewriter({
    words: Welcome, typeSpeed: WelcomeSpeed,
  })

  return (<>
    <div className='typer photo__of__me'>

      <div class="talk-bubble tri-right border round btm-right-in">
        <div class="talktext">
          <p>
            {text}
          </p>

        </div>

      </div>

    </div>

  </>
  )
}




export default MyTyper
