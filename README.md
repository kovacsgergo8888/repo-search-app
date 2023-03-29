# Repo search app #

Search repos on Github.

## Used libraries

* [Vue.js 3](https://vuejs.org)
* [Vuetify 3](https://next.vuetifyjs.com/en/getting-started/installation/) for the material design components
* [Pinia](https://pinia.vuejs.org) for state management
* [axios](https://axios-http.com) to make http requests
* [Vitest](https://vitest.dev) for testing
* [Vue datepicker](https://vue3datepicker.com) because Vuetify 3 doesn't have a date-picker (yet)

## Running the app

Build the docker image:

```shell
$ docker build -t repo-search-app .
```

Then run it. Replace the port, if the 80 is already occupied

```shell
$ docker run --rm -p 80:80 repo-search-app
```

## Development

Run the dev `npm` command, then open http://localhost:3000

```shell
$ npm run dev
```

## Tests

Run the test `npm` command to get the results.
```shell
$ npm run test
```

### Writing tests

Run `npx vitest` to get an infinite test running. The cli will rerun tests every file modification.