i need to paginate the data which needs to have several things happen for it to be successfull

1. i need to create a page number query that is passed into the SearchBar component along with the quanitity
  a. this is coupled with the fact that when i type a new character the page number needs to be reset
  b. I also need to have a item amount dropdown menu that is present aside from the table this also has it's seperate value and state
2. i need to add these query's to the frontend string that is passed back as well as the backend
  a. backend needs to recognize the query in the search function, this needs to be passed to a pagination function to return the data 
  b. make sure that the types in the search bar are ready for the data as well as making sure set and get for page number and quanitity is respected as params
  c. make sure url is updated for axios request
3. create next and prevoius buttons for the pagination to occur
  a. these need to have the current page number, an add or subtract flag, and setPageNumber as well as all the state needed for resultsAPICall function
  b. use the resultsAPICall function

see reference in backend docs

notes: so it's looking like there is about to be alot of prop drilling going on. the code dosen't look too clean when each of these components has 10 arguments a peice
the argument now is do i use redux? I'm not sure how much more I have to do on the frontend. In other words how many more components will I make that require
these states? If i use redux now then it might save me time developing each component. though it would be useless it i just had two components with all the state
passed to them. the only option would be to know what the future would be. I do want development to be at the speed of thought, and as this grows doing this now
would save time in the future. also it would result in cleaner code. I think I am going to use redux here.

so i am running into an issue, i have set change quantity to fire an api call by having a useEffect hook look for a change in page number. 
change quantity though, will not fire again if the quantity is changed while on the first page. 
i think i can fix this by having a reload page boolean that fires every time i want something to change but not have to do anything about the page number
this seems like a patch work fix though. 

what i could do instead is call the first 50 responses back to the frontend and store those. but then how would i reload the front end...
change boolean it is
