export const useScrollToAnchor = (id: string) => {
  const element = document.getElementById(id);
  return element?.scrollIntoView({ block: 'center', behavior: 'smooth' });
};
