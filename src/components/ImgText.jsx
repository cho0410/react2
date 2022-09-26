import React from "react";

function ImgText(props) {
  return (
    <div>
      <section
        id="imgTextType"
        className={`imgText__wrap ${props.skill[0]} ${props.skill[1]} ${props.skill[2]}`}
      >
        <h2 className="blind">이미지 텍스트 유형</h2>
        <div className="imgText__inner container">
          <div className="imgText__txt">
            <span className="small"></span>
            <h3 className="title">HOT 키워드</h3>
            <p className="desc">특별한 키워드를 담은 여행들을 소개합니다.</p>
            <ul className="list">
              <li>
                <a href="/">#보라카이</a>
              </li>
              <li>
                <a href="/">#방콕</a>
              </li>
              <li>
                <a href="/">#코타키나발루</a>
              </li>
              <li>
                <a href="/">#싱가포르</a>
              </li>
              <li>
                <a href="/">#푸켓</a>
              </li>
              <li>
                <a href="/">#몰디브</a>
              </li>
            </ul>
          </div>
          <div className="imgText__img img1">
            <a href="/">자세히 보기</a>
          </div>
          <div className="imgText__img img2">
            <a href="/" className="blue">
              자세히 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImgText;
