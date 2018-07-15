import React  from 'react'
import Tag from '../Tag/Tag'
import  './Project.scss'
import { PropTypes } from 'prop-types';

const Project  = (props, context) => {
	const { theme: { colorPrimary, textAlternate} } = context;

		// color
		// tags
		let tagsDOM = props.tags.map((t) =>
			<Tag key={t} name={t} textColor={colorPrimary} backgroundColor= {textAlternate}/>
		);
		return (
			<div className="projectOuter">
				<div className={["project", props.id].join(' ')}
	
				style={{ backgroundColor: colorPrimary, color: textAlternate }}
				>
					<div className={props.name.length > 20 ? "projectTitleSmall" : "projectTitle"}>
						<span className="projectName" style={{color: textAlternate}}>{props.name}</span>
						<span style={{flexGrow: 100}} />
						{/* <ProjectLinks {...props}/> */}
					</div>
					{props.date &&
					<div className="projectDate">
						{props.date}
					</div>
					}
					<div className="projectDesc">{props.desc[0]}</div>
					<div className="projectTags">{tagsDOM}</div>
				</div>
			</div>
		)
	}

	Project.contextTypes = {
		theme: PropTypes.any
	  };
	  
	  export default Project;