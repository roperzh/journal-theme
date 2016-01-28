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


function initLunr(pages) {
  var idx = lunr(function() {
    this.field("title", {
      boost: 10
    });
    this.field("content");
    this.ref("href");
  });
  pages.forEach(function(page) {
    idx.add(page);
  })
  return idx
}

function search(idx, term, pages) {
  return idx.search(term).map(function(result) {
    return pages.filter(function(page) {
      return page.href === result.ref;
    })[0];
  });
}
(function(pages) {
  var lunr = initLunr(pages);
  console.log("search for hello", search(lunr, "hello", pages));
})(getSource())