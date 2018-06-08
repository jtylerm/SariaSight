import React from 'react';

import '../styles/header.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div id="headerContainer">
					<div id="logoContainer">
						<img id="logoImg" src={require("../images/logo.svg")} />
						<div id="logoTextContainer">
							<div id="logoText">Saria Sight</div>
						</div>
					</div>
					<div id="headerLinksContainer">
						<div className="headerLink">Home</div>
						<div className="headerLink">About</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;