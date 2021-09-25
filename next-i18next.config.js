module.exports = {
    i18n: {
        defaultNS: "home",
        fallbackLng: "pt",
        localePath: typeof window === "undefined" ? "./public/locales" : "locales",
        locales: ["pt", "es", "en"],
        defaultLocale: "pt",
        interpolation: {
            escapeValue: false,
        },
    },
    react: {
        useSuspense: false,
        wait: true,
    },
};