(function () {

  var App = WinJS.Application;

  var nav = window.nav = {
    toblog: WinJS.UI.eventHandler(function () {
      console.log('toblog');
    })
  }

  WinJS.UI.processAll().done(function () {
    var splitView = document.querySelector('.split-view').winControl;
    new WinJS.UI._WinKeyboard(splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
  });

  App.start();

})();
