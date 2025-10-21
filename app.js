// 클라이언트 측 JavaScript (GitHub Pages에서 실행)

async function searchYouTube(searchTerm) {
  // **주의: YouTube API 주소가 아니라, Netlify Function 주소를 호출합니다.**
  // Netlify Function 주소는 보통 /.netlify/functions/함수파일명 입니다.
  const functionUrl = `https://yotube-iftype.netlify.app/.netlify/functions/youtube-search?query=${searchTerm}`;

  try {
    const response = await fetch(functionUrl);

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }

    const videos = await response.json();

    // 이 'videos' 배열을 사용하여 UI를 렌더링합니다.
    console.log("검색된 영상 목록:", videos);
    renderVideos(videos); // 영상 결과를 화면에 표시하는 함수
  } catch (error) {
    console.error("데이터를 가져오는 중 오류 발생:", error);
    alert("검색 데이터를 불러오지 못했습니다.");
  }
}
document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;
  searchYouTube(query);
});
