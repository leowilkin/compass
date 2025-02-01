// src/config/site.ts

export const siteConfig = {
    // Basic site information
    name: "School Name",        // Full name of your school
    shortName: "School",          // Abbreviated name or initials
    description: "Access your school resources in one place",

    // Branding
    theme: {
        card: {
            background: "#ffe680",
            text: "black"
        },
        tab: {
            background: "#F49812",
            text: "black"
        },
        colors: {
            primary: "#F49812",    // Main brand color (e.g., for buttons)
            secondary: "#4FAED9",  // Secondary color
            sidebar: "#B8DFD9",    // Sidebar background
            background: "#FFCC00", // Main background color
        }
    },

    // School branding
    school: {
        logo: {
            src: "https://placehold.co/600",  // Path to your logo in public folder
            alt: "logo",
            width: 100,
            height: 100
        },
        favicon: {
            src: "https://placehold.co/600"
        },
    },

    // Feature configurations   
    features: {
        // Form for requesting new apps
        missingApp: {
            formLink: "https://forms.office.com/your-form-id",
            buttonText: "Request New App",
            email: "apps@school.edu"  // Email for support
        },
        // Other optional features
        oauth: {
            enabled: false,
        },
    },
};

// You can export specific sections for easier imports
export const schoolInfo = siteConfig.school;
export const themeColors = siteConfig.theme.colors;
export const siteFeatures = siteConfig.features;