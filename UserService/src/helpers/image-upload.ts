import { Filename } from "./../../node_modules/aws-sdk/clients/auditmanager.d";
import S3 from "aws-sdk/clients/s3.js";

const s3 = new S3({
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  accessKeyId: `${process.env.R2_ACCESS_KEY}`,
  secretAccessKey: `${process.env.R2_SECRET_ACCESS_KEY}`,
  signatureVersion: "v4",
});

const uploadToStorage = async ({
  filename,
  file,
}: {
  filename: string;
  file: any;
}) => {
  const { createReadStream, mimetype } = await file;

  const stream = await createReadStream();

  const params = {
    Bucket: `${process.env.R2_BUCKET_NAME}`,
    Key: filename,
    Body: stream,
    ContentType: mimetype,
  };
  return await s3
    .upload(params, function (s3Err: any, data: any) {
      if (s3Err) throw s3Err;
      return data;
    })
    .promise();
};

export { uploadToStorage };
