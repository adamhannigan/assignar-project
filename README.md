# Angular2Mosaic

## Run application

-npm install

-npm start (or ng serve if using angular cli)

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

First time using angular 2 unit testing - feedback greatly appreciated

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Challenges

Sorting large amounts of images from imgur API gallery - solution > caching leftover urls

Creating mosaic - had to brush up on Canvas API

Unit testing - first time writing unit tests for Angular 2 

## Gaps in Solution

-You'll notice the mosaic is not perfect and I did not use a rounding algorithm. Did not want to spend a lot of time on this since I believed this was not the core component being tested

-Unit testing > new to unit testing so still learning

## Areas for improvement

-If I had the time I would of moved the image processing/mosaic algorithm into a service worker. This would improve efficiency and free the UI.

-Styling - did the very minimal to make it work - would use range of frameworks/styleguides if more time

-Authorization > did not restrict any of the Angular routes 

-Pagination > allowing for more than just previous & next

-Unit testing
