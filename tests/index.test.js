/*
 * Copyright 2019, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";


const ethers = require("ethers");
const utils = ethers.utils;
const jaysonBrowserClient = require("jayson/lib/client/browser");
const fetch = require("node-fetch");
const promisePoller = require("promise-poller").default;
const vmTrackerJson = require("../lib/VMTracker.json");
const arb = require("../lib/arb-value");
const index = require("../lib/index");

describe("Values, Logs, and Messages", function() {
  test("logValToLog", function() {
    let hex = "0x123456789abcdef0";
    let logVal = new arb.TupleValue([new arb.IntValue(0), new arb.hexToSizedByteRange(hex), new arb.IntValue(12834)]);
    let log = index.logValToLog(logVal);
    expect(log.contractId.toNumber()).toBe(0);
    expect(log.data).toEqual(hex);
    expect(log.topics.length).toBe(1);
    expect(log.topics[0].toNumber()).toBe(12834);
  });

  test.todo("stackValueToList", function() {
  });

  test.todo("processMessage", function() {
  });

  test.todo("processLog", function() {
  });
});

describe("ArbClient", function() {
  test.todo("constructor", function() {
  });

  test.todo("getMessageResult", function() {
  });

  test.todo("sendMessage", function() {
  });

  test.todo("call", function() {
  });

  test.todo("findLogs", function() {
  });

  test.todo("getVmID", function() {
  });

  test.todo("getAssertionCount", function() {
  });

  test.todo("_arbClient", function() {
  });
});

describe("ArbProvider", function() {
  test.todo("constructor", function() {
  });

  test.todo("getSigner", function() {
  });

  test.todo("perform", function() {
  });

  test.todo("call", function() {
  });
});

describe("ArbWallet", function() {
  test.todo("constructor", function() {
  });

  test.todo("getAddress", function() {
  });

  test.todo("sendTransaction", function() {
  });
});

describe("Integration Tests", function() {
  test.todo("Some Tests", function() {
  });
});
