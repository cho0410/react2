import React from "react";

function Banner(props) {
  return (
    <div>
      <section
        id="bannerType"
        className={`banner__wrap ${props.skill[0]} ${props.skill[1]} ${props.skill[2]}`}
      >
        <h2 className="blind">배너 영역</h2>
        <div className="banner__inner">
          <h3 className="title">지금까지 기다려온 여행, 이제 떠나자!</h3>
          <p className="desc">#여유 #힐링 #낭만 #효도 #우정 #사랑</p>
          <span className="small"></span>
        </div>
      </section>
    </div>
  );
}

export default Banner;
