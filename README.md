Example repository for people who want to have multiple microfrontends coexist within a single page.

## Local development -- all at once
It is preferred to only run one app at a time. But if you need to run them all locally, you can do so with the following instructions

```sh
# First terminal tab
cd container
npm install
npm start
```
```sh
# Second terminal tab
cd child1
npm install
npm start
```

```sh
# Third terminal tab
cd child2
npm install
npm start
```

```sh
# Fourth terminal tab
cd navbar
npm install
npm start
```

Go to http://localhost:4200 in a browser.
