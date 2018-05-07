import zipDownloader from 'zip-downloader';
import {ASSETS} from './assets';

const downloadAssets = () => {
  try {
    const assetText = document.getElementById("assets").value,
      statusEl = document.getElementById("status");

    let assets = JSON.parse(assetText),
      assetCount = assets.length,
      options = {
        downloadFileName: 'folder',
        statusCallback: (count)=> {
          statusEl.innerHTML = `${(count * 100) / assetCount}%`;
        },
        onComplete: (obj)=> {
          statusEl.innerHTML = JSON.stringify(obj, null, 4);
        },
      };

    zipDownloader(assets, options);
  } catch (e) {
    alert("Invalid JSON")
  }

};

document.getElementById("downloadBtn").addEventListener("click", downloadAssets);
document.getElementById("assets").value = JSON.stringify(ASSETS, null, 4);
