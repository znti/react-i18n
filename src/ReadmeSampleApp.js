import React from 'react';
import LanguageProvider, { useActiveLanguage, useAvailableLanguages } from 'react-language-kit';

const i18nMap = {
  en: {
    description: 'Currently using',
    options: 'Options',
  },
  pt: {
    description: 'Atualmente usando',
    options: 'Opções',
  },
}

function App() {

	const [ language, setLanguage ] = useActiveLanguage();
	const [ languageOptions, setLanguageOptions ] = useAvailableLanguages();

	return (
		<div>
      <p>The current language is {language} </p>

      <select value={language} onChange={e => setLanguage(e.target.value)}>
        {languageOptions.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
      </select>
    </div>
	)
}

export default function BaseApp() {
  return (
    <LanguageProvider
      language={'en'}
      languages={['en', 'pt']}
    >
      <App />
    </LanguageProvider>
  );
}
