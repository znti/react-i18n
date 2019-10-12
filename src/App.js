import React from 'react';
import RetrocompatPage from 'pages/Retrocompat';
import LanguageProvider from 'react-language-kit';

export default function App() {
	return (
		<LanguageProvider
			language={'pt'}
			languages={['en', 'pt']}
		>
			<RetrocompatPage />
		</LanguageProvider>
	);
}
