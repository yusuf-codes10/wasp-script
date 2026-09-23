export const splitText = (text: string): string => {
  return text.split("Examples")[0] ?? 'something went wrong!';
};
