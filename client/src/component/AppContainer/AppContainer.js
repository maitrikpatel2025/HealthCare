import React, {Component} from 'react';
import TopNav from '../TopNav/TopNav';


class AppContainer extends Component {
	render() {
		return (
			<div>
				<TopNav/>
				{this.props.children}
			</div>
		);
	}
}

export default AppContainer;