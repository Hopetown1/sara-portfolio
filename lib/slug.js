// Turn a project title into a URL-safe slug, e.g. "Spring Campaign" -> "spring-campaign".
// Used both to build project links and to look a project back up from the URL.
export function slugify(str = '') {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents (e.g. Spanish characters)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
