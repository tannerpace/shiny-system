import React from 'react'
import Button from '@material-ui/core/Button'
import { ReactComponent as ResumeSvg } from "./1.svg"

import useStyles from "./styles"
import { Box } from "@material-ui/core"
export default function Resume() {
  const [page, setPage] = React.useState(true)
  const classes = useStyles()
  return (
    <section id="contact" class="contact-section">
      <div class="contact-section-header" className={classes.resume__wrapper}>
    
          <Box marginTop={"70px"} >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setPage(false)}
            >
              <ResumeSvg className={classes.svg} />

            </Button>

          </Box>
     

      </div>

    </section>

  )
}


