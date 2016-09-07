import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	
	componentWillMount() {
		this.props.fetchPosts();     
	}

	renderPosts() {
		return this.props.posts.map(function(post){
			return (
				<li key={post.id} className='list-group-item'>
					<Link to={`/posts/${post.id}`}>
						<span className='pull-xs-right'>{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		})
	}

	render() {
		return (
			<div> 
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary"> 
						Add a Post
					</Link> 
				</div>
				<h3>Posts ({this.props.posts.length})</h3>
				<ul className='list-group'>
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		posts: state.posts.all
	};
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);