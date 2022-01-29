import { Typography } from '@mui/material';
import { useTypewriter } from 'react-simple-typewriter'

const Welcome = [" Hello I am Tanner, a passionate full stack web developer!  "];
const WelcomeSpeed = 30




const MyTyper = () => {

  const { text } = useTypewriter({
    words: Welcome, typeSpeed: WelcomeSpeed,
  })

  return (<>
    <div className='typer photo__of__me'>

      <div class="talk-bubble tri-right border round btm-right-in">
        <div class="talktext">
          <p>
            <Typography style={{ fontSize: "2rem" }} >
              {text}
            </Typography>
          </p>


        </div>

      </div>
      {/* <a href='https://www.youtube.com/watch?v=2N6p5ztK9XA&list=PLj8SrFINJMkqqPLUi1tLMuiTVmgzJyCkT' target="_blank" rel="noopener noreferrer">  <div class="round-button">My Youtube</div></a> */}
    </div>

  </>
  )
}




export default MyTyper
