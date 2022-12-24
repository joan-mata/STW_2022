#!/bin/bash

# It is either this or root permisions to the installer.
# Given that no external html is rendered, sandboxing only restricts
# local content, which already has every permision...

`dirname "$0"`/stw-calc --no-sandbox "$@"

# To use the sandbox, use this:

# sudo chown root chrome-sandbox
# sudo chmod 4755 chrome-sandbox
