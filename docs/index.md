## Introduction to the Guessing Game Project

Greetings!

You are embarking on the beginning of your programming journey. How exciting! In this workhsop, you will be creating a Guessing Game. This game has simple rules:

  - A number between 1-100 will be randomly generated and is the winning number.
  - The player inputs their guess in a text input field and then submits their guess.
  - If the number they submitted is the winning number, they win! Otherwise, they are allowed to try again.
  - The game should give the player a hint after each guess, helping them know whether to guess lower or higher, and how close they are.
  - After 5 unsuccessful guesses, the game is over and the player loses.

Take a moment to open up and study [the finished product]().

While simple, there's A LOT of logic that you must figure out before the game will work. Games can be deceptively difficult. Additionally, we want to make sure our game is also visually pleasing to our player! We are not using any special tools or frameworks in this workshop--that meanst this game will be made FROM SCRATCH, which will give you an introduction to the basics of using HTML, CSS, and JavaScript.

To get started, download the starting code from [this link]().

TODO DIRECTIONS ON OPENING THE STARTER CODE
-visual studio code
-open up the folder so you can see all of the things
-right click on your index.html and open it with your favorite browser

## CSS Review - Tags, Ids, and Classes

In Visual Studio Code, or VSC, double click on the `style.css` file. Inside of this file you should see a list of CSS rule-sets. A CSS rule-set consists of a selector and a declaration block: The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.

You are going to see a lot of CSS that is unfamiliar to you. THAT IS OK. You will not be creating or modifying the CSS declarations in this workshop, just putting it all together!

The selectors inside our file will either be selecting a _tag_ (such as ul), a _class_ (such as .guess) or an _id_ (such as #app). A tag is a type of html element. For example, our `style.css` includes the following code:

```css
ul {
    list-style: none;
    padding: 0;
}
```

This means that the declarations `list-style: none;` and `padding: 0;` will be applied to ALL of the ul elements, or unordered lists in our html. We don't have to change anything!

However, right now our styles are not being applied! When our HTML is being parsed and loaded by our browser, it doesn't even know that the CSS exists! We need to tell it where to find our styles. Open up your `index.html` file and find line 7. This is where we are going to _link_ to our CSS. Type the following into line 7, and save the file:

```html
<link rel="stylesheet" href="style.css" />
```

Now, refresh your browser page. You should see your list styles change! There should be no more bullets. If you see bullets still, raise your hand to get help.

Now let's review ids and classes. An id is an identifier given to a specific element in our html. For example, our `style.css` includes the following rule-set:

```css
/* For the div that contains our full application/game */
#app {
    width: 60%;
    margin: 50px auto;
    background-color: rgba(256, 256, 256, 0.5)
}
```

This means "Find the html element with the id of 'app' and apply these styles to it". At the moment though, we don't have an element with the id of 'app'. Remember, an Id is a specific identifier. There should only ever be ONE element with the id of 'app'. Let's add it now!

In our `index.html` find the first `<div>` element after the `<body>` tag. This is going to have the id of 'app', because it contains our entire application. When we add the id 'app' to this div, it will look like this:

```html
...

<body>
  <div id="app">
...
```

Classes work almost the exact same way as ids--the big difference is that classes can be added to many different elements, instead of just one.  In our `style.css` file, there are two rule-sets that use classes as the selectors. For example:

```css
.center {
    text-align: center;
}
```

To add the class 'center' to an html element, we add a 'class' attribute to our html tag: `<div class="center">`


## Applying Styles to our Document

*YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT*

Most of our CSS rule-sets are applying rules to HTML elements with specific classes or ids. But those Ids and classes are not in the HTML in our index.html file! Add the appropriate ids and classes to your HTML so that the styles will show up. The comments above each rule-set give you a hint where the class or id should go inside your game's HTML structure.

Remember that you need to save your files AND refresh the page in your browser in order to see any changes. *You should only be modifying `index.html` during this exercise, NOT `style.css`.*

Remember to add `<link rel="stylesheet" href="style.css" />` to your index.html before continuing.

<details>
<summary>Click here to see the solution--Make sure you try on your own first!</summary>
```html
```
</details>

## Adding a Background Image

## JavaScript Review - Functions
## JavaScript Review - Conditional Logic
## Running Our JavaScript Code
## Putting It All Together

## Taking Your Game Home
