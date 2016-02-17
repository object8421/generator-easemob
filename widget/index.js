'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var fs = require('fs');  
//var yosay = require('yosay');
var chalk = require('chalk');


var ItvGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();
 
    // Have Yeoman greet the user.
    //this.log(yosay('Welcome to the marvelous Itv generator!'));
var defaultGreeting = 
  chalk.red("                                          ___.    ") + '\n' +
  chalk.yellow("  ____ _____    ______ ____   _____   ____\\_ |__  ") + '\n' +
  chalk.green("_/ __ \\\\__  \\  /  ___// __ \\ /     \\ /  _ \\| __ \\ ") + '\n' +
  chalk.cyan("\\  ___/ / __ \\_\\___ \\\\  ___/|  Y Y  (  <_> ) \\_\\ \\") + '\n' +
  chalk.gray(" \\___  >____  /____  >\\___  >__|_|  /\\____/|___  /") + '\n' +
  chalk.white("     \\/     \\/     \\/     \\/      \\/           \\/ ") + ' ' +chalk.white('版本:'+this.pkg.version) + '\n\n\n'+
  chalk.cyan('使用帮助')+' ==> '+chalk.bgRed(chalk.white('yo easemob:help')) +'  ' +chalk.yellow('`(*∩_∩*)′ ')+ '\n\n'+
  chalk.cyan('取消请按')+' ==> '+chalk.bgRed(chalk.white('ctrl+c '))+' '+ chalk.yellow('…(⊙_⊙;)…') + '\n\n'+
  chalk.cyan('___________________________________________________________________\n\n') +
  chalk.green('创建组件：') + '\n\n';

    this.log(defaultGreeting);

 
   

/*
  this.log(yosay(' Welcome'));
*/  



    var prompts = [{
      // type: 'confirm',
      // name: 'someOption',
      // message: 'Would you like to enable this option?',
      // default: true
      name: 'name',
      message: '创建组件',
      default: 'demo'
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      this.name = props.name;

      //console.log(this.someOption);
      done();
    }.bind(this));
  },

  app: function () {

     this.template('src/widgets/demo/demo.js','src/widgets/'+this.name+'/'+this.name+'.js');
    

  },

  projectfiles: function () {

  }
});

module.exports = ItvGenerator;