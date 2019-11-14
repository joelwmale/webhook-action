#!/bin/sh
set -eu

curl -X POST -H "Content-Type: application/json" --data $data $WEBHOOK_URL
