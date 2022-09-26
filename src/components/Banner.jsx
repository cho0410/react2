import React from "react";

const desc = {
  title: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit."],
  desc: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
};

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <div className="banner__inner">
        <h3 className="title">{desc.title[0]}</h3>
        <p className="desc">{desc.desc[0]}</p>
      </div>
    </section>
  );
}

export default Banner;
