import React from 'react'
import Button from '@material-ui/core/Button'
import { ReactComponent as ResumeSvg } from "./1.svg"

import useStyles from "./styles"
import { Box } from "@material-ui/core"
export default function Resume() {
  const [page, setPage] = React.useState(true)
  const classes = useStyles()
  // a function to send an email to the user

  

  
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/tannerbleakley/")
  }

  


  return (
    <section id="contact" class="contact-section">
      <div class="contact-section-header" className={classes.resume__wrapper}>
    
          <Box marginTop={"170px"} >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleClick}
            >
              <ResumeSvg className={classes.svg} />

            </Button>

          </Box>
     

      </div>

    </section>

  )
}


