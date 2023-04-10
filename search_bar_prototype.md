notes: so far i like the idea of having a search bar that doesn't need a big search button. searching the text doesn't seem like it would be that expensive to do 
especially if the debounced search rate is long enough i think go could handle it. as a user experience I would highly prefer a search bar that moves at the
speed of thought. You probably just want this thing to work immediatly and not have a big clunky interface that you have to click. minimal input is good input

P: i need a function that will do the api calls from within the search bar function. This will update the results that are displayed.
E: something that functions by taking in the text argument and the caseSensitive argument
D: it will return an array of strings
A: - have it take in a boolean as well as the text string. or the debounced string
- this will create the appropriate url that will be passed to axios
- this make the call and the data is set to the results state
- this is obviously asynchronous

notes: this will be called automatically by the set timeout function and update the state of the results
