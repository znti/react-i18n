import React from 'react';
import ReactDOM from 'react-dom';

import LanguageProvider, { useLanguage } from './react-language-kit';

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
  const [ { language, options }, setLanguage ] = useLanguage();
  const strings = i18nMap[language];

  return (
    <>
      <p>
        {strings.description}: {language}
      </p>

      <p>
        {strings.options}:<br/>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          {options.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
        </select>
      </p>
    </>
  );
}

ReactDOM.render(
	<LanguageProvider
		language={'pt'}
		languages={['en', 'pt']}
	>
		<App />
	</LanguageProvider>
, document.getElementById('root'));

