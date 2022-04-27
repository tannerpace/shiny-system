
import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import pdfRes from './pdfRes.pdf'

export default function PdfResume() {

  return (
    <PDFViewer 
    width={'100%'}
    height={'100%'}
    > 
        <embed src={pdfRes.pdf} type="application/pdf" width="100%" height="100%" />
    </PDFViewer>
  );
}

