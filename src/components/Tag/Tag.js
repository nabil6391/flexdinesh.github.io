import React, {Component} from 'react'

import  './Tag.scss'
import lib from '../../libs/utils'

export default class Tag extends Component {
	tagClick(event) {
		let data = event.target.textContent;
		let search = document.getElementById('search');
		let vals = search.value.split(' ');
		let dataIndex = vals.indexOf(data);
		if (dataIndex > -1){ // exists, remove it
			vals.splice(dataIndex, 1);
		} else {
			// vals.push(data);
			vals = [data];
		}
		lib.setSearch(vals.join(' '));
	}

	render() {
		return (
			<span className="tag" onClick={this.props.clickListener || this.tagClick}
				style={{color: this.props.textColor, backgroundColor : this.props.backgroundColor}}>
				{this.props.name}
			</span>
		)
	}
}
