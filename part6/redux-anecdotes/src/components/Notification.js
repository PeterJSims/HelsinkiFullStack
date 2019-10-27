import React from 'react';
import { connect } from 'react-redux';

const Notification = (props) => {
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1
	};
	if (!props.notification) return <div />;
	else return <div style={style}>{props.notification}</div>;
};

const mapStateToProps = (state) => {
	return {
		notification: state.notification
	};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
