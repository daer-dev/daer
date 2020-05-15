#!/bin/ash

# We keep the Gatsby modules installed in the build phase and symlink the new ones in every run via entrypoint.
ln -s /save/node_modules/* ./node_modules/.

gatsby develop -H 0.0.0.0
