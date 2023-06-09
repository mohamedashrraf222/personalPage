import "../styles/projectComp.css";

const project = ({ data, className,type }) => {
  if (data.type == type) {
    return (
      <div className={`project-card ${className}`}>
        <div className="dataContainer">
          <img src={data.pic} alt={data.name} />
          <h1>{data.name}</h1>
          <p>{data.descreption}</p>
          <div className="projectSkills">
            {data.skills ? data.skills.map( skillPath => {
              return <img className="projectSkill"
              src={skillPath}
            />
            } ):""}
          </div>
          <hr />
          <div className="allLinks">
            <a href={data.demo} target="_blank">
              <i className="fas fa-external-link-alt"></i> Live demo project
            </a>
            {data.github && (
              <a href={data.github} target="_blank">
                <i className="fab fa-github"></i> Github Repository
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default project;
