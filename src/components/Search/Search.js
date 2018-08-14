import React, {Component} from 'react'
import  './Search.scss'

export default class Search extends Component {
	// type=search helps with the (x) mark
	render() {
		return (
			<input type="search" id="search" placeholder="Filter (e.g. 'backend python')"
						 autoComplete="off" spellCheck="false"
						 className="search" onChange={this.props.changeHandler} />

        //   <div>
		//   <style jsx="true">
        //     {`              .search:focus {
		// 		border-bottom-color: ${colorAlternate};
        //       }
        //  `}
        //   </style>
        //   {/* <PortfolioItem /> */}
        // </div>

		)
	}
}
