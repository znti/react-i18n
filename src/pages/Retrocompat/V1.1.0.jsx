import React from 'react';
import { useLanguage, useActiveLanguage, useAvailableLanguages } from 'react-language-kit';

import Section from './Section';
import i18nMap from './i18n';

export default function V1_1_0() {

	const [ language, setLanguage ] = useActiveLanguage();
	const [ options, setLanguageOptions ] = useAvailableLanguages();
	const strings = i18nMap[language];

	return (
		<Section
			title={`${strings.version} 1.1.0`}
			description={`${strings.description}: ${language}`}
			options={(
				<select value={language} onChange={e => setLanguage(e.target.value)}>
					{options.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
				</select>
			)}
		/>
	)
}
