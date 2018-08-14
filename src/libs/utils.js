import projects from '../data/projects'

export default {
	/*
	 * searchProjects filters the projects
	 */
	filterProjects: (projects, query) => {
		console.log('I was triggered during render')
		let p = [];

        // if (!query)
        //     return p;

	 // lower case better searching
		let qrArr = query.toLowerCase().split(' ');

        p = projects.filter(uni => qrArr.some(q =>
			uni.name.toLowerCase().search(q) > -1 ||
            JSON.stringify(uni.tags).toLowerCase().search(q) > -1 ||
			uni.date.toLowerCase().search(q) > -1));

        // let s = "";
        // for (let i of p) {
        //     s = s + "\n* " +
			// 	"[" + i.name + "](" + i.github+")";
        // }
        // console.log(s);

		return p;
	},
	/*
	 * get project by id
	 */
	getProjectById: (id) => {
		for (let p of projects) {
			if (p['id'] === id) {
				return p;
			}
		}
		return null;
	},

	/*
	 * setSearch and fire
	 */
	setSearch: (text) => {
		let search = document.getElementById('search');
		// search.value = text;
		// fire event https://stackoverflow.com/questions/23892547/
		// let event = new Event('input', { bubbles: true });
		// search.dispatchEvent(event);


		var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
		nativeInputValueSetter.call(search, text);

		var ev2 = new Event('input', { bubbles: true });
		search.dispatchEvent(ev2);
	},

	/*
	 * focus on search
	 */
	focusSearch: () => {
		document.getElementById('search').focus();
	},

	/*
	 * get domain from link
	 * https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
	 */
	getDomain: (url) => {
		let hostname;
		//find & remove protocol (http, ftp, etc.) and get hostname
		if (url.indexOf("://") > -1) {
			hostname = url.split('/')[2];
		} else {
			hostname = url.split('/')[0];
		}
		// find & remove port number
		hostname = hostname.split(':')[0];
		// find & remove "?"
		hostname = hostname.split('?')[0];
		return hostname;
	}
}
