document.addEventListener("DOMContentLoaded", function (e) {
  let configID = document.querySelector("#id i");
  let idText = document.querySelector("#id span");

  configID.addEventListener("click", function (e) {
    idText.textContent = prompt("새로운 아이디를 입력하세요 ✏️");
  });
  // querySelector를 활용해 요소를 뽑아와 변수에 할당
  let profileEditButton = document.querySelector("#profile_info button");
  let userInfo = document.querySelector("#userInfo");
  let summary = document.querySelector("#summary");
  let profileDetail = document.querySelector("#profileDetail");
  let changing = false; // 불리언 변수 만들기 (현재 프로필 수정이 진행 중인가를 메모하기 위해 만든 변수, 수정 모드 실행되면 true 종료되면 false로 바뀜)

  profileEditButton.addEventListener("click", function (e) {
    // 불리언 변수를 활용하여 조건문 작동
    if (changing) {
      // 정보 수정이 끝나서 프로필 편집 완료 버튼을 클릭하면 내용물 실행
      let _userInfo = userInfo.querySelector("input").value;
      let _summary = summary.querySelector("input").value;
      let _profileDetail = profileDetail.querySelector("input").value;

      userInfo.innerHTML = _userInfo;
      summary.innerHTML = _summary;

      if (_profileDetail.startsWith("http")) {
        // http로 시작되면 <a>태그로 하이퍼링크를 걸어주기 위해 삽입된 코드
        _profileDetail =
          "<a href=" + _profileDetail + ">" + _profileDetail + "</a>";
      }

      profileDetail.innerHTML = _profileDetail;

      e.target.textContent = "프로필 편집";
      changing = false; // 편집이 끝나면 내용물을 프로필 편집으로 되돌림
    } else {
      let _userInfo = userInfo.textContent;
      let _summary = summary.textContent;
      let _profileDetail = profileDetail.textContent;

      userInfo.innerHTML = "<input value=" + _userInfo + "></input>"; // innerHTML을 통해 태그 사이에 HTML 코드인 <input> 태그를 삽입
      summary.innerHTML = "<input value=" + _summary + "></input>";
      profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>";

      e.target.textContent = "프로필 편집 완료";
      changing = true;
    }

    let profile_pic = document.querySelector("#profile_pic.circle_pic");
    profile_pic.addEventListener("mouseover", function (e) {
      e.target.style.filter = "grayscale(50%)"; // 스타일 속성 변경 (색조 조절)
    });

    profile_pic.addEventListener("mouseleave", function (e) {
      e.target.style.filter = "grayscale(0%)";
    });

    profile_pic.addEventListener("click", function (e) {
      // 클릭 이벤트 처리
      profile_pic.setAttribute("src", prompt("이미지 url을 입력해 주세요 🥰"));
    });
  });
});
