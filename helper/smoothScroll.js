export function handleScroll(data, viewMode) {
  const el = document.getElementById(data);
  el?.scrollIntoView({ behavior: "smooth", block: viewMode });
}
