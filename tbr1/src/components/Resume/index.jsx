import React from 'react'
import Button from '@material-ui/core/Button'
import { ReactComponent as ResumeSvg } from "./1.svg"

import useStyles from "./styles"

import PdfResume from './PDF'
export default function Resume() {
  const [page, setPage] = React.useState(true)
  const classes = useStyles()
  return (
  
   
    
           
              <PdfResume  />

        

     





  )
}


