'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MeanMenu = new Module('mean-menu');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MeanMenu.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  MeanMenu.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  MeanMenu.menus.add({
    title: 'meanMenu example page',
    link: 'meanMenu example page',
    roles: ['authenticated'],
    menu: 'main.createArticle'
  });

  MeanMenu.menus.add({
    title: 'sec A',
    link: 'meanMenu example page',
    roles: ['authenticated'],
    menu: 'sec'
  });

  MeanMenu.menus.add({
    title: 'sec B',
    link: 'meanMenu example page',
    roles: ['authenticated'],
    menu: 'sec'
  });

  MeanMenu.menus.add({
    title: 'sec C',
    link: 'meanMenu example page',
    roles: ['authenticated'],
    menu: 'sec'
  });

  return MeanMenu;
});
