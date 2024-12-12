export const Domain = "deniz.blue";
export const Pages = (s: string) => `https://${Domain}/${s}/`;
export const Subdomain = (s: string) => `https://${s}.${Domain}/`;
