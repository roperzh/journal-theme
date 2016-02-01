// -------------------------------------------
//   Search Results
// -------------------------------------------

Journal.Behaviors.SearchResults = Essential.Behavior.extend({
  channels: {
    'search:showResults': 'showResults'
  },

  showResults: function(e) {
    var results = e.detail.results,
      html = '';

    results.forEach(function(result) {
      console.log(result)
      html += (
        '<section>' +
          '<span>' + result.date + '</span>' +
          '<h3>' +
            '<a href="' + result.href + '">' + result.title + '</a>' +
          '</h3>' +
          result.desc +
        '<section>'
      );
    });

    this.el.innerHTML = html;
  }
});