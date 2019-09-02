### Recomendations  
1) Use css locators in page files only (don't use it in tests files) 
so in case you change html of the page you will need to update the appropriate page object only.  
2) Because of point 1) it is not necessary to import anything from `protractor` in the test files, only page objects.
3) It would be nice to keep creating the page objects for every page (like I created `signin.po.ts`) 
and use `app.po.ts` for general stuff not specific for particular page.
Every specific page object could extend `app.po.ts` to use its common methods.  
4) Tests will be more readable if we name page object methods using User actions, like bellow:  
```angular2  
page.enterEmail('test-owner');  
page.enterPassword('abc@123');  
page.clickLogin();  
```  
5) `page.sleep()` method could be used to pause test script execution to check what's going on in the real page.
6) `page.waitForTheTitle()` is an example of waiting for the event before continuing. 
It is not required (i.e. it works without it) but could be use in the future for similar cases.  
  
  
  
  
  
  
