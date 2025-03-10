import {DeleteObjectCommand, S3Client} from '@aws-sdk/client-s3'
import { AWS_ACCESS_KEY, AWS_BUCKET_NAME, AWS_REGION, AWS_SECRET_ACESSS_KEY, AWS_URL } from './secrets.js'
import {Upload} from '@aws-sdk/lib-storage'


const newClient = new S3Client({
    region: AWS_REGION,
    endpoint: AWS_URL,
    credentials:{
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_ACESSS_KEY,
    }
})

export const uploadFileS3 = async(key, buffer) =>{   //buffer - fienni codelangani   key- faylga nom berish
    try {
        const upload = new Upload({
            client: newClient,   //clientni shaxsini tasdiqlaydi
            params:{
                Bucket: AWS_BUCKET_NAME,
                Key: key,
                Body: buffer
            }
        })


        const data = await upload.done()
        if(data.$metadata.httpStatusCode === 200) {
            return data.Location
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteFileFromS3 = async (key) =>{
    try {
        const comand = new DeleteObjectCommand({
            Bucket: AWS_BUCKET_NAME,
            Key: key,
        })

        await newClient.send(command)

    } catch (error) {
        console.log("Error deleting file:", error);
        return false
    }
}