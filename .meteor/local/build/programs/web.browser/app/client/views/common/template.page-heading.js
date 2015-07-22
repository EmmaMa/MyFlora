(function(){
Template.__checkName("pageHeading");
Template["pageHeading"] = new Template("Template.pageHeading", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row wrapper border-bottom white-bg page-heading"
  }, "\n        ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n            ", HTML.H2("\n                ", HTML.Raw('<img src="http://bestinspired.com/wp-content/uploads/2015/04/Flower-22.jpg" width="40">'), "\n                ", Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  }), "\n                ", HTML.Raw('<div class="navbar-header">\n                <a id="navbar-minimalize" class="minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>\n                <form role="search" class="navbar-form-custom" action="search_results">\n                    <div class="form-group">\n                        <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">\n                    </div>\n                </form>\n                </div>'), "\n                ", HTML.Raw("<!--{{#unless currentUser}}-->"), "\n                ", HTML.Raw('<ul class="nav navbar-top-links navbar-right">\n\n                    \n                <li>\n                    <a href="/create">\n                        <button type="button" class="btn btn-w-m btn-primary">Sign Up</button>\n                    </a>\n                    \n                </li>\n                <li>\n                    <a href="/create">\n                        <button type="button" class="btn btn-w-m btn-primary">Log In</button>\n                    </a>\n                    \n                </li>\n                </ul>'), "\n            "), "\n            \n            ", HTML.OL({
    "class": "breadcrumb"
  }, "\n                ", HTML.LI("\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: view.lookup("home")
      }));
    }
  }, "Home"), "\n                "), "\n                ", Blaze.If(function() {
    return Spacebars.call(view.lookup("category"));
  }, function() {
    return [ "\n                ", HTML.LI("\n                    ", HTML.A(Blaze.View("lookup:category", function() {
      return Spacebars.mustache(view.lookup("category"));
    })), "\n                "), "\n                " ];
  }), "\n                ", HTML.LI({
    "class": "active"
  }, "\n                    ", HTML.STRONG(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n                "), "\n            "), "\n\n        "), "\n    ");
}));

})();
