# Shrug

#### A Website to ask questions and give answers

#### By **Clayton Collins**

## Description

This site allows the user to post questions they might have, as well as descriptions to those questions. They can always come back and edit them later too. Users can also post answers.

##Planning

1. Config
* Firebase - store questions and answers
* Bower/bootstrap - aid in styling

2. Specs
* collect and store questions
* display questions on front page
* display individual questions in expanded format on their own page
* collect and store answers to specific questions
* display answers to questions on question page
* delete questions on confirmation
* delete answers on confirmation
* update questions

3. Integrations
* Basic ember setup
* navbar for all pages that connects to home
* Routes for home (index.hbs) and questions (question.hbs)
* Model for questions
* Model for answers
* component to display only questions and authors
* component to display answers to specific questions

4. UX/UI
* Format questions to appear clearly, as well as identify the author
* clean simple styling

5. Polish
* perhaps add login feature and automatically assign authorship to person logged in
* allow logged in users to delete their own questions
## Setup/Installation Requirements

* Clone this repository
* Run `npm install` and `bower install` in the project directory
* Run `ember serve` to start the development server
* Navigate to localhost:4200


## Known Bugs

Login is not working for some reason - it is having trouble connecting to firebase


## Support and contact details

Let me know if you run into any issues or have questions, ideas or concerns.  Contact me or make a contribution to the code via pull request.

## Technologies Used

javascript, ember, html, css
### License


Copyright (c) 2017 **Clayton Collins**
