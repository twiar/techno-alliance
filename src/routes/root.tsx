import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <div className="head_line"></div>

        <div className="container">
          <div className="head_block"></div>

          <div className="head_menu">
            <div className="head_info">
              <a href="mailto:naftaeco.ic_36@mail.ru">naftaeco.ic_36@mail.ru</a>

              <p>+7 (473) 247-11-33</p>

              <a href="#call" className="butt">Заказать звонок</a>
            </div>
          </div>
        </div>
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}