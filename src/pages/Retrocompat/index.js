import React from 'react';

import V1_0_0 from './V1.0.0';
import V1_1_0 from './V1.1.0';

export default function RetrocompatPage() {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			padding: '16px'
		}}>
			<V1_0_0 />
			<V1_1_0 />
		</div>
	);
}
