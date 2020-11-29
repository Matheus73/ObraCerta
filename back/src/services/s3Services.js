const {Buffer} = require('buffer')
const aws = require('aws-sdk')

function upload(base64img, s3Folder,imgName){
  const bufferedImg = Buffer.from(base64img, 'base64');

  aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION
  })
  const s3bucket = new aws.S3({
      params:{
        Bucket:'obracertaupload'
      }
    })
  
    const data = {
      Key: s3Folder+'/'+imgName+'.jpg',
      Body: bufferedImg,
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg',
      ACL: 'public-read'
    }

    return new Promise((resolve, reject)=>{
      s3bucket.putObject(data, (err)=>{
        if(err){
          reject(err);
        }else{
          resolve('https://obracertaupload.s3.amazonaws.com/'+ data.Key);
        }
      })
    })
}

module.exports = upload;