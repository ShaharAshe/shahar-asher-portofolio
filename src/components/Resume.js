import { pdfjs } from 'react-pdf';
import { useEffect } from 'react';
import PdfComp from './PdfComp';


const Resume = () => {
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();
      }, []);
    return (
        <>
        <PdfComp/>
        </>
    );
};

export default Resume;