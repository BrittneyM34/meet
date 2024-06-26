﻿# Meet App
 
 # Project Description
 This is a React Application that uses a Google Calendar API, OAuth2 authorization flow and AWS serverless functions

## Key Features 
- **Filter Events by City**
- **Show/Hide event Details**
- **Specify Number of Events**
- **User the App When Offline**
- **Add the App Shortcut to the Home Screen**
- **Display Charts Visualizing Event Details**

### Serverless Functions

In the Meet App, serverless functions will play a very important role in the authorization to access public calendar events from the Google Calendar API. Users will need to be authorized to access the event data from the React App. Serverless functions will be used to facilitate the authorization process as it is a more efficient way than creating and maintaining a backend server just for this application. The serverless function will generate the access tokens to be able to securely access the Google Calendar API.

getAuthURL: GET - https://bz3tv3bz0e.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url
getAccessToken: GET - https://bz3tv3bz0e.execute-api.us-east-2.amazonaws.com/dev/api/token/{code} 
getCalendarEvents: GET - https://bz3tv3bz0e.execute-api.us-east-2.amazonaws.com/dev/api/get-events/{access_token}
