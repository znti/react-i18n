# React Language Kit  [![npm](https://img.shields.io/npm/v/react-language-kit)](https://www.npmjs.com/package/react-language-kit)
A React internationalization (i18n) helper with minimal footprint and ease of usage

## How to install

This module can be Installed via npm

`npm i --save react-language-kit`

## How to use

This module's usage depends on a `LanguageProvider` to set it up and an `useLanguage` hook to interact with its settings.

### LanguageProvider

A provider to be used as the root for the tree that will be aware of language changes.<br>
This is also the place to declare the default language and language options available for that component tree.

```jsx
<LanguageProvider
  language={'pt'}
  languages={['en', 'pt']}
>
  <App />
</LanguageProvider>
```

### useLanguage

A hook to access the current language, languages available and change the current language.<br>

`useLanguage()` returns an array with the two entries: the current settings as its first element and a language setter as its last one.<br>
The settings entry has the following structure:

```json
{
  "language": "pt",
  "options": [
    "en", "pt"
  ]
}
```

_(there are preset values being shown just for completeness)_

Being a hook, it can only be directly used inside functional components. It can be used as shown below.

```js
const [ { language, options }, setLanguage ] = useLanguage();
```

## How to prepare the components that will have translations

Components that should be aware of language changes can use the `useLanguage` hook to select the correct string resource file.<br>
A resources file setup is shown below:

```js
/* The objects can be either imported from a JSON or defined inline */
const ptStrings = require('./pt.json');
const enStrings = {
  content: 'This is the content description'
};

// This is the map for this component
export default {
  en: enStrings,
  pt: ptStrings,
}
```

Having this resources map in hand, a selection can be made using the `language` property returned from the hook.

## Usage sample

```jsx
import React from 'react';
import LanguageProvider, { useLanguage } from 'react-language-kit';

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
        {strings.options}
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          {options.map(option => (<option key={option} value={option}>{option.toUpperCase()}</option>))}
        </select>
      </p>
    </>
  );
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
```

