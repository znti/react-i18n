import React, { createContext, useContext, useState, useReducer } from 'react';

const defaultLanguage = 'en-US';

const LanguageContext = createContext();

const ActiveLanguageContext = createContext();
const AvailableLanguagesContext = createContext();

const reducer = (state, language) => {
	if(state.options.includes(language)) {
		return { ...state, language };
	}
};

function showUsage() {
	console.warn('Skipping availableLanguages and activeLanguage props for misformat.\n',
		'\tProps availableLanguage expects an array of strings.\n',
		'\tProps activeLanguage expects a string contained in availableLanguage array.');
}

export default function LanguageProvider({children, languages, language, activeLanguage, availableLanguages}) {
	
	const options = languages || [ defaultLanguage ];
	language = language || defaultLanguage;

	let initialLanguages = [ defaultLanguage ];
	let initialLanguage = defaultLanguage;

	if(availableLanguages && Array.isArray(availableLanguages) && availableLanguages.length > 0) {
		initialLanguages = availableLanguages;
	} else {
		showUsage();
	}

	if(activeLanguage && availableLanguages.includes(activeLanguage)) {
		initialLanguage = activeLanguage;
	} else {
		initialLanguage = initialLanguages[0];
	}

	return (
		<AvailableLanguagesContext.Provider value={useState(initialLanguages)}>
			<ActiveLanguageContext.Provider value={useState(initialLanguage)}>
				<LanguageContext.Provider value={useReducer(reducer, {language, options})}>
					{children}
				</LanguageContext.Provider>
			</ActiveLanguageContext.Provider>
		</AvailableLanguagesContext.Provider>
	);
}

export const useLanguage = () => useContext(LanguageContext);
export const useActiveLanguage = () => useContext(ActiveLanguageContext);
export const useAvailableLanguages = () => useContext(AvailableLanguagesContext);
