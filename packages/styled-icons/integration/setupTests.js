const {toMatchImageSnapshot} = require('jest-image-snapshot')

expect.extend({toMatchImageSnapshot})

// Useful for Debugging (time in ms)
// jest.setTimeout(120000)
