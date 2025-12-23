const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const filePath = path.resolve(__dirname, 'resume.html');
  await page.goto('file://' + filePath, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'Michael_Brazeau_Resume_2025.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
  });
  await browser.close();
  console.log('PDF generated: Michael_Brazeau_Resume_2025.pdf');
})(); 