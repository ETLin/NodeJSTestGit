# ! /bin/bash
# echo hello

page=1
for ((page=1;page<=92;page++));do
	./node_modules/phantomjs/bin/phantomjs webScraptPhantomJS.js "http://comic.sfacg.com/HTML/chengslr/001j/?p=$page"
	# echo $page
done