const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const path = require('path');
const { v4:uuidv4 } = require('uuid');

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..' , 'static', 'uploads'));
    },
    filename: (req, file, callback) => {
      file.key = `${uuidv4()}-${file.originalname}`;
      return callback(null, file.key);
    },
  }),

  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'obracertaupload',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl:'public-read',
    key: (req, file, callback) => {
      const fileName = `${uuidv4()}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
}

const upload = multer({ 
  dest: path.resolve(__dirname, '..', '..' ,  'static', 'uploads'),
  storage: storageTypes[process.env.MULTER_CONFIG],
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Tipo de arquivo inválido\nEnvie arquivos do tipo: png, pjpeg, jpeg ou gif"));
    }

  },
})

module.exports = upload