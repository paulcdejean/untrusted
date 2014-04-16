./build.sh
git checkout gh-pages
git merge master --no-commit 
git push origin gh-pages
git checkout master