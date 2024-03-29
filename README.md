# meet

### User Stories

1. As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

2. As a user,
I should be able to Show/hide event details
So that I can control the amount of information being shown

3. As a user,
I should be able to specify the number of events
so that I can limit the amount of information shown to easily find a certain event

4. As a user,
I should be able to use the app when offline
so that I can have the event information available at all times

5. As a user,
I should be able to add an app shortcut to the home screen
so that I can easily access the app

6. As a user,
I should be able to display charts visualizing event details
so that I can view the information in an organized manner


### Scenarios 

*Scenario 1*

When user hasn’t searched for a specific city, show upcoming events from all cities.

**Given** user hasn’t searched for any city;

**When** the user opens the app;

**Then** the user should see a list of upcoming events.


*Scenario 2*

User should see a list of suggestions when they search for a city.

**Given** the main page is open;

**When** user starts typing in the city textbox;

**Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

*Scenario 3*

User can select a city from the suggested list.

**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;

**When** the user selects a city (e.g., “Berlin, Germany”) from the list;

**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

*Scenario 4*

User has clicked to expand show more details of the event. 

**Given** user has clicked to expand the details of an event.

**When** user clcks on the expand button.

**Then** the user should see all of the details of an event.

*Scenario 5*

User has displayed on the page a specific number of events.

**Given** user has selected a city from the list

**When** user clicks on the city.

**Then** the user should see the a list of a specific number of events.

*Scenario 5*

User has the app installed but no internet connection.

**Given** the user has opened the app

**When** the user opens the app

**Then** the user should be able to look at the lists of events while offline

*Scenario 6*

User can install the meet app shortcut on their mobile device.

**Given** the user has selected the "create shortcut" button

**When** the user clicks on "create shortcut"

**Then** the user should have access to a shortcut to the app on their homescreen

*Scenario 7*

Show a chart with the number of upcoming events in each city.

**Given** user has chosen an event but is not sure about the details of this event

**When** user selects the icon to show the table visualization

**Then** user will see all information about the event in an organized table

### Serverless Functions

In the Meet App, serverless functions will play a very important role in the authorization to access public calendar events from the Google Calendar API. Users will need to be authorized to access the event data from the React App. Serverless functions will be used to facilitate the authorization process as it is a more efficient way than creating and maintaining a backend server just for this application. The serverless function will generate the access tokens to be able to securely access the Google Calendar API.

getAuthURL: GET - https://bz3tv3bz0e.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url
GetAccessToken: GET - https://bz3tv3bz0e.execute-api.us-east-2.amazonaws.com/dev/api/token/{code} 