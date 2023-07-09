# Front end Engineer Challenge

Submit all the answers by creating a **private** GitHub repository and sharing it with **reedsyapplications**. Alternatively, you can submit a zipped folder with all the answers.
Your submission should include markdown and code and each answer should be in it's own folder.

The estimated time to accomplish every task sits between 10 and 15 hours, depending on your experience.


## 1. About you

Tell us about one of your commercial projects with Vue.js.

During the past 3 years I've been heading the frontend of a very big project inside Booking.com: migrating the Experimentation Platform from a legacy to a modern tech stack, also with a modernisation of design and new concepts to enforce experimentation quality.
The decided new tech stack revolved around Vue.js, as a stable, easy to learn and performant frontend framework and GraphQL to mediate the data from the many microservices we consume.
Since the beginning I was the only frontend engineer in the team, so I was given a lot of space to propose and define the best practices that our team should follow, so I had to learn all the depths of the framework very quickly.
Most recently, after the functional migration, we set out to upgrade Vue to version 3 and to improve the overall performance of the platform, suffering from the downsides of microservices. I was at the forefront of those two projects, which were successful, meaning that we were the first team in Booking.com to adopt Vue 3, so I stood out as a reference point in the company for migration and new functionalities questions and discussions, and we were able to reduce the load time from an average of 12 seconds to an average of 5 seconds, due to well management of GraphQL queries and caching, together with the use of HTTP/2 and some frontend performance devices such as scrolling window and lazy loading.


## 2. General

##### 2.1. What kind of front end projects do you enjoy working on? Why?
I generally like to work on projects that I can own and drive the decisions, proposing new ways of doing things. I consider myself a very versatile frontend engineer, as I am comfortable with technical infrastructure, DX, visual implementation, performance and test automation.

##### 2.2. Which are your favorite features of HTML5? How have you used them before?
Definitely one of my favourites is Local Storage, which allows the websites to have even more customised information, bringing it closer to the end user. I have used it as a quick sleight-of-hand replacement of database, for storing products the user has saved in the wishlist, in one of my previous companies, Stylight. It is such a smart and easy to use feature, and it's intrinsically tied to the client, it should be used more, to leverage these personalisation capabilities.

##### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.
`innerHTML` is usually unsafe, as it literally allows insertion of text that will only later be parsed, which can lead to XSS attacks, and it has a bad performance - as the text that's placed in it is only later parsed, it means that the browser needs to recalculate and accommodate the new children.
On the other hand, `createElement` allows creating specific elements directly in the DOM, so there's no need for parsing, it's directly appendable. And because it creates specific elements and they are not parsed by the browser, the text that's passed to it gets output as only text, having no XSS effect.
For the cases in which there's the need to create several elements at the same time, such as the children of a `ul` element, we can use `createDocumentFragment` to append all children and only sending it once to the current DOM.

##### 2.4. Compare two-way data binding vs one-way data flow.
Two-way data binding happens when the data processed by the Javascript code is tightly coupled with the input element that displays it, allowing for user input to be immediately reflected in the origin, as opposed to one-way data flow, in which data inserted into the DOM (for example into an `input` element) doesn't get changed until it's explicitly read by an event or another part of the code. Two-way data binding is a mere syntactic sugar for a well-structured event system, but it allows the developer to abstract from having to set it up and focus on the data that should always be fresh.

##### 2.5. Why is asynchronous programming important in JavaScript?
Javascript is a single-threaded language in its core concept. It has, nevertheless, grown a lot during the last 10 years, with more functionalities and more need for a dynamic and responsive web page. Also, there has been the advent of microservices, which means that everything your page does depends on some responses of some requests, which takes time to retrieve. Asynchronous programming is the response, based on Javascript's event loop, to have code that will definitely take time to process wait a bit and allow other synchronous code to execute, making it unblock potential important tasks.


## 3. Styling

Given the HTML file **front-end/q3/q3.html**, implement the styling so the page matches the image below.

![Styling](./front-end/q3/images/result.jpg "Styling")

#### Bonus
- Implement styling rules that consider different screen sizes.

**Notes:**
- The footer should stick to the bottom when scrolling;
- You can, and should, use a CSS pre-processor, such as SASS or LESS;
- Avoid changing the template, your answer should only style the given HTML.


## 4. SPA

Using Vue.js, implement an SPA that gets information from a server (explained below) and has the following pages:


### Books list

Display all available books returned from the API.
- Synopsis should be truncated at 200 characters.
- Book's title and cover should link to the book's individual page.
- Though the upvote functionality is not required, the upvote state should be represented.

![Books list](./front-end/q4/images/books-list.png "Books list")


### Book page

Display a single book information, highlighting the cover and displaying the full synopsis.

![Book page](./front-end/q4/images/book.png "Book page")

The upvote functionality is **not** required, the UI should only reflect if a book has been upvoted yet or not.
For this question, you **don't** have to replicate the example screens above, feel free to implement any design that you'd like.


**Important notes:**
- Do not change or submit the server code, your answer should focus on the client application only;
- Add test coverage as you see fit;
- You may use TypeScript instead of plain JS;
- Use a CSS pre-processor;
- Your app must be responsible for all of it's dependencies and they should be installed via `yarn` or `npm install`. The app must run by using either `yarn start` or `npm start`.


#### Bonus

- Implement text search on the books list (for title and synopsis)
- Add pagination on the books list
- Add a comments section on the book page


### Server

In order to solve this problem, a simple server is provided, which you should use to get the data.
Head into `front-end/q4/server` and install the server dependencies using:

```bash
yarn install
```

or

```bash
npm install
```

Run the server using:

```bash
yarn server
```

or

```bash
npm run server
```

The server should be running on port `3000`.

#### Available routes

#### http://localhost:3000/books

Returns a list of books, with their info.

#### http://localhost:3000/books/SLUG

Returns the book information for the given SLUG (404 otherwise).
