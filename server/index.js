const express = require('express');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/fill-pdf', async (req, res) => {
  try {
    const formData = req.body;
    const filePath = path.join(__dirname, 'assets', 'pdf', 'wsib-form.pdf');
    const existingPdfBytes = fs.readFileSync('../public/wsib-form.pdf');
    
    const pdfDocument = await PDFDocument.load(existingPdfBytes,{ignoreEncryption:true});
    const form = pdfDocument.getForm();
    const fields = form.getFields();

    // Check if fields are found
    if (fields.length === 0) {
      throw new Error('No fields found in the form.');
    }

    // Log all field names to debug
    fields.forEach(field => {
      console.log(`Field name: ${field.getName()}`);
    });

    // Example of filling a field (Replace 'fieldName1' with actual field name in your PDF)
    if (formData.fieldName1) {
      form.getTextField('fieldName1').setText(formData.fieldName1);
    }

    // Fill other fields similarly...

    const pdfBytes = await pdfDocument.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfBytes);
  } catch (error) {
    console.error('Error filling the form:', error);
    res.status(500).send({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
