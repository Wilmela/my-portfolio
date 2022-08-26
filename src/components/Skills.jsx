import { backEnd, deployment, frontEnd } from '../data';

const Tech = ({ image }) => (
  <div id="skill" data-aos="fade-up">
    <div className="my-4 mr-4 border-none">
      <img src={image} alt="techs" width="45px" height="45px" />
    </div>
  </div>
);
function Skills() {
  return (
    <div
      id="skills"
      className="w-full flex flex-col items-start justify-start mt-2"
    >
      <h1 data-aos="fade-right" className="text-gradient font-semibold text-xl">Skills and Techs</h1>

      <div className="align-center md:w-full md:flex md:justify-start">
        <div className="md:mr-12">
          <p data-aos="fade-left" className="mt-4 text-blue">
            Front End:
          </p>
          <div className="flex flex-wrap">
            {frontEnd.map(({ id, image }) => (
              <Tech key={id} image={image} />
            ))}
          </div>
        </div>

        <div data-aos="fade-down" className="md:mr-12">
          <p className="mt-4 text-blue">Back End:</p>
          <div className="flex flex-wrap">
            {backEnd.map(({ id, image }) => (
              <Tech key={id} image={image} />
            ))}
          </div>
        </div>
        <div>
          <p data-aos="fade-right" className="mt-4 text-blue">
            Deployment Tools:
          </p>
          <div className="flex flex-wrap">
            {deployment.map(({ id, image }) => (
              <Tech key={id} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
