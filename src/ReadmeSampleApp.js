import React from 'react';
import LanguageProvider, { useActiveLanguage, useAvailableLanguages } from 'react-language-kit';

const i18nMap = {
  'en-US': {
    welcome: ({ name }) => `Welcome, ${name}!`,
    description: 'Currently using',
  },
  'pt-BR': {
    welcome: ({ name }) => `Bem vindo, ${name}!`,
    description: 'Atualmente usando',
  },
}

function App() {

  const [ language, setLanguage ] = useActiveLanguage();
  const [ availableLanguages, setAvailableLanguages ] = useAvailableLanguages();

  const strings = i18nMap[language];

  return (
    <div>
      <p>{strings.welcome({ name: 'Mario' })}</p>
      <p>{strings.description}: {language} </p>

      <select value={language} onChange={e => setLanguage(e.target.value)}>
        {availableLanguages.map(option => (<option key={option} value={option}>{option}</option>))}
      </select>
    </div>
  )
}

export default function BaseApp() {
  return (
    <LanguageProvider
      availableLanguages={['en-US', 'pt-BR']}
      activeLanguage={'pt-BR'}
    >
      <App />
    </LanguageProvider>
  );
}
