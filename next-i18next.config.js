module.exports = {
    i18n: {
        locales: ["pt", "es", "en"],
        defaultLocale: "pt",
    },
    defaultNS: "home",
    fallbackLng: "pt",
    interpolation: {
        escapeValue: false,
    },
    localePath: typeof window === "undefined" ? "./public/locales" : "locales",
    react: {
        useSuspense: false,
        wait: true,
    },
};