npm install

npm run build

cd ./build
touch ./.nojekyll

git init
git add -A
git commit -m 'deployment!'

git push -f https://github.com/ctrepka/chris.repka.com.git master:gh-pages

cd ../