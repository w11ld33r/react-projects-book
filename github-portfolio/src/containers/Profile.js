import React, { Component } from 'react';

import Link from '../components/Link/Link';
import List from '../components/List/List';
import './Profile.css';

class Profile extends Component {

	constructor() {
		super();

		this.state = {
			profile: {},
			loading: true
		};
	}

	async componentDidMount() {
		const profile = await fetch('https://api.github.com/users/octocat');
		const profileJSON = await profile.json();

		if (profileJSON) {
			this.setState({
				profile: profileJSON,
				loading: false
			});
		}
	}

	render() {
		const {profile, loading} = this.state;

		if (loading) {
			return <div>Loading...</div>
		}

		const items = [
			{label: 'html_url', value: <Link url={profile.html_url} title='Github URL' />},
			{label: 'repos_url', value: profile.repos_url},
			{label: 'name', value: profile.name},
			{label: 'company', value: profile.company},
			{label: 'location', value: profile.location},
			{label: 'email', value: profile.email},
			{label: 'bio', value: profile.bio},
		];

		return (
			<div className="Profile-container">
				<img className="Profile-avatar" src={profile.avatar_url} alt="avatar" />
				<List items={items} />
			</div>
		);
	}
}

export default Profile;