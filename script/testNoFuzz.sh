#!/usr/bin/env bash

# set -eo pipefail

source .env && forge test --fork-url $ALCHEMY_URL --fork-block-number $DEFAULT_FORK_BLOCK -vvv --gas-report --no-match-test="Fuzzy"