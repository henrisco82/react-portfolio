export interface Talk {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  tech: string[];
}

export const talks: Talk[] = [
  {
    id: "sso-keycloak",
    title: "Single Sign-On with Angular & Keycloak",
    youtubeId: "-z8k1vxQ3Tk",
    description: "Explaining SSO and building an Angular app secured with Keycloak.",
    tech: ["Angular", "SSO", "Keycloak", "Identity"]
  },
  {
    id: "sso-okta",
    title: "Angular SSO with Okta",
    youtubeId: "hYg-qG7IBKc",
    description: "Integrating Okta authentication into Angular for secure SSO.",
    tech: ["Angular", "Okta", "Authentication", "SSO"]
  },
  {
    id: "angular-firebase-crud",
    title: "Angular CRUD App with Firebase",
    youtubeId: "Y9LgPelRcys",
    description: "Creating a CRUD Application with Angular and Firebase",
    tech: ["Angular", "Firebase", "Bootstrap", "CRUD"]
  }
];
