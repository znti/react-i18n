import React from 'react';

import V100 from './V1.0.0';
import V110 from './V1.1.0';
import V120 from './V1.2.0';
import V120ClassComponent from './V1.2.0_classComponent';

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
            <V120ClassComponent />
		</div>
	);
}
