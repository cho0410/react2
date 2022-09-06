import React from "react";

function Text(props) {
  return (
    <div>
      <section
        id="textType"
        class={`text__wrap ${props.skill[0]} #{props.skill[1]}`}
      >
        <span></span>
        <h2 class="mb70">한번쯤 꼭 가봐야 할 세계여행 명소</h2>
        <div class="text__inner container">
          <div class="text t1">
            <h3 class="text__title">뉴질랜드 와이토모 동굴</h3>
            <p class="text__desc">
              와이토모 동굴은 뉴질랜드 북섬의 와이카토 지방에 있는 관광명소이다.
              개똥벌레의 일종인 ‘글로우웜’이 서식하고 있는 동굴로 동굴 아래
              냇물이 흐르고 있어 배를 타고 글로우 윔을 관광한다.
            </p>
            <a class="text__btn" href="/">
              더보기
            </a>
          </div>
          <div class="text t2">
            <h3 class="text__title">아이슬란드 스카프타펠</h3>
            <p class="text__desc">
              스카프타페틀은 아이슬란드 남동부에 위치한 자연보호 지역이다.
              원래는 국립공원이였으나, 2008년 이후로 바트나이외쿠틀 국립공원의
              일부가 되었다.
            </p>
            <a class="text__btn" href="/">
              더보기
            </a>
          </div>
          <div class="text t3">
            <h3 class="text__title">터키 파묵칼레</h3>
            <p class="text__desc">
              파묵칼레는 터키 남서부 데니즐리에 위치한 석회붕을 말한다.
              파묵칼레의 뜻은 튀르키예어로 파묵이 목화를 뜻하고 칼레는 성을
              뜻하므로 목화 성이란 뜻이다. 물속에는 석회 성분이 들어있어 피부에
              좋다.
            </p>
            <a class="text__btn" href="/">
              더보기
            </a>
          </div>
          <div class="text t4">
            <h3 class="text__title">몰디브 바드후섬</h3>
            <p class="text__desc">
              인구 500명의 작은 섬인 바드후섬에서는 별빛과 같은 푸른빛의
              바닷물을 볼 수 있습니다. 이러한 발광 현상은 파도가 해안에 밀려와서
              부딪힐 때 가해지는 충격으로 식물성 플랑크톤이 산소와 반응하여
              푸른빛을 내기 때문에 발생합니다
            </p>
            <a class="text__btn" href="/">
              더보기
            </a>
          </div>
          <div class="text t5">
            <h3 class="text__title">호주 힐리어 호수</h3>
            <p class="text__desc">
              호주 서부 해안에 위치한 호수로 길이 약 600미터, 폭은250미터입니다.
              호수에 서식하는 식물성 플랑크톤 '두날리엘라 살리나'가 에너지를
              발산한는 과정에 붉은 색소를 형성하여 핑크빛을 띄고 있습니다.
            </p>
            <a class="text__btn" href="/">
              더보기
            </a>
          </div>
          <div class="text t6">
            <h3 class="text__title">베트남 손둥 동굴</h3>
            <p class="text__desc">
              베트남 중부 라오스와의 접경지대인 퐁나케방 국립공원 안에 위치한
              세계 최대 규모의 동굴로 너비 200m, 높이 150m, 길이 9km에 달하는
              엄청난 크기를 자랑하고 있습니다.
            </p>
            <a class="text__btn" href="/">
              더보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Text;
