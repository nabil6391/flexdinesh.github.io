import React from 'react';
import './style.scss'

import projects from '../../data/projects';
import lib from '../../libs/utils'

import Search from '../../components/Search/Search';
import Project from './../../components/Project/Project';

class PortfolioPage extends React.Component {

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
      projects: lib.filterProjects( projects, event.target.value)
    }, () => {
      // lib.focusSearch();
    });
  }

  render() {
    let projectDOM = this.state.projects.map((p) =>
      <Project key={p.id} {...p} />
    );
    // empty list of projects
    if (projectDOM.length === 0) {
      projectDOM = (<div className="noResults">No results found</div>);
    }
    return (
      <div className="portfolio-page"  >
        <Search changeHandler={this.inputChange} />
        <div className="content">
          {projectDOM}
        </div>
      </ div>
    );
  }

}

export default PortfolioPage;
