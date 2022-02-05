# # ublock-adblock-example-rules
## ublock or adblock filter rules with examples.



"!" charater means that this line is comment line and will be ignored


Lets start with this rule:

```rst
 ! 19.03.2020 https://www.abc.com
www.abc.com##.background-ads
```
This rule blocks divs in abc.com which class has ".background-ads" 


Lets continue with this rule:
```rst
! 2022-02-05 https://www.abc.us
www.abc.us##[id^=google_ads_iframe_]
```

this rule blocks divs which ones id starts with "google_ads_iframe_"




this content has been created with this: https://pandao.github.io/editor.md/en.html
