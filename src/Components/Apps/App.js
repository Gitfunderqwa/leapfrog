import React from 'react';
import './App.css';
import {jsPDF} from 'jspdf'
import {PDFObject} from 'pdfobject'

import Input from '../inputs/input'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyTitle: '',
      squareMeter: 0,
      rate: 0,
      address: '',
      avgPriceSquareMeter: 0,
      historyPuchase: 0,
      SbMinVal: 0,
      SbMaxVal: 0, 
      FNBVal: 0,
  }

  }
  buildpdf(term) {
    
    const doc = new jsPDF();

    doc.addImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAGACAMAAAAd7860AAADAFBMVEW70je70ji50TIZFxi70ja60TS80jb///////4bGRm60je60TO60jW+1Te50TG80zcYFRcYFhkaGBi80zb///660TW50DD6++2+1D8WExW91TW91DfJ2179/fbF2FfB2Ta40C4SDxUSDxcbGhm90zsUERbA2De91D3+/voWFBa/1za+1jq91Dn9/vjA2DW70za/1EK/1jX099weHCG50TP///z8/fTi66f5+ujA1UbA1URqc0cWFBm60jS1yj7B2D260TcjIiTu88rD10wcGxzC2jfR4He3zT/N3Gm+1TXI2l0UEhm40Cy50DHo77kXFRxXXT/D101PVD7A1znw9dLL3GX6/O+80jna5ZHO3m3K22L///0ZFxyQnkTf6Z9TWCvE11DC1kq70zfz9th+ikQPDBX3+eb2+OG70TUkIx9NUS49QDLj7KsMCBX3+eTX5Im80ju60TogHh7H2Vi60D0oKCnF2FTl7a/U4oD1+N/W44SuwUEgHyLr8cHx9dPz99ucrUEvMCnv9M3b5pPq8b/o77bP3nHh6qPE3TfQ33RwekPS4Hr8/PL7/PDy9tXp8Lzt8sfc55awxT670Tc2OC0zNCzH2lvw9NCnuzbC2jrZ5Y35+usbGR+50Dm81Dbe6Jzs8cSdrkpTWT7m7rP9/fS81DfB1Ui0yEDT4X3d6JmqvUIsLCpAQzCnukC3zTmUo0K0yTp7hkCCjkayxkJAQicsLCSJlke70EAmJSR7h0VQVy2LmzWfsENITTVOUze80jiNm0OYqEAoKSFgZzqNm0qis0VbYj93gUAwMR9ocEB5hD+ToklERzd3gke90z9zfUSlt0RjbDyXqDZXXzFUWjmGk0RbYjc6PDB2fzSEkUpqczioukZkbEOXp0eGkz5GSi+hsz2bq0Z+ij+50TSswTp/jC2RojNhaEJtdz5UWjSTojydrzpLTzw8PilFSiSluTaktkCJl0Bwezw4OyVgai+Bjj5tdUU0NiHH4DiFkzF9iDhaYij//v9WXCbM5TlOVClcEPF1AAAgAElEQVR42uxaXUsqXRueGdY44gxzNlMHGh4EeiJIWLsETwxEIjcEj9tMECWoDqIEwSyoIMuITIvAIA8K2kT+iv6Bf2L/jffgve81H85o+3me98Tt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', 'JPEG', 50 ,70, 100, 126.32)
    doc.text(`Compiled by Paula Katzke`, 70, 220)
    doc.setFillColor(187,210,55);
    doc.rect(20, 270, 150, 20, "F");
    doc.setFontSize(24)
    doc.setTextColor('white')
    doc.text(`Market Evaluation Calculation`, 35, 283)
    doc.setTextColor('black')
    doc.addPage('a4', 'p')
    doc.setFontSize(20)
    doc.text("Index", 20, 40)
    doc.setLineWidth(0.3);
    doc.line(20, 43, 150, 43);
    doc.setFontSize(12)
    doc.text("1.  Square meter and time value calculation according to Lightstone.", 20, 50)
    doc.text("2.  Standard Bank and FNB desktop evaluation", 20, 55)
    doc.text("3.  Final market evaluation", 20, 60)

    doc.setFillColor(187,210,55);
    doc.rect(20, 270, 150, 20, "F");
    doc.setFontSize(24)
    doc.setTextColor('white')
    doc.text(`${term.address}`, 35, 283)
    doc.setTextColor('black')
    doc.addPage('a4', 'p')
    // This is for the Square Meter Evaluation
    doc.setFontSize(20)
    doc.text("Square Meter Evaluation", 20, 30)
    doc.setLineWidth(0.3);
    doc.line(20, 33, 150, 33);
    doc.setFontSize(15)
    doc.text("Calculations", 20, 40)
    doc.setFontSize(12)
    doc.text(`Average sale price per m² based on sales in the ${term.propertyTitle} over the past year as per Lightstone.`, 20, 50)
    doc.setFontSize(15)
    doc.text(`R${term.avgPriceSquareMeter} per m²`, 20, 60);
    doc.setFontSize(12)
    doc.text(`${term.address} is a ${term.squareMeter}m² unit, therefore based on the above calculation \nthe estimated market value is calculated at:`, 20, 70)
    doc.setFontSize(24)
    doc.text(`R${(term.squareMeter*term.avgPriceSquareMeter)}`, 20, 90)
    doc.setFontSize(10)
    doc.text(`(R${term.avgPriceSquareMeter} x ${term.squareMeter}m²)`, 20, 97)

    // This is for the Time Value Evaluation
    doc.setFontSize(20)
    doc.text("Time Value Evaluation", 20, 120)
    doc.setLineWidth(0.3);
    doc.line(20, 123, 150, 123);
    doc.setFontSize(15)
    doc.text("Calculations", 20, 130)
    doc.setFontSize(12)
    doc.text(`Percentage growth of sales in the area since the time of purchase.
Average growth in the area between 2015 and 2020 was calculated at 14% 
Which is a 2.75% average growth per year.`, 20, 140)

    doc.text(`The unit was bought in 2014 for R 980 000 x 16.5%(6 years x 2.75%)`, 20, 170)

    doc.setFontSize(24)
    doc.text(`R${term.historyPuchase}`, 20, 185)
    
    doc.setFillColor(187,210,55);
    doc.rect(20, 270, 150, 20, "F");
    doc.setFontSize(24)
    doc.setTextColor('white')
    doc.text(`${term.address}`, 35, 283)
    doc.setTextColor('black')

    doc.addPage('a4', 'p')
    doc.setFontSize(20)
    doc.text("Bank Desktop Evaluation", 20, 30)
    doc.setLineWidth(0.3);
    doc.line(20, 33, 150, 33);
    doc.setFontSize(15)
    doc.text("Standard Bank", 20, 40)
    doc.setFontSize(12)
    doc.text(`Property minimun estimated evaluation`, 20, 50)
    doc.text(`-R${term.SbMinVal}`, 125, 50)
    doc.text(`Property maximum estimated evaluation`, 20, 60)
    doc.text(`-R${term.SbMaxVal}`, 125, 60)
    doc.text(`Property estimated value as determined by Standard Bank`, 20, 70)
    doc.setFontSize(20)
    doc.text(`-R${(term.SbMaxVal+term.SbMinVal)/2}`, 20, 80)

    doc.setFontSize(15)
    doc.text("First National Bank", 20, 100)
    doc.setFontSize(12)
    doc.text(`FNB Desktop Evaluation`, 20, 110)
    doc.text(`-R${term.FNBVal}`, 125, 110)

    doc.setFillColor(187,210,55);
    doc.rect(20, 270, 150, 20, "F");
    doc.setFontSize(24)
    doc.setTextColor('white')
    doc.text(`${term.address}`, 35, 283)
    doc.setTextColor('black')

    doc.addPage('a4', 'p')
    doc.setFontSize(20)
    doc.text("Final Market Evaluation", 20, 50)
    doc.setLineWidth(0.3);
    doc.line(20, 53, 150, 53);
    doc.setFontSize(12)
    doc.text(`Please note that the above estimates are purely market based evaluations. It does not
take into account any reparations, improvements or additions that might increase the
value of your property. The value of your property can only be accurately determined
by a Professional Property Valuator. `, 20, 60)


    doc.text(`Square Meters`, 20, 88)
    doc.text(`-R${term.squareMeter*term.avgPriceSquareMeter}`, 125, 88)
    doc.text(`Standard Bank Desktop evaluation`, 20, 96)
    doc.text(`-R${(term.SbMaxVal+term.SbMinVal)/2}`, 125, 96)
    doc.text(`FNB Desktop Evaluation`, 20, 104)
    doc.text(`-R${term.FNBVal}`, 125, 104)
    doc.text(`Time Value evaluation`, 20, 112)
    doc.text(`-R${(term.SbMaxVal+term.SbMinVal)/2}`, 125, 112)
    doc.text(`Average listing price for similar units`, 20, 120)
    doc.text(`-R${(term.SbMaxVal+term.SbMinVal)/2}`, 125, 120)

    doc.text(`Final market evaluation based on the figures above and current listings:`, 20, 130)
    doc.setFontSize(20)
    doc.text(`R1 400 000`, 20, 145)
    doc.setFontSize(12)
    doc.text(`If you have any questions regarding the market based evaluation report, please feel
free to contact us.`, 20, 160)
    // doc.save(`${term.squareMeter}.pdf`);

    var string = doc.output('datauristring');
    var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
    var x = window.open();
    x.document.open();
    x.document.write(embed);
    x.document.close();
  }
  
  render() {
    return (
      <div>
        <h1>Please fill in the following</h1>
        <Input onBuildpdf={this.buildpdf}/>
      </div>
      
    );
  }

  
}

export default App;
