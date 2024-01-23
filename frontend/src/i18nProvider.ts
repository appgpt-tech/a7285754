// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Books":{"name":"Books","fields":{"Booktitle":"Booktitle","Releasedate":"Releasedate","Numberofbookssold":"Numberofbookssold","Id":"Id"}},"Authors":{"name":"Authors","fields":{"Authorname":"Authorname","Dateofbirth":"Dateofbirth","Gender":"Gender","Id":"Id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    