export const splitText = (text: string): string => {
  const preview = text.split("Examples")[0] ?? 'something went wrong!';
  return preview.replaceAll("*", "").trim();
};
