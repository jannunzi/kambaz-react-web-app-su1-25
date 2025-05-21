export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <div
          className="wd-float-left wd-dimension-portrait
                          wd-bg-color-yellow"
        >
          Yellow{" "}
        </div>
        <div
          className="wd-float-left wd-dimension-portrait
                          wd-bg-color-blue wd-fg-color-white"
        >
          Blue{" "}
        </div>
        <div
          className="wd-float-left wd-dimension-portrait
                          wd-bg-color-red"
        >
          Red{" "}
        </div>
        <img
          className="wd-float-right"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <div className="wd-float-done"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
        <div id="wd-css-grid-layout">
          <div id="wd-css-left-right-layout">
            <h2>Grid layout</h2>
            <div className="wd-grid-row">
              <div
                className="wd-grid-col-half-page
                      wd-bg-color-yellow"
              >
                <h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, modi laborum? Minus pariatur cumque eaque doloribus
                  accusamus dolore eius quod perspiciatis? Quibusdam iure est
                  eos quod quae commodi minus voluptate!
                </h3>
              </div>
              <div
                className="wd-grid-col-half-page
           wd-bg-color-blue wd-fg-color-white"
              >
                <h3>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta, ducimus itaque accusantium voluptatem laborum vitae ab
                  quaerat consectetur maxime! Natus sapiente quas, temporibus
                  voluptatibus aliquam aperiam animi harum eum qui?
                </h3>
              </div>
            </div>
          </div>
          <div className="wd-grid-row">
            <div
              className="wd-grid-col-third-page
         wd-bg-color-green wd-fg-color-white"
            >
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                sint amet architecto molestias culpa neque ea eum optio! Tempore
                magni amet fugiat dolor similique culpa alias, dolores nostrum
                numquam. Obcaecati.
              </h3>
            </div>
            <div
              className="wd-grid-col-two-thirds-page
         wd-bg-color-red wd-fg-color-white"
            >
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                officiis. Nam adipisci architecto maiores molestias porro magni
                consequatur soluta corrupti vero dolorem quia nihil, tempora
                quis, ab quibusdam, esse facilis?
              </h3>
            </div>
          </div>
          <div className="wd-grid-row">
            <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
              <h3>Side bar</h3>
              <p>This is the left sidebar</p>
            </div>
            <div
              className="wd-grid-col-main-content
         wd-bg-color-blue wd-fg-color-white"
            >
              <h3>Main content</h3>
              <p>
                {" "}
                This is the main content. This is the main content. This is the
                main content.{" "}
              </p>
            </div>
            <div
              className="wd-grid-col-right-sidebar
         wd-bg-color-green wd-fg-color-white"
            >
              <h3>Side bar</h3>
              <p>This is the right sidebar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
