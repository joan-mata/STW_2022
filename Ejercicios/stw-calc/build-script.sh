#!/bin/bash

export PATH=$PATH:/usr/lib/wine/

# Multi-platform version
# node node_modules/electron-packager/bin/electron-packager.js --arch=x64 --platform=linux,win32,darwin --overwrite --out=build/ .

node node_modules/electron-packager/bin/electron-packager.js --arch=x64 --platform=linux --overwrite --out=build/ .

cp -f assets/linux-launcher.sh build/stw-calc-linux-x64/
