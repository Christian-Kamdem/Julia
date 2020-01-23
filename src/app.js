const {NavigationView,contentView,Popover,statusBar} = require('tabris');
const appBasicsInformations = require('./helpers/appBasicsInformations.js');
statusBar.background = appBasicsInformations.color.color1;
statusBar.displayMode = 'default';
//Already have an account?
  //Yes, I have an account already!
  //No, I still dont have an account!
//const welcomePage = require('./views/welcomePage.js').create();
const logoPresentationPage = require('./views/logoPresentationPage.js').create();
