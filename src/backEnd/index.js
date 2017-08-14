const express = require('express');
const PORT= process.env.PORT || 8079;


const app = express();
const routes = require('./routes.js');
app.use(express.static('public'));
app.use(routes);

//
//
// // Filesystem
// var fs = require('fs');
// //ImageMagick for image manipulation
// var im = require('imagemagick');
//
// // AWS SDK
// var AWS = require('aws-sdk');
//
// // eslint-disable-next-line
// AWS.config={
//   'accessKeyId': process.env.ACCESSKEYID,
//   'secretAccessKey': process.env.SECRETACCESSKEY,
//   'region': 'us-east-2'
// }
// ;
//
// //UUID
// // // eslint-disable-next-line
// // var uuid = require('node-uuid');
//
// //Moment for Date/Time
// // eslint-disable-next-line
// // var moment = require('moment');
//
// exports.upload = function (request,res) {
//
//     // Check if POST of GET
//   if (request.payload) {
//       // Set uploaded file(s)
//     var f = request.payload;
//     const type =f.fileToUpload.headers['content-type'];
//
//     if (
//         type!=='image/png'&&
//         type!=='image/jpg'&&
//         type!=='image/jpeg')
//     {
//       return res('File type not Allowed').code(401)
//     }
//     // Get path of uploaded file(s)
//     var path = f.fileToUpload.path;
//     // Get image name(s) of uploaded file(s)
//     var imageName = f.fileToUpload.filename
//     // Set path/file for thumbnail(s)
//     // eslint-disable-next-line
//     var thumbPath ='/tmp/thumbs_' + imageName;
//     // Read in file object
//     fs.readFile(path, function (err, data) {
//
//     /// Log an error
//       if(!imageName){
//         // eslint-disable-next-line no-console
//         console.log('read file error',err)
//       }
//       else {
//
//         // Use ImageMagick to copy/resize to a new thumbnail
//         fs.writeFile(path, data, function (err) {
//           if (err){
//           // eslint-disable-next-line no-console
//             console.log(err)
//           }
//           im.resize({
//             srcPath: path,
//             dstPath: thumbPath,
//             width:   80
//           }, function(err, stdout, stderr){
//             if (err) throw err;
//             // eslint-disable-next-line no-console
//             console.log('Resized');
//               // Upload thumbail to S3 buckets
//             var s3 = new AWS.S3();
//             fs.readFile(thumbPath, function(err, thumb_buffer){
//               if(err)
//                 {
//                   // eslint-disable-next-line no-console
//                 console.log('There was an error')
//               }
//               var params = {
//                 Bucket: 'foodappbucket1',
//                 Key: 'thumb_' + f.fileToUpload.filename,
//                 Body: thumb_buffer,
//                 ContentType: type,
//                 ACL:'public-read'
//               };
//
//               s3.putObject(params, function (perr, pres) {
//                 if (perr) {
//                   // eslint-disable-next-line no-console
//                   console.log('Error uploading data: ', perr);
//                 } else {
//                   // eslint-disable-next-line no-console
//                   console.log('Successfully uploaded thumb');
//                     // Delete the thumbnail file from server
//                   fs.unlink(thumbPath, function (err) {
//                     if (err) throw err;
//                     // eslint-disable-next-line no-console
//                     console.log('Successfully deleted ' + f.fileToUpload.path);
//                   });
//                 }
//               });
//             });
//           });
//         });
//       }
//     });
// // Upload original file to S3 bucket
//     var s3 = new AWS.S3();
//     fs.readFile(path, function(err, file_buffer){
//       var params = {
//         Bucket: 'foodappbucket1',
//         Key: f.fileToUpload.filename,
//         ContentType: type,
//         Body: file_buffer,
//         ACL:'public-read'
//       };
//
//       s3.putObject(params, function (perr, pres) {
//         if (perr) {
//           // eslint-disable-next-line no-console
//           console.log('Error uploading data: ', perr);
//         }
//         else {
//           // eslint-disable-next-line no-console
//           console.log('Successfully uploaded file');
//           // Delete the original file from  server
//           fs.unlink(path, function (err) {
//             if (err) throw err;
//             // eslint-disable-next-line no-console
//             console.log('Successfully deleted path: ' + f.fileToUpload.path);
//           });
//           // JSON return for JQuery Upload
//           res('{"files": [{ "name": "' + f.fileToUpload.filename + '","size": ' + f.fileToUpload.bytes + ',"url": "https:\/\/foodappbucket1.s3.amazonaws.com\/' + f.fileToUpload.filename + '","thumbnailUrl": "https:\/\/foodappbucket1.s3.amazonaws.com\/thumb_' + f.fileToUpload.filename + '","deleteUrl": "https:\/\/foodappbucket1.s3.amazonaws.com\/' + f.fileToUpload.filename + '","deleteType": "DELETE"}]}');
//         }
//       });
//     });
//
//   }
//   else {
//   // GET request reply
//     res('Ready');
//   }
// }
//



app.listen(PORT, () => {
  console.log('Our app is running on http://localhost:' + PORT); // eslint-disable-line no-console
});
