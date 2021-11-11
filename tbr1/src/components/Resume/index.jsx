import React from 'react'
import { ReactComponent as ResumeSvg } from "./resume.svg"
import useStyles from "./styles"


export default function Resume() {
  const classes = useStyles()
  return (
    <div className={classes.resume__wrapper}>
      <ResumeSvg className={classes.resume} />
    </div>
  )
}
