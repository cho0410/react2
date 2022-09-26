import React from "react";

function Footer(props) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${props.skill[0]} ${props.skill[1]} ${props.skill[2]}`}
    >
      <h2 className="blind">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div>
            <h3>site</h3>
            <ul></ul>
          </div>
          <div>
            <h3>header</h3>
            <ul></ul>
          </div>
          <div>
            <h3>slider</h3>
            <ul></ul>
          </div>
          <div>
            <h3>image</h3>
            <ul></ul>
          </div>
          <div>
            <h3>card</h3>
            <ul></ul>
          </div>
          <div>
            <h3>footer</h3>
            <ul></ul>
          </div>
        </div>
        <div className="footer__right">
          2022 cho-rong JO
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
