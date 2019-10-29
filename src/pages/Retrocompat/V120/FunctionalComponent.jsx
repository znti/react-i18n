import React from 'react';
import { useActiveLanguage, useAvailableLanguages, useTranslation } from 'react-language-kit';

import Section from '../Section';
import i18nMap from '../i18n';

const version = { v: '1.2.0' };

/**
 * Currency code list at:
 * https://www.currency-iso.org/dam/downloads/lists/list_one.xml
 */
const formats = {
    number: {
        usd: { style: 'currency', currency: 'USD' },
        brl: { style: 'currency', currency: 'BRL' },
    },
};

export default function V1_2_0() {
    const [language, setLanguage] = useActiveLanguage();
    const [options] = useAvailableLanguages();

    /** New Hook! ('formats' is optional) */
    const t = useTranslation(i18nMap, formats);

    return (
        <Section
            title={t('versionWithHooks', version)}
            description={`${t('description')}: ${language}`}
            options={(
                <>
                    <span><strong>{`${t('options')}: `}</strong></span>
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
