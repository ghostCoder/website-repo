import {ASSETS} from './assets';
import downloader from 'zip-downloader';

const options = {
  downloadFileName: 'folder',
  statusCallback: (count)=> {
    console.log("downloaded: "+ count);
  },
  onComplete: (obj)=> {
    console.log(obj);
  },
};

document.getElementById("downloadBtn").addEventListener("click", downloader.bind(null, ASSETS, options));
