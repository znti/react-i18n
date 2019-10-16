# React Language Kit  [![npm](https://img.shields.io/npm/v/react-language-kit)](https://www.npmjs.com/package/react-language-kit)
A React internationalization (i18n) helper with minimal footprint and ease of usage

## How to install

This module can be Installed via npm

`npm i --save react-language-kit`

## How to use

The protagonist of this library is the `LanguageProvider` component. It sources the language settings to its component tree.<br>
Once a provider is set, its children have access to the language settings through the `useActiveLanguage` and `useAvailableLanguages` hooks.

Their details are listed below.

### The LanguageProvider component

A provider to be used as the root for the tree that will be aware of language changes.<br>
This is also the place to declare the default language and available languages for that component tree.
If no `activeLanguage` is initialized, it defaults to the first element of `availableLanguages` array.

```jsx
<LanguageProvider
  availableLanguages={['en-US', 'pt-BR']}
  activeLanguage={'pt-BR'}
>
  <App />
</LanguageProvider>
```

### The `useActiveLanguage()` and `useAvailableLanguages()` hooks

Hooks to access and change the current language settings.<br>
The value of `available languages` is an array of strings defining each language, while `active language` is a string contained in `available languages`.

Being a hook, it can only be directly used inside functional components.<br>
A sample of its usage is shown below.

```js
import React from 'react';
import { useActiveLanguage, useAvailableLanguages } from 'react-language-kit';

function App() {

  const [ language, setLanguage ] = useActiveLanguage();
  const [ availableLanguages, setAvailableLanguages ] = useAvailableLanguages();

  return (
    <div>
      <p>The current language is {language} </p>

      <select value={language} onChange={e => setLanguage(e.target.value)}>
        {availableLanguages.map(option => (<option key={option} value={option}>{option}</option>))}
      </select>
    </div>
  )
}
```

_(the initial values returned are the same ones sourced as `props` to the `LanguageProvider` component)_


## How to prepare components with translations

Components that should be aware of language changes can use the `useActiveLanguage` hook to select the correct string resource file.<br>
A possible resources file setup is shown below:

```js
/* The objects can be either imported from a JSON or defined inline */
const ptStrings = require('./pt-BR.json');
const enStrings = {
  welcome: ({ name }) => `Hello, ${name}. This is a parameterized string.`,
  content: 'This is the content description'
};

// This is the map for this component
export default {
  'en-US': enStrings,
  'pt-BR': ptStrings,
}
```

Having this resources map in hand, a selection can be made using the `language` property returned from the hook as key.

## Usage sample

The code below shows a way of settings up translation using React Language Kit

```jsx
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
```

## Sample projects using React Language Kit

[Material UI i18n](https://github.com/znti/material-ui-i18n) is a boilerplate starter for i18n-aware SPAs using the [Material-UI](https://material-ui.com) components library

