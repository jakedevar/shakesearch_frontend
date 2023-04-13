const highlightSearchWord = (text: string, searchWord: string, caseSensitive: boolean) => {
  const pattern = new RegExp(`${searchWord}`, caseSensitive ? 'g' : 'ig');
  const highlightedText = text.replace(pattern, (match) => {
    return `<span class="bg-yellow-100 text-black">${match}</span>`;
  })
  return "<p>" + highlightedText + "</p>";
}

export default highlightSearchWord;
