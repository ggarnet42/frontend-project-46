install: 
		npm ci
run:
		bin/gendiff.js -h
publish:
		npm publish --dry-run