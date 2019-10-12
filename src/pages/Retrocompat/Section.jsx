import React from 'react';

export default function Section({title, description, options}) {
	return (
		<div style={{
			minWidth: '300px',
			borderStyle: 'solid',
			borderWidth: '1px',
			padding: '8px',
			margin: '4px',
		}}>
			<h2>
				{title}
			</h2>

			<p>
				<strong>
					{description}
				</strong>
			</p>

			<p>
				{options}
			</p>
		</div>
	)
}
