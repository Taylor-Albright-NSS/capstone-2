# Capstone: Galvadia Enemy Compendium

This is a support application used to create and store representations of enemies for my game, Galvadia. It allows me to create enemies and test their values for in-game scaling. It includes a combat simulator that tests an enemy's damage vs a player as well as a player's damage vs an enemy.

### ** PostgreSQL is needed to run this application! **

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## InstallationTo run this project locally:
1. Clone the repository.
2. Cd into the client directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev`. This will open a window in your browser. It will not be working until you complete the next step.
5. Open a new terminal window and cd into the root folder.
6. Start the development server through your debugger.
7. Refresh your browser with the localhost url (localhost:5173 by default)
8. Good to go!


## Features / How To Use

1. **Logging in**
   - You can create your own account by registering, however, only the administrator has admin privileges. Once you create your own account, you can log in with the administrator account and promote yourself to admin through the Admin panel (linked at the top in the navbar)
   - To log in as the default administrator, use these credentials:
   - Email: admina@strator.comx
   - Password: password

### Main Views:

1. **Enemies**

   
   <img src="client/public/assets/images/screenshots/enemy_view.png" alt="enemy view screenshot" width="400" />
   - You can view all created enemies in this view.
   - You can select any enemy by clicking on its portrait
   - Only administrators can edit or delete an enemy
3. **Enemy Details**

   
   <img src="client/public/assets/images/screenshots/enemy_details_view.png" alt="enemy details screenshot" width="400" />





