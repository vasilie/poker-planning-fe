#!/bin/bash

echo "Pulling updates"
git pull

echo "Building the app"
yarn build

echo "Starting the app"
yarn start-production