function downloadMusic() {
  var musicURL = "C:/Users/chefa/Downloads/Indru Netru Naalai - Hiphop Tamizha - Copy.mp3";
  var fileName = "song.mp3";
  
  var downloadedSongs = JSON.parse(localStorage.getItem("downloadedSongs")) || [];
  downloadedSongs.push({ name: fileName, url: musicURL });
  localStorage.setItem("downloadedSongs", JSON.stringify(downloadedSongs));

  updateDownloadSection();
}

function updateDownloadSection() {
  var downloadList = document.getElementById("download-list");
  var downloadedSongs = JSON.parse(localStorage.getItem("downloadedSongs")) || [];

  downloadList.innerHTML = "";

  downloadedSongs.forEach(function(song) {
    var listItem = document.createElement("li");
    listItem.innerHTML = '<a href="' + song.url + '" download>' + song.name + '</a>';
    downloadList.appendChild(listItem);
  });
}

updateDownloadSection();