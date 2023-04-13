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

notes: so i have a working spinner. however i am running into the issue of when the program initially starts up it shows the page buttons
and the results text. 
I would instead like to have the docs for how to actually use the program appear instead of page results that haven't been searched for

ok showing docs are done. didn't need to make a list because it was easy to do

right now when i start typing i realize that I actually don't even use the debounced search term like i used to 
so i can get rid of that and instead use the search term for every thing
but right now when i start typing the loading spinner starts immediatly which is a bad representation. i need to have it start when a 500 millisencond wait occurs
so that means i need to flip loading to true in the useEffect which i am not sure will work but will try
i also need to show the whats being searched but i can do that after this

