# TTT Profile Page

This project shows a profile section based on TTT's requirements.

This is built using `Vite` `React.js` `Typescript` `Tailwindcss`.

| Deployment |
| ---------- |
|   Vercel:  <a href="https://ttt-assignment-page.vercel.app" target="_blank">Click to view</a>  |

## Components

`4 Parent Components`: NavSection, PostSection, ProfileSection, DividerSec

`1 Layout`: Wrapper.tsx

`1 JSON`: Data.json

`2 Assets`: Fonts, Images

## Plugins Used

`iconoir-react` is a Icon library that is used in the application.

`Tailwindcss` for all styling needs.

**_Responsive on_ mobiles, tablets, desktops.**

### Nav Section

Implementation of the navigation bar is achieved in this section. It's very interesting to note that the web page doesn't actually have a customized navigation bar for smaller screens though works on all devices.

### Profile Section

Profile Section has `7` sub components each made to hold different content. At the core, this section has `3` primary sub sections to display data.

`Profile.tsx`: Implements the cover picture, profile picture, user's name and other meta tags.

`ProfileBio.tsx`: Implements the "About" part of the user.

`ProfileBioIcons.tsx`: This component is designed with much typesafety. The icons and the values contained with then are implemented here, which are passed via props from `ProfileBio.tsx`.

`Stats.tsx`: Stats is a small component to foster the data of followers and following.

### Post Section

Post section has one single major component that holds data such as post's headline, content, author, read time and the date-time of the post.

### Layout

`Wrapper.tsx` is the layout component. Since, the project has one page, the layout component is a single page application.

### Icons and Fonts

The uniformity of the icons as achieved via `BioIconProp.tsx` and `StatusIconProp.tsx`.

**Inter** has been used as a font. The font files reside locally in the `./src/assets/font/Inter`.