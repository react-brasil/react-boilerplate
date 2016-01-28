import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MainContent extends Component {

  constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	render() {
		return (
			<div>
				<h1>{this.props.initialMessage}</h1>
			</div>
		)
	}
}

export default MainContent
