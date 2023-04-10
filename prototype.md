1. Set up the project:
a. Create a new React project using create-react-app or your preferred method.
b. Install and set up Tailwind CSS following the official documentation: https://tailwindcss.com/docs/guides/create-react-app

2. Create the title bar component:
a. Create a new file called TitleBar.js in the src/components folder.
b. Inside TitleBar.js, create a functional component that renders the title bar using Tailwind CSS classes for styling.

3. Create the search bar component:
a. Create a new file called SearchBar.js in the src/components folder.
b. Inside SearchBar.js, create a functional component that renders the search bar, submit button, and case-sensitive search button using Tailwind CSS classes for styling.
c. Implement the search functionality by handling input changes, submit button clicks, and case-sensitive search button clicks.

4. Create the table component:
a. Create a new file called ResultsTable.js in the src/components folder.
b. Inside ResultsTable.js, create a functional component that renders the table using Tailwind CSS classes for styling.
c. Make sure the table component accepts the search results as a prop and displays them in a tabular format.

5. Integrate the components:
a. In the src/App.js file, import the TitleBar, SearchBar, and ResultsTable components.
b. Inside the App component, render the TitleBar, SearchBar, and ResultsTable components in the desired order.
c. Implement the state management and event handlers required for the search functionality and pass them down as props to the SearchBar and ResultsTable components.

6. Test and refine the application:
a. Run the React development server and test the application in a web browser.
b. Ensure that the title bar, search bar, and table are displayed correctly and that the search functionality works as expected.
c. Refine the appearance and behavior of the components as needed using Tailwind CSS classes.

notes: currently I am deciding between react bootstrap and Tailwind css. Though I have never used Tailwind. I think that after doing some research into it i can 
determine that I would prefer using tailwind.

If I use react boostrap then I am working with a big bundle size that sits in my code. In addition to that i have less flexibilitiy with the framework then I would
with tailwind. Also, when It ships i belive it dosen't remove components i don't use. I think that if this was a larger project. using tailwind (which could incur a small learning curve)
could be beneficial in keeping the build size small and making things more customizable.

I have also decided not to use Redux as this would be helpful for a larger frontend project. Seeing as this will not be that large as of now. I believe that 
it would be overkill to have Redux at this time. 

I'm even thinking if I even need a submit button at this point. if it's not to expensive to hold onto the full text and search it I can use the debounced
search term function to search the text and have it return a list of things dynamically. If this is going to be a good user expereince that's what I would want
