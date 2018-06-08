import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import './styles/main.scss';

class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Content />
				<Footer />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<Index />, document.getElementById("app"));