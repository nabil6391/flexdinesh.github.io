import React from 'react'
import './ProjectLinks.scss'
import lib from '../../libs/utils';
import { PropTypes } from 'prop-types';


const ProjectLinks = (props, context) => {
	const { theme: { colorPrimary, textAlternate } } = context;

	// websites
	let websitesDOM;
	if (props.websites) {
		websitesDOM = props.websites.map((w) => {

			let icon;
			if (w.includes('play')) {
				icon = 'fab fa-google-play';
			}
			else if (w.includes('medium')) {
				icon = 'fab fa-medium';
			}
			else if (w.includes('apple')) {
				icon = 'fab fa-ios';
			}
			else if (w.includes('github')) {
				icon = 'fab fa-github';
			}
			else {
				icon = 'fab fa-staylinked';
			}

			return <a
				target="_blank"
				rel="noopener noreferrer"
                key={w}
				href={w}
				className="logoContainer"
				title={lib.getDomain(w)}
				style={{ color: textAlternate }}><i className={icon}></i></a>

			// <a key={w} href={w} target="_blank" className="logoContainer" title={lib.getDomain(w)}>
			// 	<img className="logo" src={pathResolver("/link-symbol.svg")} alt="www"/>
			// </a>

		}
		);
	}

	return (
		<span className="projectLinks">
			{props.websites && websitesDOM}

			{props.github &&
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={props.github}
					className="logoContainer"
					title="GitHub"
					style={{ color: textAlternate }}><i className="fab fa-github"></i></a>

				// <a href={props.github} target="_blank" className="logoContainer" title="GitHub">
				// 	<img className="logo" src="http://stackexchange.com/users/flair/2644958.png?theme=dark" alt="GIt" />
				// </a>
			}
		</span>
	);
}

ProjectLinks.contextTypes = {
	theme: PropTypes.any
};

export default ProjectLinks;
