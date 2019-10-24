const initialNotification = null;

const notificationReducer = (state = initialNotification, action) => {
	switch (action.type) {
		case 'NEW_NOTIFICATION':
			return action.data.message;
		default:
			return state;
	}
};

export const addNotification = (message) => {
	return {
		type: 'NEW_NOTIFICATION',
		data: { message }
	};
};

export default notificationReducer;
