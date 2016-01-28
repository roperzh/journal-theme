// -------------------------------------------
//   Main
// -------------------------------------------

Journal = {};
Journal.Behaviors = {};
Journal.Services = {};

document.addEventListener('DOMContentLoaded', function() {
  Essential.loadBehaviors({
    application: Journal.Behaviors,
    context: document
  });
});