const toolsAndFrameworks = [
  {
    quadrant: 2,
    ring: 3,
    label: 'AngularJS',
    active: false,
    link: '../frameworks/angularjs.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Appium',
    active: false,
    link: '../frameworks/appium.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'CircleCI',
    active: false,
    link: '../frameworks/circleci.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Cocoapods',
    active: false,
    link: '../frameworks/cocoapods.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 3,
    label: 'Cordova',
    active: false,
    link: '../frameworks/cordova.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Django',
    active: false,
    link: '../frameworks/django.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Echo',
    active: false,
    link: '../frameworks/echo.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Fast API',
    active: false,
    link: '../frameworks/fastApi.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Fastlane',
    active: false,
    link: '../frameworks/fastlane.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Firebase',
    active: false,
    link: '../frameworks/firebase.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 3,
    label: 'Flutter',
    active: false,
    link: '../frameworks/flutter.html',
    moved: -1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Gin Gonic',
    active: false,
    link: '../frameworks/ginGonic.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Github Actions',
    active: false,
    link: '../frameworks/githubActions.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Gorilla/Mux',
    active: false,
    link: '../frameworks/mux.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Gradle',
    active: false,
    link: '../frameworks/gradle.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 3,
    label: 'Gulp',
    active: false,
    link: '../frameworks/gulp.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Jenkins',
    active: false,
    link: '../frameworks/jenkins.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 3,
    label: 'JQuery',
    active: false,
    link: '../frameworks/jquery.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Micronaut',
    active: false,
    link: '../frameworks/micronaut.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'NextJS',
    active: false,
    link: '../frameworks/nextjs.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Node.js',
    active: false,
    link: '../frameworks/nodejs.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Optimizely',
    active: false,
    link: '../frameworks/optimizely.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Phoenix',
    active: false,
    link: '../frameworks/phoenix.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Postman',
    active: false,
    link: '../frameworks/postman.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Preact',
    active: false,
    link: '../frameworks/preact.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Preact',
    active: false,
    link: '../frameworks/preact.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 3,
    label: 'React Native',
    active: false,
    link: '../frameworks/react-native.html',
    moved: -1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'ReactJS',
    active: false,
    link: '../frameworks/reactjs.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Redux',
    active: false,
    link: '../frameworks/redux.html',
    moved: -1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Robot Framework',
    active: false,
    link: '../frameworks/robotFramework.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Rollup',
    active: false,
    link: '../frameworks/rollup.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Sentry',
    active: false,
    link: '../frameworks/sentry.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Spring',
    active: false,
    link: '../frameworks/spring.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 1,
    label: 'Storybook',
    active: false,
    link: '../frameworks/storybook.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Swift Package Manager',
    active: false,
    link: '../frameworks/swiftPackageManager.html',
    moved: 1
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Symfony',
    active: false,
    link: '../frameworks/symfony.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 3,
    label: 'Team City',
    active: false,
    link: '../frameworks/teamcity.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 2,
    label: 'Vue.js',
    active: false,
    link: '../frameworks/vuejs.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 0,
    label: 'Webpack',
    active: false,
    link: '../frameworks/webpack.html',
    moved: 0
  },
  {
    quadrant: 2,
    ring: 3,
    label: 'yarn',
    active: false,
    link: '../frameworks/yarn.html',
    moved: 0
  }
]