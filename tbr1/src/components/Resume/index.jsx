import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { ReactComponent as ResumeSvg } from "./1.svg"
import { ReactComponent as ResumeSvg2 } from "./2.svg"
import useStyles from "./styles"
//

export default function Resume() {
  const [page, setPage] = React.useState(true)
  const classes = useStyles()
  return (
    <section id="contact" class="contact-section">
      <div class="contact-section-header" className={classes.resume__wrapper}>
        <h2>Click To See next page</h2>

        {page ? (
          <div >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setPage(false)}
            >
              <ResumeSvg className={classes.svg} />
            </Button>
          </div>
        ) : (
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setPage(true)}
            >
              <ResumeSvg2 className={classes.svg} />
            </Button>
          </div>
        )}

      </div>

    </section>

  )
}


