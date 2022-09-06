import React from "react";

function card(props) {
  return (
    <section
      id="cardType"
      class={`card__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2>동남아 휴양지</h2>
      <p>보는것마다 놀랍고, 찍는것마다 작품이 되는곳</p>
      <div class="card__inner container">
        <article class="card">
          <figure class="card__header">
            <img src="../assets/img/card_bg01.jpg" alt="웹표준 사이트 만들기" />
          </figure>
          <div class="card__body">
            <h3 class="tit">보라카이 4일</h3>
            <p class="desc">#전신마사지 #세일링보트 #디몰</p>
            <a class="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article class="card">
          <figure class="card__header">
            <img src="../assets/img/card_bg02.jpg" alt="반응형 사이트 만들기" />
          </figure>
          <div class="card__body">
            <h3 class="tit">방콕/파타야 5박 6일</h3>
            <p class="desc">#가성비여행 #요트크루즈 #스노클링 #전통마사지</p>
            <a class="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article class="card">
          <figure class="card__header">
            <img
              src="../assets/img/card_bg03.jpg"
              alt="패랠렉스 사이트 만들기"
            />
          </figure>
          <div class="card__body">
            <h3 class="tit">코타키나발루 4박 5일</h3>
            <p class="desc">#아일랜드투어 #동굴액티비티 #전신마사지</p>
            <a class="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default card;
