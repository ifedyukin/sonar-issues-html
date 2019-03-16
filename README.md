# Sonar issues html generator
## Description
Just generate html report based on json with issues.

## Usage
```
npm i -g https://github.com/ifedyukin/sonar-issues-html
cd ~/sonar-report-dir
sonar-issues-html
```

## How it works?
1. Read `config.json` from cwd.
2. Merge it with default config.
3. Read `sonar-issues.json` from cwd.
4. Write `sonar-issues.html` to cwd.

## Config
```javascript
{
  "input": "sonar-issues.json", // input file name
  "output": "sonar-issues.html", // output file name
  "title": "Sonar issues report", // html page title
  "rule_prefix": "https://sbforge.org/sonar/rules/show/", // rule prefix  for url generating
  "bugreport": "https://github.com/ifedyukin/sonar-issues-html/issues" // util issues link
}
```
