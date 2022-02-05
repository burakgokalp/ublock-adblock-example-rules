# # ublock-adblock-example-rules
## ublock or adblock filter rules with examples.



"!" charater means that this line is comment line and will be ignored


Lets start with this rule:

```rst
 ! 19.03.2020 https://www.abc.com
www.abc.com##.background-ads
```
The above rule will block divs in abc.com, which has "background-ads" in class attribute


Lets continue with this rule:
```rst
! 2022-02-05 https://www.abc.us
www.abc.us##[id^=google_ads_iframe_]
```

The above rule will block divs which one's id attribute starts with "google_ads_iframe_"




this content has been created with this: https://pandao.github.io/editor.md/en.html
