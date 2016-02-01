// -------------------------------------------
//   Lunr wrapper
// -------------------------------------------

Journal.Services.Lunr = Proto.extend({
  constructor: function(pages) {
    var engine = lunr(function() {
      this.field("title", {
        boost: 10
      });
      this.field("tags");
      this.field("desc");
    });

    pages.forEach(function(page) {
      engine.add(page);
    });

    this.pages = pages;
    this.engine = engine;
  },

  search: function(term) {
    return this.engine.search(term).map(function(result) {
      return this.pages[result.ref];
    }.bind(this));
  },
});