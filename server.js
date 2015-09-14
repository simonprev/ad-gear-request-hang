const request = require('request');
const fs = require('graceful-fs');

const url = 'http://api.admin.adgear.com/uploads.xml';
const formData = {Filedata: fs.createReadStream('m.jpg')};
const auth =  {
  user: process.env['AD_GEAR_USER'],
  pass: process.env['AD_GEAR_PASSWORD'],
  sendImmediately: false
}

console.log('Making upload request on:', url);
console.log('With auth:', auth.user, auth.pass);
console.log('With form data:', formData);

console.log('Executing...');
request.post({url, formData, auth},
  function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
  });
