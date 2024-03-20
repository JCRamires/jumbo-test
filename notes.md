# Notes

These are some notes with questions or remarks that I had while doing the test

## General

- I had some trouble turning off dark mode even after setting preference to `'light'`, to not waste much time on this I decided on adding `definePageMeta` forcing each page to be in light mode.
- To save some time used the same json with all the stores for the testing, normally I would create some fake data so that it would be easier to test

## Github actions

- The deployment is on vercel and it has zero configuration so theres no need to create anything, but I created an action that runs the tests when a new pull request is created.
- [Link to pull request that breaks tests](https://github.com/JCRamires/jumbo-test/pull/2)

## pages/index.vue

- Its not clear to me when to use `ref` and when to use `reactive`, I find documentation using both to do the same thing, storing state, I'm sure with more time I can understand the difference better but since I'm on a time constraint I left both uses there.
- I'm getting a typescript error telling me `data` can be null, I'm not sure how to handle that in Vue. Do I use a `v-if` checking if `data` is null and nested inside I `v-if` again checking if `data.stores.length > 0`? I assume this is the wrong choice so I left it with the error.
- Pagination and search are working via url query string too (try this url: `http://localhost:3000/?p=1&q=Eindhoven`), but I could not figure out how to update the url as you use the app.
