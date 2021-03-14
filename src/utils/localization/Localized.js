import LocalizedStrings from 'react-native-localization';
import en from './en.json';

/**
 * @description localization of Languages .
 */

export const languages = [
  { language: 'en', title: 'English', id: 1 },
];

export const strings = new LocalizedStrings({
  en: en,
});
