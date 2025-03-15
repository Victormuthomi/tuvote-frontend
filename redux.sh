#!/bin/bash

# Define the base Redux folder
REDUX_DIR="src/redux"

# Create the main Redux folder
mkdir -p $REDUX_DIR/features/auth
mkdir -p $REDUX_DIR/features/user

# Create the necessary files
touch $REDUX_DIR/store.js
touch $REDUX_DIR/features/auth/authSlice.js
touch $REDUX_DIR/features/auth/authService.js
touch $REDUX_DIR/features/auth/authTypes.js
touch $REDUX_DIR/features/auth/authActions.js
touch $REDUX_DIR/features/user/userSlice.js
touch $REDUX_DIR/features/user/userService.js

echo "Redux folder structure and files created successfully!"

