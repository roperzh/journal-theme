// -------------------------------------------
//   Search
// -------------------------------------------

Journal.Behaviors.Search = Essential.Behavior.extend({
  init: function() {
    this.lunr = Journal.Services.Lunr.new(getSource());
  },

  events: {
    'keyup': 'performSearch'
  },

  performSearch: function(e) {
    var results = this.lunr.search(e.target.value);

    this.emit({
      channel: 'search:showResults',
      data: {
        results: results
      }
    });
  }
});