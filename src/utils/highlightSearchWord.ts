import escapeRegExp from "./escapedRegExp";
const highlightSearchWord = (text: string, searchWord: string, caseSensitive: boolean) => {
  const escapedSearchWord = escapeRegExp(searchWord);
  const pattern = new RegExp(`${escapedSearchWord}`, caseSensitive ? 'g' : 'ig');
  const highlightedText = text.replace(pattern, (match) => {
    return `<span class="bg-yellow-200 text-black">${match}</span>`;
  })
  return "<p>" + highlightedText + "</p>";
}

export default highlightSearchWord;
