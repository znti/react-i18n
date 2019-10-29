import React from 'react';

import V100 from './V100';
import V110 from './V110';
import V120 from './V120';

export default function RetrocompatPage() {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			padding: '16px'
		}}>
			<V100 />
			<V110 />
			<V120 />
		</div>
	);
}
