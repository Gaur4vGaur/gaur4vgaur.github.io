cd /home/gauravgaur/1My/study/projects/gaur4vgaur.github.io
git pull
rm -r *
rsync -a /home/gauravgaur/1My/study/projects/blog/blog-starter/ /home/gauravgaur/1My/study/projects/gaur4vgaur.github.io/ --exclude .git --exclude .git --exclude .cache --exclude .idea --exclude node_modules --exclude public --exclude ContentRefresherInGitio.py
pwd
npm install && npm i gatsby-image
npm install sanitizeHtml
git status
git add .
git commit -m "refresh on $(date)"

git push origin master

npm run deploy
echo 'site pubished, happy days!'
pwd