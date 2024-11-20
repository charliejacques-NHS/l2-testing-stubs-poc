# NHS Native App L2 Testing Mocks

This is a small `nodejs` server which serves html files at `web.local.bitraft.io:3000`

## Steps to Run

Install the dependencies

```sh
npm install
```

Start the server

```sh
npm start
```

If you make changes to any html, javascript or css files you will need to stop and start the server

## Running other mocks

This is only part of the system to run the NHS login stubs with Mockoon follow the following steps in the `nhsapp` directory

1. Run `git checkout feature/nhso-33668-mock-server` in the `nhsapp`
2. Run `make build-mockoon-stubs` in the root of the `nhsapp` folder
3. Once that's done run `make run-mockoon-stubs`
   - You should now have all the mockoon stubs and necessary API containers running
4. In a separate terminal navigate to the `web` folder
5. From there run `npm install && npm run docker-dev`
   - You should now have the web running locally as well
6. Navigate to your local [web](http://web.local.bitraft.io:3000/) and click the continue button
7. You should now be presented a screen with a few buttons on it.
   - Press `"Switch to user with no GP record data"` to log in as a user with no data set up
   - Press `"Switch to user with full permissions"` to log in as a user with mock data set up
