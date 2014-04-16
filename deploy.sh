#!/bin/sh 
if [ $0 != "/tmp/deploy.sh" ]; then
    cp $0 /tmp/deploy.sh;
    /tmp/deploy.sh &
    exit;
fi
set -e
git checkout gh-pages;
git merge master --no-commit;
git push origin gh-pages;
git checkout master;