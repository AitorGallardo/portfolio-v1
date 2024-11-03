rm -rf out/
pnpm build
touch out/.nojekyll
npx gh-pages -d out -t true
