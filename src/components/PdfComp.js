import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../resources/CV - Shahar Asher.pdf';
import '../css/style.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function PdfComp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1);
  }

  return (
    <>
        <div className="pdf-container">
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            </Document>
            <div className="navigation-buttons">
                <button disabled={pageNumber <= 1} onClick={goToPrevPage} className="pdf-nav-button">
                    Previous
                </button>
                <button disabled={pageNumber >= numPages} onClick={goToNextPage} className="pdf-nav-button">
                    Next
                </button>
                <a href={pdf} download="CV - Shahar Asher.pdf" className="pdf-nav-button download-button">
                    Download PDF
                </a>
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="pdf-nav-button open-button">
                    Open PDF
                </a>
            </div>
        </div>
    </>
  );
}

export default PdfComp;
