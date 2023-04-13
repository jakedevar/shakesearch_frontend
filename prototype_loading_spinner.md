i need to add a loading spinner when results are coming in because there is a wierd hang before results come in. it would be really nice to 
know that the results are still coming rather than waiting for them to come in. 
the idea would be. when i start altering the searchTerm. should there always be no results and a spinner? 
that almost seems jarring. I can put it in the debounced search term setTimeout function. that way it will update what is being searched
at the same time as things change and it's not quite as jarring. almost like when you stop typeing it's like the same has hitting enter.
otherwise i think it would seem a bit too touchy
ill implement a spinner component and try it out. this of course means i need an is loading state variable

1. create is loading state var. in slice
  a. update setter method
  b. import to results page and searchBar
  c. update ternary logic in results display 
  d. empty results upon typing or searching
  e. set and unset loading in asynchronus useEffect function
