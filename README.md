# vue-starter

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Style

This codebase uses [Prettier](https://prettier.io/) (with a few adjustments in `.prettierrc`) and loosely follows the [Vue Style Guide](https://vuejs.org/v2/style-guide).

### Deployment

https://cli.vuejs.org/guide/deployment.html

### Environment variables

Use `.env`, `.env.development`, `.env.production`, and `.env.test`.

- To access environment variables in this codebase, use `process.env.VUE_APP_MY_ENV_VAR`.
- Make sure to preface environment variables that you need access to with `VUE_APP`.
- For production environment variables that are sensitive, be sure not to add them to `.env.production` because that is a security vulnerability.
- For more information, see https://cli.vuejs.org/guide/mode-and-env.html.

### Userlike chat

The only code is the `<script>` below `</body>`.

- If you don't want this chat then just get rid of this code.
- If you do, sign up with Userlike and paste in the correct `<script>`.

### Google Analytics

The code to set up Google Analytics is in the router and uses `vue-gtag`.

- It's only being loaded in production.
- To finish setting it up you'll need to sign up with Google Analytics, and then set the `VUE_APP_GTAG_ID` environment variable in production.
- `CookiesNotice` is being used for GDPR compliance. It utilizes LocalStorage.

### Home page

The template is based off of Julian Shapiro's advice for [how to construct landing pages](https://www.julian.com/guide/growth/landing-pages).

From his guide:

> Tip — If you don’t yet have noteworthy customers, provide your product for free to people at well-known companies. Then place their company logos on your site if they wind up using you.
