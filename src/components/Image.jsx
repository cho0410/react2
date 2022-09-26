import React from "react";

function Image(props) {
  return (
    <div>
      <section
        id="imageType"
        className={`image__wrap ${props.skill[0]} #{props.skill[1]}`}
      >
        <h2>지금 가장 핫한 여행지</h2>
        <p>가을에 떠나기 딱 좋은 유럽여행</p>
        <div className="image__inner container">
          <article className="image img1">
            <h3 className="image__title">이탈리아 8박 9일 완벽일주</h3>
            <p className="image__desc">[지중해투어+바티칸관광+2대야경]</p>
            <a className="image__btn" href="/">
              자세히 보기
            </a>
          </article>
          <article className="image img2">
            <h3 className="image__title">스페인 8박 9일 완벽일주</h3>
            <p className="image__desc">[세비야 대성당+메스키타+돈키호테]</p>
            <a className="image__btn yellow" href="/">
              자세히 보기
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Image;
