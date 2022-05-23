export const normalizeText = (text: string) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const slugify = (text: string) => {
  const newText = normalizeText(text);
  return newText
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
};
