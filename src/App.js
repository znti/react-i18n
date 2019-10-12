import React from 'react';
import RetrocompatPage from 'pages/Retrocompat';
import LanguageProvider from 'react-language-kit';

export default function App() {
	return (
		<LanguageProvider
			//v1.0.0
			language={'pt'}
			languages={['en', 'pt']}
			//v1.1.0 and above
			activeLanguage={'pt'}
			availableLanguages={['en', 'pt']}
		>
			<RetrocompatPage />
		</LanguageProvider>
	);
}
