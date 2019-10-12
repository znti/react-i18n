import React from 'react';
import { useLanguage, useActiveLanguage, useAvailableLanguages } from 'react-language-kit';

const i18nMap = {
	en: {
		title: 'Retrocompatibility test',
		version: 'Version',
		description: 'Currently using',
		options: 'Options',
	},
	pt: {
		title: 'Teste de retrocompatibilidade',
		version: 'Versão',
		description: 'Atualmente usando',
		options: 'Opções',
	},
}

export default function RetrocompatPage() {
	const [ { language : legacyLanguage, options }, setLegacyLanguage ] = useLanguage();
	const legacyStrings = i18nMap[legacyLanguage];

	const [ language, setLanguage ] = useActiveLanguage();
	const [ languageOptions, setLanguageOptions ] = useAvailableLanguages();
	const strings = i18nMap[language];

	return (
		<>
			<h1>{strings.title}</h1>

			<p><strong>
				{legacyStrings.version}: 1.0.0
			</strong></p>

			<p>
				{legacyStrings.description}: {legacyLanguage}
			</p>

			<p>
				{legacyStrings.options}:<br/>
				<select value={legacyLanguage} onChange={e => setLegacyLanguage(e.target.value)}>
					{options.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
				</select>
			</p>

			<p><strong>
				{strings.version}: 1.1.0
			</strong></p>

			<p>
				{strings.description}: {language}
			</p>

			<p>
				{strings.options}:<br/>
				<select value={language} onChange={e => setLanguage(e.target.value)}>
					{languageOptions.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
				</select>
			</p>

		</>
	);
}
