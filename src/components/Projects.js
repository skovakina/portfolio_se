import '../blocks/Projects.css';
import img from '../images/music-app.png';

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <ul className="projects__container">
        <li className="projects__item projects__item_type_big">
          <div className="projects__item-text">
            <h3 className="project__item-heading">Heading</h3>
            <div className="project__item-tech">
              <ul className="project__tech-list">
                <li className="project__tech-item">item</li>
                <li className="project__tech-item">item</li>
                <li className="project__tech-item">item</li>
              </ul>
              <ul className="project__date">November 2023</ul>
            </div>
            <div className="project__description">I designed a platform from the ground up to help mentors and mentees find each other.</div>
          </div>
          <image className="project__image"></image>
        </li>
        <li className="projects__item projects__item_type_big"></li>
        <li className="projects__item projects__item_type_medium"></li>
      </ul>
    </section>
  );
}
