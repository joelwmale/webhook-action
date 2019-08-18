#!/bin/sh
set -eu

curl -X POST -H "Content-Type: application/json" --data "{ \"data\": \"$data\" }" $WEBHOOK_URL