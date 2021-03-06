# Project 2: Full-Stack Application

Live application: https://chrxtina.github.io/paisel-client/

Back-end repository: https://github.com/chrxtina/paisel-api

## About

Paisel is an anonymous thought sharing app that gives users an outlet for their thoughts as well as provides a community whereby users may read each others thoughts, interact through polls and, in a sense, not feel alone
(fr. *pas seul*).

## Features

- User Authentication: sign-up, sign-in, sign-out, and change password
- Create and view all or own thoughts
- Add poll question and answers to thought post
- Edit and delete own thoughts
- Vote on polls
- View poll results

## Technologies Used

- Front-end: HTML/SCSS/Sass, Javascript, Bootstrap, AJAX, jQuery, Handlebars.js
- Back-end: Ruby on Rails

## Planning

- Created wireframes and user stories
- Collected resources like browser and API templates
- Discussed approach with instructors and peers

## Development Process

After installing both the browser and API templates and making sure that I had all of the necessary files created and organized, I set up User Authentication on the front end since it was already set up on the back end. Then, I moved to the back end API and generated a scaffold of Thoughts. After configuring the Thoughts Controller to make it protected and only allow certain actions depending on data ownership, I tested all of the actions through curl requests. Once I knew that all of the API endpoints worked, I added all of the Thought features to the front end. Finally, once all of the events functioned successfully, I worked on layout and styling of the user interface.


## Unsolved Problems and Next Steps

- Not responsive
- Code not completely DRY
- Add Pagination
- Include a Username instead of displaying 'User id'

## User Stories
- As a user, I want a form to create a thought post.
- As a user, I want an index for 'homepage' to view all users posts.
- As a user, I want my posts to show option links for editing and deleting my posts.
- As a user, I want an option to vote on polls.
- As a user, I want a feature to view poll results.

## Wireframes
https://drive.google.com/file/d/0B9I6LEzstvUqWE9KMzJxMzdNNGs/view?usp=sharing

## Entity Relationship Diagram
https://docs.google.com/drawings/d/1hva3JKkg5KSVhLwGxbQvC_kXQXccK6X-kJP34JxwlEs/edit?usp=sharing
