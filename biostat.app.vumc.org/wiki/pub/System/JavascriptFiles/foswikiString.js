var foswiki=foswiki||{preferences:{}};foswiki.String={isWikiWord:function(e){return!!e&&!!e.match(foswiki.RE.wikiword)},capitalize:function(e){if(!e)return null;var r=new RegExp("["+foswiki.RE.lower+foswiki.RE.upper+"]+","g");return e.replace(r,(function(e){return e.charAt(0).toLocaleUpperCase()+e.substr(1)}))},isBoolean:function(e){return"on"==e||"true"==e||"1"==e},removeSpaces:function(e){return e.replace(/\s/g,"")},trimSpaces:function(e){return e&&(e=e.replace(/^\s\s*/,"")),e&&(e=e.replace(/\s\s*$/,"")),e},filterPunctuation:function(e){if(!e)return null;var r=foswiki.getPreference("NAMEFILTER"),n=new RegExp(r,"g");return e.replace(n," ")},removePunctuation:function(e){if(!e)return null;var r="[^"+foswiki.RE.alnum+"]+",n=new RegExp(r,"g");return e.replace(n,"")},makeWikiWord:function(e){return e?foswiki.String.removePunctuation(foswiki.String.capitalize(e)):null},makeCamelCase:function(){var e,r="";for(e=0;e<arguments.length;e++)arguments[e]&&(r+=foswiki.String.capitalize(arguments[e]));return foswiki.String.removePunctuation(r)},makeSafeForTableEntry:function(e){if(0==e.length)return"";var r,n=e;return r=new RegExp(/\r/g),n=n.replace(r,"\n"),r=new RegExp(/\|/g),n=n.replace(r,"/"),r=new RegExp(/\n\s*\n/g),n=n.replace(r,"%<nop>BR%%<nop>BR%"),r=new RegExp(/\n/g),n=n.replace(r,"%<nop>BR%"),n+=" "},escapeTML:function(e){var r=e;return r=(r=(r=(r=(r=(r=(r=r.replace(/\$/g,"$dollar")).replace(/&/g,"$amp")).replace(/>/g,"$gt")).replace(/</g,"$lt")).replace(/%/g,"$percent")).replace(/,/g,"$comma")).replace(/"/g,'\\"')},unescapeTML:function(e){var r=e;return r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/\$nop/g,"")).replace(/\\"/g,'"')).replace(/\$quot/g,'"')).replace(/\$comma/g,",")).replace(/\$perce?nt/g,"%")).replace(/\$lt/g,"<")).replace(/\$gt/g,">")).replace(/\$amp/g,"&")).replace(/\$dollar/g,"$")}};
