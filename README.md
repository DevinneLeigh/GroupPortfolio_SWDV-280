## Link to live site
`https://devinneleigh.github.io/GroupPortfolio_SWDV-280/`

## Access

You'll first need access to the repo. Send me your GitHub username and I'll add you as a collaborator. 

You'll get an email from `DevinneLeigh <noreply@github.com>` with the subject `DevinneLeigh invited you to DevinneLeigh/GroupPortfolio_SWDV-280`. You need to accept that invitation to make commits directly to the repo.

## Cloning the code

To get the code on your local environment so you can code with your IDE of choice, you need to clone the repo. 

> *Note: If you fork the repo, you'll create extra steps for yourself later. Instead of pushing commits directly to the repo, you'll be creating a copy into your account, have to push a branch up, create a Pull Request that merges into the forked repo. Then someone with access will have to merge it. If you clone the repo, then you just commit and push.*

Click on the `Code` dropdown button. Copy the repo URL. 

<img width="2060" height="952" alt="image" src="https://github.com/user-attachments/assets/5d1a329f-3930-405f-b447-dc42e4ec145c" />


Next you have a couple different ways to clone it. 

### A) Command Line

Open a terminal. `cd` to the directory you want to clone the repo to, and run

```bash
git clone https://github.com/DevinneLeigh/GroupPortfolio_SWDV-280.git
```

Now open it in your code editor.

### B) VSCode

When you open VSCode, under "Start", you'll see the third option is to Clone a repo. Paste the Repo URL in and your good to go.

<img width="2362" height="832" alt="image" src="https://github.com/user-attachments/assets/c1fd3c05-8687-4d9a-a410-c64266b63802" />

### C) Other editors

Most editors have a GUI way to clone a repo. 


## Pushing Changes

You can use GUI tools to manage and push your changes. If you don't have any GUI tools set up for this, it's pretty simple to do from the command line. 

First, make your changes in your editor. 

If you are in VSCode, the built-in terminal will already have the working directory set to correctly. 

If you use a terminal, then `cd` to the project.

```bash
cd ./GroupPortfolio_SWDV-280
```

After that, you can list the files that have been changed with 

```bash
git status
```

Then you can add specific files,

```bash
git add index.html about.html
```

or you can just add everything that has changes. 

```bash
git add .
```

Then write a commit message.

```bash
git commit -m "Description of my changes."
```

And finally, push the commit.

It's a great idea to push your code often. Try not to leave for the day without pushing.

```bash
git push
```

## Pulling other peoples changes

Keeping the code up to date with other peoples changes will help prevent merge conflicts from happening.

After you push, and before you start something new, pull down changes with

```bash
git pull
```


## How to edit the css
- Only edit files inside `assets/scss/`
- Never manually edit files inside `assets/css/`

If you don't already have Sass installed, enter in the terminal
```bash
npm install -g sass
```

Now if you want to make style changes, you can do so in the `assets/scss/main.scss` file. To apply your changes, you will need to compile them to css. 

To compile your changes once, enter in the terminal
```bash
sass assets/scss/main.scss assets/css/main.css
```

If you want your changes to be continuously updated, enter in the terminal
```bash
sass --watch assets/scss:assets/css
```
To stop watching your changes, press `Ctrl + C` in the terminal. Make sure to always stop watching before closing the project. 

## CSS color scheme utility classes
### Background color classes
`bg-light` `bg-sage` `bg-peach` `bg-coral` `bg-plum` `bg-mocha` `bg-dark`
### Text color classes
`text-light` `text-sage` `text-peach` `text-coral` `text-plum` `text-mocha` `text-dark`

<img width="700" height="300" alt="colors" src="https://github.com/user-attachments/assets/d16c20ac-7e9c-4e76-abb4-fe3e9c370d6f" />





