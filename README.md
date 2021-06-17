# TripBook

![TripBook Logo](https://user-images.githubusercontent.com/50939480/122393496-8fd1d380-cf92-11eb-94c3-f8f20113f916.png)

A web application for travellers to share their travel stories as a timeline. It is a fusion of a travel blog and social media platform.

In this app, travellers can create a timeline and seamlessly track their trip while sharing with other travelers who may or may not have visited that place. In this way visiters can ensure they do not miss out creating precious memories of that place.

![License](https://img.shields.io/github/license/Erroders/TripBook?style=flat-square)

## Demo

Working demo is available on this [link](https://tripbook.tk).

## Features

- Sign in with Google
- Tripper Profile
- Search other Trippers
- Follow Other Trippers
- Create Trips and upload Moments
- View Complete Trip Timeline
- Cross platform
- Progressive Web App (PWA)

## Wireframes

<!-- <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOtdRVVifZX2WzyifdX0Gjf%2FTripBook%3Fnode-id%3D26%253A4%26scaling%3Dscale-down%26page-id%3D26%253A2" allowfullscreen></iframe> -->

![Wireframe Screenshot](https://user-images.githubusercontent.com/50939480/122399696-a67b2900-cf98-11eb-824e-1b289c57f7b2.png)

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Tech Stack

**Client:** React, TailwindCSS  
**Backend:** Firebase  
**Database**: Firestore Database  
**Authentication**: Firebase Authentication  
**Storage**: Firebase Storage

## Run Locally

Clone the project

```shell
  git clone https://github.com/Erroders/TripBook
```

Go to the project directory

```shell
  cd TripBook
```

Install dependencies

```shell
  yarn install
```

**Create a Firebase project and add API ENV Variables listed below**  
Start the server

```shell
  yarn start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`

`REACT_APP_AUTH_DOMAIN`

`REACT_APP_APP_ID`

`REACT_APP_PROJECT_ID`

`REACT_APP_STORAGE_BUCKET`

`REACT_APP_MESSAGING_SENDER_ID`

## Project Structure

```shell
TripBook
│   .eslintrc.js
│   .firebaserc
│   .gitignore
│   .prettierrc.js
│   craco.config.js
│   firebase.json
│   firestore.indexes.json
│   firestore.rules
│   LICENSE
│   package.json
│   README.md
│   storage.rules
│   tailwind.config.js
│   tsconfig.json
│   yarn.lock
│
├───public
│       404.html
│       favicon.ico
│       index.html
│       logo-min.png
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│
└───src
    │   App.tsx
    │   index.css
    │   index.tsx
    │   react-app-env.d.ts
    │   service-worker.ts
    │   serviceWorkerRegistration.ts
    │
    ├───assets
    │   │   adventure_map.svg
    │   │   destinations.svg
    │   │   googleIcon.svg
    │   │
    │   └───themes
    │           variables.ts
    │
    ├───components
    │   ├───AddTrip
    │   │       CreateTrip.tsx
    │   │
    │   ├───EditTrip
    │   │       XBackButton.tsx
    │   │
    │   ├───Explore
    │   │       UserComponent.tsx
    │   │
    │   ├───General
    │   │       ClickButton.tsx
    │   │       FollowButton.tsx
    │   │       LinkButton.tsx
    │   │       Loading.tsx
    │   │
    │   ├───HomeFeed
    │   │       TripBox.tsx
    │   │
    │   ├───Layout
    │   │       Footer.tsx
    │   │       Header.tsx
    │   │
    │   ├───Login
    │   │       FillDetails.tsx
    │   │
    │   ├───ProfilePage
    │   │       ListOfUsers.tsx
    │   │       UserStats.tsx
    │   │       UserTrips.tsx
    │   │
    │   ├───Route
    │   │       PrivateRoute.tsx
    │   │
    │   └───Trip
    │           CoverImage.tsx
    │           EndCredit.tsx
    │           Fab.tsx
    │           Post.tsx
    │           TripDetails.tsx
    │           UserIndicator.tsx
    │
    ├───contexts
    │       LoadingContext.ts
    │       LoginedUserContext.ts
    │
    ├───layouts
    │       MainLayout.tsx
    │
    ├───models
    │       TripData.ts
    │       UserData.ts
    │
    ├───utils
    │   │   getTripData.ts
    │   │
    │   ├───controller
    │   │       PostController.ts
    │   │       TripController.ts
    │   │       UserController.ts
    │   │
    │   └───firebase
    │           firebase.ts
    │           firebaseUtils.ts
    │
    └───views
            AddView.tsx
            EditProfile.tsx
            EditTrip.tsx
            Explore.tsx
            Followers.tsx
            Followings.tsx
            HomeFeed.tsx
            LoginPage.tsx
            Notifications.tsx
            Trip.tsx
            UserProfile.tsx
```

## Roadmap

Features to be added in the future

- Get Notifications when a new trip is created
- Improve search algorithm
- Connect and chat with other Travellers
- Create a Travel Book out of your trips
- Improve privacy through Settings
- Trip and Moment templates

## Contributing

Contributions are always welcome!

## License

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)

## Authors

- [@akathecoder](https://www.github.com/akathecoder) - Wireframing, Frontend and PWA Integration
- [@rg12301](https://www.github.com/rg12301) - Backend (Firebase), Authentication
- [@nonitmittal](https://www.github.com/nonitmittal) - Frontend , Backend Integration

---
