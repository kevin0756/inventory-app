Configure Database:-
Start MongoDB by navigating to your mongodb installation in the file system(no need if path is configured). Then use command prompt and type mongod.exe
Open MongoDB compass and create a normal connection running on the default port 27017. There is no need to provide authentication and other particulars.
Create a database named InventoryDB and give it a collection named inventories.

Pre requisites before setting up the app:-

Make sure you have globally installed nodemon(for auto building) and create-react-app(just in case, although not required to run the app).
Install these two packages globally by running npm install -g nodemon create-react-app

Setting up the app:-

Unzip the archive inventory-app.zip.
Navigate to the folder inventory-app/client. Open an instance of command prompt in this directory and run the command npm install.
Once all the packages in the client are installed type cd .. to move to the previous directory, that is, inventory-app. Again run npm install.
Now run the server by typing npm run dev. The app should start.

Miscellanous:-
Please avoid using the browser back button for navigation. Instead use the custom back button provided in the UI.

Running tests:-
Tests have been configured in the inventory-app/client/src/__snapshots__ folder. The main test file exists in inventory-app/client/src/App.test.js.
To run the test cases navigate to inventory-app/client and run the command npm test.


