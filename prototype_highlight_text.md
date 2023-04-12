notes: so far i have tried to split the text by the search term and then glue them back together this has not been successfull as there are more than one instance sometimes
i feel like to preserve the length of the stings it would be wise to not do it like this. also to not make the code to complex

currently i'm thinking about just marking the beggening and end of the matched string and then maybe spliting that? coming back to the spliting idea is really
the only way it could work now that i'm thinking about it. i just don't want the iteration to get to out of hand

tuesday notes: so i'm thinking about sending back a search term object with the term searched and the text to highlight. this takes care of the situation with
the fuzzy search.

continued in backend

ok i have updated the backend to return objects in the array. now I just need to update the state in redux and also the highlight search function
