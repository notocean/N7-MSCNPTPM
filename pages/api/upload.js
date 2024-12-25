import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';

const uploadDir = path.join(process.cwd(), 'public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = (req, res) => {
  const form = new IncomingForm();
  
  form.uploadDir = uploadDir; 
  form.keepExtensions = true; 
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Something went wrong' });
    }

    const filePath = `/uploads/${files.image[0].newFilename}`;
    res.status(200).json({ filePath });
  });
};

export default handler;
