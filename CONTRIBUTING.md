# Contributing
Thanks for contributing to the explorer!

We're thrilled you're interested and your help is greatly appreciated. Contributing is a great way to learn about the XRP Ledger (XRPL).

## Repository Layout

- [server/](server/) - Backend code lives here
- [src](src/) - Frontend code lives here
- [public](public/) - Translations, fonts, and other misc files live here
- [.env](.env.example) - Environment variables

## Requirements for a Successful Pull Request

Before being considered for review or merging, each pull request must:

- Pass continuous integration tests
- Be [marked as drafts](https://github.blog/2019-02-14-introducing-draft-pull-requests/) until they are ready for review.
- Adhere to the [code of conduct](CODE_OF_CONDUCT.md) for this repository.

All new react components must be [function components](https://reactjs.org/docs/components-and-props.html) unless there is good reason to use classes.


## CSS linting rules are extended from

1.  [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
1.  [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)
1.  [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order)

## JSON viewer

We are using [react-json-view](https://github.com/mac-s-g/react-json-view)

## Analytics

We are using Google Analytics. For more info read the [documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/)

## Visual Studio Code IDE

[VSC](https://code.visualstudio.com/) is fast and reliable IDE if you choose to use it please do a following configurations

### Install Extensions

1.  DotENV
1.  ESLint
1.  Prettier - Code formatter

### User Settings

```
{
    "explorer.confirmDelete": false,
    "editor.formatOnSave": true,
    "stylelint.enable": true,
    "files.exclude": {
        "node_modules/": true,
        "coverage/": true,
        "build/": true,
        "src/**/*.css": true
    }
}
```

## Useful Chrome add-on

* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
* [Dom listener](https://chrome.google.com/webstore/detail/domlistener/jlfdgnlpibogjanomigieemaembjeolj?hl=en)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=en)

## Basic security

### Update module dependencies

1.  `npm install -g npm-check-updates`
1.  to see the available updates `ncu`
1.  to update the package.json `ncu -u`
1.  [documentation](https://www.npmjs.com/package/npm-check-updates)

### Clean your package.json

1.  `npm install -g fixpack`
1.  to re-write package.json run `fixpack`
1.  [documentation](https://www.npmjs.com/package/fixpack)

### Node Security (nsp)

1.  `npm install -g nsp`
1.  to check for security issues run `nsp check --output summary`
1.  [documentation](https://www.npmjs.com/package/nsp)

### Snyk Security for Node.js

1.  `npm install -g snyk`
1.  `snyk auth`
1.  to test for vulnerabilities run `snyk test`
1.  follow the steps to fix issues
1.  [documentation](https://snyk.io/)

## bash_profile

1.  `vim ~/.bash_profile`
1.  paste the following config

```
## Show branch name in color
function parse_git_branch () {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
RED="\[\033[0;31m\]"
YELLOW="\[\033[0;33m\]"
GREEN="\[\033[0;32m\]"
NO_COLOR="\[\033[0m\]"
PS1="$GREEN\u@\h$NO_COLOR:\w$YELLOW\$(parse_git_branch)$NO_COLOR\$ "
```

## .gitconfig

1.  `vim ~/.gitconfig`
1.  paste the following config

```
## This is Git's per-user configuration file.
[user]
  name = %YOUR_NAME%
  email = %YOUR_EMAIL%

[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
  type = cat-file -t
  dump = cat-file -p
  unstage = reset HEAD --
  last = log -1 HEAD
```
