import React, { createContext, useContext, useReducer } from 'react';

const LanguageContext = createContext();

const reducer = (state, language) => {
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

