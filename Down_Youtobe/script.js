
        document.getElementById('btnPaste').addEventListener('click', function() {
            navigator.clipboard.readText()
                .then(text => {
                    document.getElementById('linkInput').value = text;
                })
                .catch(err => {
                    console.error('Failed to read clipboard contents: ', err);
                });
        });
   



        function getVideoInfo() {
            var linkInput = document.getElementById('linkInput').value;
            var url = new URL(linkInput);
            var videoId = url.searchParams.get('v');
            var videoInfoUrl = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + videoId + '&format=json';

            fetch(videoInfoUrl)
                .then(response => response.json())
                .then(data => {
                    var videoInfo = document.getElementById('videoInfo');
                    videoInfo.innerHTML = `
                        <div class="info">
                        <img src="${data.thumbnail_url}" alt="Video thumbnail">
                        <div class="title_info">
                        <h2>${data.title}</h2>
                        <p></strong> ${data.author_name}</p>
                        <button class="btn btn-primary down" type="button" id="btnDownload" onclick="#">Tải xuống</button>
                        </div>                       
                        </div>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching video info:', error);
                });
        }