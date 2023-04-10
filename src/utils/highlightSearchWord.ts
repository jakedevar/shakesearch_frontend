const highlightSearchWord = (text: string, searchWord: string) => {
  const regex = new RegExp(searchWord, 'gi');
  const matches = text.match(regex);
  if (!matches) return text;
  const highlightedText = text.replace(regex, (match) => `<mark>${match}</mark>`);
  return highlightedText;
}

export default highlightSearchWord;
