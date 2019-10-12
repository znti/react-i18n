import React, { createContext, useContext, useState, useReducer } from 'react';

const LanguageContext = createContext();

const ActiveLanguageContext = createContext();
const AvailableLanguagesContext = createContext();

const reducer = (state, language) => {
	if(state.options.includes(language)) {
		return { ...state, language };
	}
};

export default function LanguageProvider({children, languages, language, activeLanguage, availableLanguages}) {
	
	const options = languages || [ 'en', 'pt' ];
	language = language || 'en';

	let initialLanguages = ['en', 'pt'];
	let initialLanguage = 'en';

	if(availableLanguages && Array.isArray(availableLanguages) && availableLanguages.length > 0
			&& activeLanguage && availableLanguages.includes(activeLanguage)) {
		initialLanguages = availableLanguages;
		initialLanguage = activeLanguage;
	} else {
		console.warn('Skipping availableLanguages and activeLanguage props for misformat.\n',
			'\tProps availableLanguage expects an array of strings.\n',
			'\tProps activeLanguage expects a string contained in availableLanguage array.');
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
