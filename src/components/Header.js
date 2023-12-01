import '../blocks/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__main background-image">
          <div className="header__main-text">
            <p className="header__text">Hello world!</p>
            <h1 className="header__heading-primary">I'm Svetlana Kovakina</h1>
            <h2 className="header__heading-secondary">Software Engineer</h2>
            <p className="header__text">
              I have dedicated my life to learning, exploring, and perfecting the digital experience. With a passion for innovation, I am constantly
              seeking out new challenges and exciting projects!
            </p>
            <p className="header__text">Check out my project below and get in touch!</p>
          </div>

          <div className="header__footer">
            <button className="header__button" href="mailto:skovakina@gmail.com">
              Contact me
            </button>
            <a className="header__link linkedin" href="https://www.linkedin.com/in/svetlana-kovakina-b196731b6/" target="_blank"></a>
            <a className="header__link github" href="https://github.com/SvetkaKo" target="_blank"></a>
          </div>
        </div>
        <div className="header__photo"></div>
      </div>
    </header>
  );
}
