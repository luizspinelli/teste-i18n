module.exports = {
    i18n: {
        defaultLanguage: "pt",
        defaultNS: "common",
        fallbackLng: "pt",
        localePath: typeof window === "undefined" ? "./public/locales" : "locales",
        defaultLocale: "pt",
        locales: ["pt", "es", "en"],
        interpolation: {
            escapeValue: false,
        },
    },
    react: {
        useSuspense: false,
        wait: true,
    },
};