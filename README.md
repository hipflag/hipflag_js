# hipflag

<img src="https://static.hipflag.com/images/logo.png" width="272"
alt="Hipflag logo">

This gem is a JavaScript client for interacting with [Hipflag
API](https://www.hipflag.com/docs).

[Hipflag](https://www.hipflag.com) is a tool that allows to control and
roll out new product features with flags. It offers a simple UI to
enable/disable feature flags. It also let users to enable flags for
a given percentage of users

## Installation

Using `yarn`:

    $ yarn add hipflag

Using `npm`:

    $ npm install --save hipflag


## Usage

### Initializing a client

Create an instance of the client setting the `publicKey`:

```js
const Hipflag = require('hipflag')

const client = new Hipflag({ publicKey: '*****' })
```

You can get your personal `publicKey` at
https://www.hipflag.com/users/me

Then you can ask whether a feature flag is enabled. For example:

```js
client.getFlag('new-header').then((flag) => {
  if (flag.data.active) {
    // Feature flag is active
  } else {
    // Feature flag is disabled
  }
}).catch((error) => {
  // Some error occurred
})
```

It's also possible to pass a `userId` to `getFlag` method to check if
a feature flag is enabled for a certain user:

```js
client.getFlag('new-header', userId)
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/hipflag/hipflag_js. This project is intended to be
a safe, welcoming space for collaboration, and contributors are expected
to adhere to the [Contributor Covenant](http://contributor-covenant.org)
code of conduct.

## License

The gem is available as open source under the terms of the [MIT
License](https://opensource.org/licenses/MIT)
