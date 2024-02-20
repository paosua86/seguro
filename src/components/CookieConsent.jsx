import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 bg-blue-medium-dark p-5 text-center w-full z-50 text-white">
            <p>{t('cookieConsent.message')}</p>
            <button className="bg-blue-500 text-white mt-4 font-bold py-2 px-4 rounded" onClick={handleAccept}>{t('cookieConsent.acceptButton')}</button>
            <div className="text-xs mt-4">
                <p className="text-xs">{t('cookieConsent.managingCookiesDescription')}</p>
                <ul className="inline-flex flex-wrap justify-center gap-2">
                    <li><a className="text-blue-300 hover:text-blue-500" href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                    <li>/</li>
                    <li><a className="text-blue-300 hover:text-blue-500" href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                    <li>/</li>
                    <li><a className="text-blue-300 hover:text-blue-500" href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
                    <li>/</li>
                    <li><a className="text-blue-300 hover:text-blue-500" href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                </ul>
            </div>
        </div>
    );
};

export default CookieConsent;
