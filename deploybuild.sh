#!/bin/bash

yarn build
cd build
cp index.html 200.html
echo 'fabricio7p.com.br' > CNAME
printf '\n' | surge
