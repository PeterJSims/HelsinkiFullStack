import { useState } from 'react';

export const useField = (name, type) => {
	const [ value, setValue ] = useState('');
	const onChange = ({ target }) => setValue(target.value);

	const onDefault = () => setValue('');
	return { value, onChange, onDefault, name, type };
};
