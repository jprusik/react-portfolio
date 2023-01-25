import data from './content/data.json';
import {
  Project,
  TimelineActionType,
  TimelineDataType
} from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TypedList } from './TypedList';
import './ProjectSummary.scss';

type ProjectSummaryProps = {
  project: Project;
  updateDisplayFilter: (
    actionType: TimelineActionType,
    dataType: TimelineDataType,
    id: string
  ) => void;
}

export function ProjectSummary (
  {project, updateDisplayFilter}: ProjectSummaryProps
): JSX.Element {
  const projectTech = project.technologies.reduce((
    technologyNames: string[],
    techKey: string
  ): string[] => {
    const techByKey = data.technologies.find(techItem => techItem.id === techKey);

    return techByKey?.name ?
      [...technologyNames, techByKey.name] : technologyNames;
  }, []);

  return (
    <div key={project.id} className={`org-project ${project.id}`}>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="remove-button print-hide"
        onClick={() => updateDisplayFilter(
          TimelineActionType.ADD,
          TimelineDataType.PROJECTS,
          project.id
        )}
      />
      <div className="title-section">
        <div className="title">
          <h4>{ project.name }</h4>
          <ProjectAudienceDescription
            audience={project.audience}
            isOpenSource={project.openSource}
          />
        </div>
        {project.year && (
          <div className="year">{ project.year }</div>
        )}
        {project.teamSize && (
          <TeamSizeDescription teamSize={project.teamSize} />
        )}

      </div>
      {project.description && (
        <p className="description">{ project.description }</p>
      )}
      {project.skills.length > 0 && (
        <div className="skills">
          <TypedList
            headerText="Skills"
            headerLevel={5}
            listItems={project.skills}
            listType="skills"
          />
        </div>
      )}
      {project.technologies.length > 0 && (
        <div className="technologies">
          <TypedList
            headerText="Tech"
            headerLevel={5}
            listItems={projectTech}
            listType="technologies"
          />
        </div>
      )}
      {project.links.length > 0 && (
        <div className="links print-hide">
          <TypedList
            headerText="Links"
            headerLevel={5}
            listItems={project.links}
            listType="links"
          />
        </div>
      )}
      {project.samples.length > 0 && (
        <div className="samples print-hide">
          <TypedList
            headerText="Samples"
            headerLevel={5}
            listItems={project.samples}
            listType="samples"
          />
        </div>
      )}
    </div>
  );
}

type ProjectAudienceDescriptionProps = {
  audience: string,
  isOpenSource?: boolean
}

function ProjectAudienceDescription ({
  audience,
  isOpenSource
}: ProjectAudienceDescriptionProps): JSX.Element | null {
  const codeBaseType = isOpenSource ? 'open-source' : 'closed-source';
  const descriptionItems = [audience, codeBaseType];

  return descriptionItems.length > 0 ? <div>({ descriptionItems.join(', ') })</div> : null;
}

function TeamSizeDescription (
  {teamSize}: {teamSize: string}
): JSX.Element {
  const teamDescription = teamSize === 'solo' ?
    'solo development' :
    `team of ${teamSize} developers`;

  return <div className="team-size">{ teamDescription }</div>;
}
