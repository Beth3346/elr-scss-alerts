# elr-scss-alerts

[![Build Status](https://travis-ci.org/Beth3346/elr-scss-alerts.svg?branch=master)](https://travis-ci.org/Beth3346/elr-scss-alerts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-alerts.svg?style=flat)]()

scss mixin for alerts

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install elr-scss-alerts --save
yarn add elr-scss-alerts
```

## Usage

```scss
.alert {
  @include elr-alert;
}

.alert-info {
  @include elr-alert-context(
    $config: (
      type: info
    )
  );
}

.alert-danger {
  @include elr-alert-context(
    $config: (
      type: danger
    )
  );
}

.alert-warning {
  @include elr-alert-context(
    $config: (
      type: warning
    )
  );
}

.alert-success {
  @include elr-alert-context(
    $config: (
      type: success
    )
  );
}

.alert-muted {
  @include elr-alert-context(
    $config: (
      type: muted
    )
  );
}
```

## License

SEE LICENSE IN LICENSE.md

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
