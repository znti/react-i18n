import React from 'react';
import { useLanguage } from 'react-language-kit';

import Section from './Section';
import i18nMap from './i18n';

export default function V1_0_0() {
	const [ { language , options }, setLanguage ] = useLanguage();
	const strings = i18nMap[language];

	return (
		<Section
			title={`${strings.version} 1.0.0`}
			description={`${strings.description}: ${language}`}
			options={(
				<select value={language} onChange={e => setLanguage(e.target.value)}>
					{options.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
				</select>
			)}
		/>
	)

}
