import React from 'react';
import './style.scss'
import PropTypes from 'prop-types';
import projects from '../../data/projects';
import lib from '../../libs/utils'

import Search from '../../components/Search/Search';
import Project from './../../components/Project/Project';
import Tag from "../../components/Tag/Tag";


class PortfolioPage extends React.Component {

    // const PortfolioPage = (props, context) => {
    //   const {
    //     theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
    //   } = context;

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            projects: projects
        };
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {
        // something was added in the filter. We had AND matching right now.
        // let useState = (event.target.value.indexOf(this.state.searchText) === 0);
        this.setState({
            searchText: event.target.value,
            projects: lib.filterProjects(projects, event.target.value)
        }, () => {
            // lib.focusSearch();
        });
    }

    render() {
        const {
            theme: {colorPrimary, colorAlternate, textAlternate, bgPrimary}
        } = this.context;

        let projectDOM = this.state.projects.map((p) =>
            <Project key={p.id} {...p} />
        );
        // empty list of projects
        if (projectDOM.length === 0) {
            projectDOM = (<div className="noResults">No results found</div>);
        }

        let filterTags = ['android', 'web', 'react', 'ios', 'pwa']

        return (
            <div className="portfolio-page">
                <div className="content-grid">
                    <h1 style={{color: colorPrimary}}>Portfolio</h1>


                    <div className="portfolio-wrapper">
                        {filterTags.map((t) =>
                            <Tag key={t} name={t} textColor={bgPrimary} backgroundColor={colorPrimary}/>
                        )}
                    </div>
                    <div className="center-div">
                        <Search changeHandler={this.inputChange}/>
                    </div>
                    {projectDOM.length > 0 && <p className="center-div">{projectDOM.length} Projects</p>}


                    <div className="portfolio-wrapper">

                        {projectDOM}
                    </div>
                </div>
            </div>
        );
    }

}

PortfolioPage.contextTypes = {
    theme: PropTypes.any
};

export default PortfolioPage;
