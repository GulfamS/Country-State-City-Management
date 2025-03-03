In this project I build a Country, State and City Management App by applying the concpets that I have learned in my learning.

### Set Up Instructions
Download dependencies by running npm install
Start up the app using npm start

### Implementation Files

Use these files to complete the implementation:

src/App.js
src/App.css
src/components/CityList/index.js
src/components/CityList/index.css
src/components/CountryList/index.js
src/components/CountryList/index.css
src/components/StateList/index.js
src/components/StateList/index.css

### Colors
red, #ffffff, #212121, #FF7043

### Font Families
Roboto

### Completion Structure
## Functionality to be Added
### Country Management
• Add a Country: 
o The user should be able to add a new country using a button to trigger a  prompt. 
o Initially, the user can add a country without specifying any states.

• Edit a Country: 
o The user should be able to edit an existing country name by triggering an  edit option from the UI. 
o A confirmation dialog should appear before updating a country.

• Delete a Country: 
o The user should be able to delete a country. 
o When a country is deleted, its associated states and cities should also be  deleted. 
o A confirmation alert should appear before deleting a country.

### State Managegment
• Add a State: 
o States can be added to a specific country. 
o The user can choose to add the state now or add it later (via an "edit"  flow). 
o States should be linked to a specific country. 

• Edit a State: 
o The user should be able to edit the name of an existing state. 
o A confirmation dialog should appear before updating a state. 

• Delete a State: 
o The user should be able to delete a state. 
o Deleting a state should remove all associated cities. 
o A confirmation dialog should appear before deleting a state. 

### City Management 
• Add a City: 
o Cities can be added under a specific state. 
o The user can add a city either during the state creation process or later via  an "edit" flow. 

• Delete a City: 
o The user should be able to delete a city under a specific state. 
o A confirmation alert should appear before deleting a city. 
