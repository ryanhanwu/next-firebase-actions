# Next.js + Tailwind CSS + Github Actions + Firebase Cloud Functions + Firebase Hosting

![Deploy to Firebase](https://github.com/ryanhanwu/next-firebase-actions/workflows/Deploy%20to%20Firebase/badge.svg)

This is a template to host a Next.js repo on Github and deploy to Firebase Cloud Function and Firebase Hosting via Github Actions. I've create a [Medium Post](https://ryanhanwu.medium.com/deploy-next-js-to-firebase-cloud-functions-and-firebase-hosting-via-github-actions-d49771b771cc) to talk about the details in the template. 

Based on the [Firebase Hosting priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order), all static content will be served with Firebase CDN, and Firebase Cloud Functions will serve any missed request. Combine with Github Actions, we can now <del>build our own Vercel</del> auto-deploy and test our application for every PR and push to the main branch.

### How to use this template?
Hit **User this Template** button or `git clone` this repo to your local environment.


### Setup steps
- Edit `.firebaserc`
- Edit `firebase.json`
- Add `FIREBASE_TOKEN` to your repo secret
