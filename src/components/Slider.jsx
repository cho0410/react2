import React from "react";

function Slider(props) {
  return (
    <div>
      <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
        <h2 className="blind">슬라이드 유형</h2>
        <div className="slider__inner">
          <div className="slider">
            <div className="slider__img">
              <div className="desc">
                <span>가장 힙하고, 아름답고, 신나는 여행</span>
                <h3>해외여행 BEST</h3>
                <p>
                  #여유로운 여행
                  <br />
                  #힐링
                </p>
                <div className="btn">
                  <a href="/">자세히</a>
                  <a href="/" className="black">
                    사이트
                  </a>
                </div>
              </div>
            </div>
            <div className="slider__arrow">
              <a href="/" className="left">
                <span className="ir">이전 이미지</span>
              </a>
              <a href="/" className="right">
                <span className="ir">다음 이미지</span>
              </a>
            </div>
            <div className="slider__dot">
              <a href="/" className="dot active">
                <span className="ir">1</span>
              </a>
              <a href="/" className="dot">
                <span className="ir">2</span>
              </a>
              <a href="/" className="dot">
                <span className="ir">3</span>
              </a>
              <a href="/" className="play">
                <span className="ir">플레이</span>
              </a>
              <a href="/" className="stop">
                <span className="ir">정지</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
