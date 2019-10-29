import React from 'react';
import { withActiveLanguage, withAvailableLanguages, useTranslationTo } from 'react-language-kit';

import Section from '../Section';
import i18nMap from '../i18n';

const version = { v: '1.2.0' };

class V120ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { activeLanguage, availableLanguages } = this.props;
        const [language, setLanguage] = activeLanguage;
        const [options] = availableLanguages;
        const t = useTranslationTo(language, i18nMap);

        return (
            <Section
                title={t('versionCompatibleCC', version)}
                description={`${t('description')}: ${language}`}
                options={(
                    <>
                        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                            {
                                options.map((option) => (
                                    <option key={option} value={option}>{option.toUpperCase()}</option>
                                ))
                            }
                        </select>

                        <br />

                        <hr />
                        <h1>{t('formatArgs')}</h1>

                        <h5>{t('formatArgs.percentUsage')}</h5>
                        <p>{t('formattedArgument.percentUsage', { numCats: '27', pctBlack: 0.75 })}</p>

                        <h5>{t('formatArgs.dateUsage')}</h5>
                        <p>{t('formattedArgument.dateUsage', { start: new Date() })}</p>

                        <h5>{t('formatArgs.timeUsage')}</h5>
                        <p>{t('formattedArgument.timeUsage', { expires: new Date() })}</p>

                        <h5>{t('formatArgs.currencyUsage')}</h5>
                        <p>{t('formattedArgument.currencyUsage', { total: '10' })}</p>

                        <h5>{t('formatArgs.selectUsage')}</h5>
                        <p>{t('formattedArgument.selectUsage', { gender: 'male' })}</p>
                        <p>{t('formattedArgument.selectUsage', { gender: 'female' })}</p>
                        <p>{t('formattedArgument.selectUsage', { gender: 'other' })}</p>

                        <h5>{t('formatArgs.pluralUsage')}</h5>
                        <p>{t('formattedArgument.pluralUsage', { itemCount: 0 })}</p>
                        <p>{t('formattedArgument.pluralUsage', { itemCount: 1 })}</p>
                        <p>{t('formattedArgument.pluralUsage', { itemCount: 22 })}</p>

                        <h5>{t('fallbackTest')}</h5>
                        <p>{t('fallbackValue')}</p>

                    </>
                )}
            />
        );
    }
}

export default withAvailableLanguages(withActiveLanguage(V120ClassComponent));
