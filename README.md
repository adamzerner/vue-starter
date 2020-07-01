# VueStarter

If you're starting a project, there are usually some standard things that you'll need: accounts, analytics, a contact page, etc. The idea with VueStarter is to provide you with all of this boilerplate.

Note: This repo is only for client-side code. For server-side code, it works in conjunction with [NodeStarter](https://github.com/adamzerner/node-starter). You can of course use a different backend as long as your backend responds to requests the same way.

## Getting started

### First steps

1. `git clone git@github.com:adamzerner/vue-starter.git your-apps-name`
2. `yarn install`
3. Set `VUE_APP_BASE_URL` to your API server in `.env.development` (eg. `localhost:3000`)
4. Make sure your API server (eg. [NodeStarter](https://github.com/adamzerner/node-starter)) is up and running

### [Prettier](https://prettier.io/)

If you want it:

1. Make whatever [adjustments](https://prettier.io/docs/en/configuration.html) you want to `.prettierrc`.
2. Make sure that you have a [plugin](https://prettier.io/docs/en/editors.html) set up with your editor.

If you don't:

1. Remove `.prettierrc`.

### SSO

If you don't want it:

1. Remove the relevant code in `@/views/Auth`.
2. Remove the code for `usingSSO` in `@/store/user.js` and `@/views/User/Account/Account.js`.

### Stripe for payments

If you want it:

1. Sign up and create a project.
2. Set `VUE_APP_STRIPE_CONSUMER_KEY` in `.env.development` to "Publishable key" at https://dashboard.stripe.com/test/apikeys.

If you don't:

1. `yarn remove @stripe/stripe-js`.
2. Remove `@/views/User/Purchase/Purchase.vue` or adjust the code to use whatever payment processing service you're using instead of Stripe.

### Google Analytics

If you want it:

1. Sign up.
2. Set the `VUE_APP_GTAG_ID` environment variable in production. Google Analytics is only being loaded in production so there's no point in setting the development environment variable.

If you don't:

1. `yarn remove vue-gtag`
2. Remove the call to `setUpAnalytics` in `@/router/index.js` and remove the `@/router/set-up-analytics.js` file.
3. Get rid of `CookiesNotice` by removing the code in `@/views/App/App.vue` and the folder in `@/views/App`.

### [Userlike](https://www.userlike.com/en/) chat

If you want it:

1. Sign up with Userlike and paste in the correct `<script>` above `</body>` in `@/public/index.html` in place of the Userlike `<script>` that is already there.
2. Make any adjustments you'd want in the Userlike dashboard.

If you don't:

1. Remove the Userlike `<script>` above `</body>` in `@/public/index.html`.

## Code overview

This project was created with [Vue CLI](https://cli.vuejs.org/) and makes heavy use of [BootstrapVue](https://bootstrap-vue.org/).

### Dev server

```
yarn serve
```

### Style

This codebase uses [Prettier](https://prettier.io/) (with a few adjustments in `.prettierrc`) and loosely follows the [Vue Style Guide](https://vuejs.org/v2/style-guide).

### Environment variables

Use `.env`, `.env.development`, `.env.production`, and `.env.test`.

- To access environment variables in this codebase, use `process.env.VUE_APP_MY_ENV_VAR`.
- Make sure to preface environment variables that you need access to with `VUE_APP`.
- For production environment variables that are sensitive, be sure not to add them to `.env.production`, because that could be a security vulnerability.
- For more information, see https://cli.vuejs.org/guide/mode-and-env.html.

### Deployment

See https://cli.vuejs.org/guide/deployment.html. Make sure to set your environment variables in production.

### Testing

I don't have any tests written write now but I included unit and E2E tests when setting the project up with Vue CLI, so the boilerplate code is there in `tests/unit` and `tests/e2e`. To run them, `yarn test:unit` and `yarn test:e2e`.

### SCSS

You don't have to import variables from Bootstrap into your Vue components before using them. `prependData: '@import "@/assets/variables.scss";'` in `vue.config.js` automatically does it for you.

You can override Bootstrap variables in `@/assets/variables.scss` or set your own. App-wide styles go in `@/assets/app.scss`.

## What it comes with

### Sign up with email

See `src/views/Auth` and `src/views/User`. All the code is there for standard stuff like:

- Registering
- Signing in
- Signing out
- Changing your password
- Resetting your password
- "Remember me"
- Updating your email address
- Client-side form validations (using [Vuelidate](https://vuelidate.js.org/))
- Displaying errors from the back end
- Changing the button text to something like "Submitting..." ([why](https://www.nngroup.com/articles/progress-indicators/))
- Show password functionality ([why](https://www.nngroup.com/articles/stop-password-masking/))

### SSO

It also comes with the ability to use Google, Twitter and LinkedIn for SSO.

### Route protection

If you want to make sure that, for example, the user is signed in before they can access the account page, use `meta.requiresSignedIn` like so in `src/router/routes.js`:

```
{
  path: "/account",
  name: "account",
  component: Account,
  meta: {
    requiresSignedIn: true,
    title: "VueStarter | Account",
  },
}
```

Here's how that works. In `src/router/index.js` there is a `router.beforeEach` hook. That hook calls `checkPermission` and redirects the user to a new route if they don't have permission to access the route they're trying to access.

There are a few predefined things in `src/router/check-permissions.js` but you'll probably want to add and use some of your own.

### Payments via Stripe

See `@/views/User/Purchase/Purchase.vue`. The boilerplate code allows you to purchase the basic plan or the premium plan, each as a one-time payment. `user.auth` starts off as `[]` but after you make a purchase, `user.auth === ["basic"]` or `user.auth === ["premium"]`.

The `user` store comes with `authorizedForBasic` and `authorizedForPremium` getters. The user starts off on a two-week free trial, and after that the getters check `user.auth`.

### Google Analytics

The code to set up Google Analytics is in the router and uses `vue-gtag`.

- It's only being loaded in production.
- To finish setting it up you'll need to sign up with Google Analytics, and then set the `VUE_APP_GTAG_ID` environment variable in production.
- `CookiesNotice` is being used for GDPR compliance. It utilizes LocalStorage.

#### Why Google Analytics?

Because it's free. I primarily built this project for myself and I don't like to have the pressure of paying \$X/month for analytics from the get-go, but I also do want to know how people are using the app right away. I looked around and couldn't really find any other free options that were reputable.

Of course, you may want to replace Google Analytics with something like Segment or Kissmetrics. Either later on, or maybe right away from the beginning.

### Chat

I'm using [Userlike](https://www.userlike.com/en/) for this. I wanted something free, thought Userlike seemed solid, and didn't want to spend too much time researching all of the options.

The only code is the `<script>` below `</body>`.

- If you don't want this chat then just get rid of this code.
- If you do, sign up with Userlike and paste in the correct `<script>`.

### Landing page template

The home page is based off of Julian Shapiro's advice for [how to construct landing pages](https://www.julian.com/guide/growth/landing-pages). Replace the text and images and you'll have yourself a landing page. You may also want to spruce up the design and expand on the content.

Q: What if I don't have any users for the social proof section?
A: From his guide:

> Tip — If you don’t yet have noteworthy customers, provide your product for free to people at well-known companies. Then place their company logos on your site if they wind up using you.

### Help page template

All you have to do is fill in the questions and answers in `src/views/Footer/Help/Help.vue`. The logic is already there for the UI and for a table of contents.

### Contact page template

Just fill in your contact email address, phone number and/or address in `src/views/Footer/Contact/Contact.vue`. You also may want to add references to social media accounts like Twitter.

## What it doesn't come with

### Blog

I thought about adding blogging functionality but I think that's overkill. It's actually a lot of work. Using a some other third party solution like VuePress and pointing the domain to blog.vuestarter.com seems like a better idea.
