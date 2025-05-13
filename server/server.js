const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

app.post('/report', (req, res) => {
  const report = req.body;
  const timestamp = Date.now();

  const reportsDir = path.join(__dirname, 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  // Save image
  const imageName = `incident_${timestamp}.jpg`;
  const imagePath = path.join(reportsDir, imageName);
  const relativeImagePath = `reports/${imageName}`;

  const imageBuffer = Buffer.from(report.image, 'base64');
  fs.writeFileSync(imagePath, imageBuffer);

  // Prepare modified report object (excluding base64 image)
  const { image, ...rest } = report;
  const reportData = {
    ...rest,
    image: relativeImagePath,
  };

  // Save report
  const reportPath = path.join(reportsDir, `report_${timestamp}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));

  res.json({ message: '✅ Report saved successfully', imagePath: relativeImagePath });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://10.0.1.13:${PORT}`);
});
