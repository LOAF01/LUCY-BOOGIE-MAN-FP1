# 👻 LUCY BOOGIE MAN 웹사이트 Fan Project

## 개요
- 진행 기간: 2025/01/02 ~ 2025/01/13
- 사용 기술: React, JavaScript, HTML
- 사용 라이브러리: Howler
- 배포 플랫폼: GitHub Pages

## 프로젝트 소개
BAND LUCY의 6번째 싱글 앨범 BOOGIE MAN의 수록곡을 테마로 제작한 웹사이트입니다.
노래 Boogie Man의 가사 중
> 새빨간 열매와 까맣게 팔벌린 나무 날 보고 웃기만 해 왜
구절에서 영감을 받아, 웹에서 으스스한 느낌을 주는 글리치 효과 화면과
타자기 애니메이션을 활용해 일부 가사를 감상할 수 있도록 설계했습니다.

## 주요 기능
- 웹사이트 첫 방문 시 알림창을 통해 진행 방법과 권장 사항 제공.
- 사용자와의 상호작용에 따라 Boogie Man의 얼굴과 웃음소리를 통해 장면 전환.
- 웃음 소리는 [아티스트 라이브 방송](https://youtu.be/vccsGS_m-wc?si=bpmTWKU7BnYtyUJk)에서 편집해 사용했습니다.

## 시연
- 웹 링크 | [LUCY BOOGIE MAN 웹사이트](https://loaf01.github.io/LUCY-BOOGIE-MAN-FP1/)
- 시연 영상 | [Instagram 시연 영상](https://www.instagram.com/reel/DEwtXBUSOat/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D)
- 화면 자료 | 
> ![접속 화면](https://github.com/LOAF01/LUCY-BOOGIE-MAN-FP1/blob/main/landing_page.png)
> ![메인 화면](https://github.com/LOAF01/LUCY-BOOGIE-MAN-FP1/blob/main/main_page.png)

## 레포지토리
- GitHub | <https://github.com/LOAF01/LUCY-BOOGIE-MAN-FP1.git>

## 서비스 문서화 자료
- SE Source | [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/)
- Edit | BandLab

## 회고
### 주요 문제 해결 및 구현 방법
1. 이미지 드래그 및 잔상 문제 해결
  - opacity: 0 상태에서도 드래그되는 이미지의 문제를 해결하기 위해, addEventListener를 사용해 드래그, 선택, 우클릭 이벤트를 비활성화.

  ```const disableContextMenu = (e) => e.preventDefault();
  const disableSelectStart = (e) => e.preventDefault();
  const disableDragStart = (e) => e.preventDefault();

  document.body.addEventListener("contextmenu", disableContextMenu);
  document.body.addEventListener("selectstart", disableSelectStart);
  document.body.addEventListener("dragstart", disableDragStart);```

2. 커스텀 마우스 커서
  - CSS로 cursor 속성을 변경하여 이미지나 스타일을 지정.

  ```* {
      cursor: url('/public/img/c_default.png') 0 0, auto;
  }```

3. 효과음 구현
  - Howler 라이브러리를 사용하여 사운드 재생 및 관리.
  - Web Audio API 기반으로 크로스 브라우저 지원과 캐싱 기능을 제공.

4. 타이핑 효과 구현
  - React 상태 관리와 useEffect를 활용해 텍스트를 한 글자씩 출력.
  - 비동기 상태 업데이트 문제를 함수화하여 해결.

5. 글리치 효과
  - clip-path와 polygon을 활용해 랜덤 높이값으로 텍스트와 배경에 글리치 효과 적용.
  - setInterval을 사용해 동적으로 스타일 업데이트.

6. 페이지 구조화와 컴포넌트화
  - 기능별, 페이지별로 컴포넌트를 나누어 관리.
  - 프로젝트 확장성과 유지보수를 고려한 설계.

## 느낀 점
프로젝트 초기 계획을 세우는 것이 중요하며, 컴포넌트를 적절히 분리하여 개발을 진행하면 리팩토링 시간을 줄일 수 있음을 실감했다.
새로운 기능 구현 과정에서 많은 시행착오를 겪었지만, 그 과정에서 얻은 경험이 큰 도움이 되었다.
