import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MainContent from '../../components/MainContent'

import * as Actions from '../../actions/actions'

class App extends Component {
	render() {
		const {state, actions, children } = this.props

		let initialMessage = state.main.initialMessage
		
		return (
			<div className="content">
				<MainContent initialMessage={initialMessage} />
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
  	state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
