// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 20.11.1
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

const common = require('../common');
if (!common.hasCrypto)
  common.skip('missing crypto');

const assert = require('assert');
const crypto = require('crypto');

/* eslint-disable no-restricted-syntax */
assert.strictEqual(globalThis.crypto, crypto.webcrypto);
assert.strictEqual(Crypto, crypto.webcrypto.constructor);
assert.strictEqual(SubtleCrypto, crypto.webcrypto.subtle.constructor);