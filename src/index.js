import React, { createContext, useContext, useReducer } from 'react';

const LanguageContext = createContext();

const reducer = (state, language) => {
	console.log('State', state, 'and lang', language);
	if(state.options.includes(language)) {
		return { ...state, language };
	}
};

export default function LanguageProvider({children, languages, language}) {
	
	const options = languages || [ 'en', 'pt' ];
	language = language || 'en';

	return (
		<LanguageContext.Provider value={useReducer(reducer, {language, options})}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = () => useContext(LanguageContext);

export const chooseStrings = (options) => {
	console.log('L.currentValue', LanguageContext._currentValue);
	console.log('Choosing for lang', LanguageContext, 'from optinos', options);

	const [ {language} ] = LanguageContext._currentValue;

	const chosenStrings = options[language];

	if(chosenStrings) {
		return chosenStrings;
	}

	// Choose the first available option as default
	if(Object.keys(options).length > 0) {
		return options[Object.keys(options)[0]];
	}

	return {}
}

