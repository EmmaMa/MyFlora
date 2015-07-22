(function(){
Template.__checkName("topNavbar");
Template["topNavbar"] = new Template("Template.topNavbar", (function() {
  var view = this;
  return HTML.Raw('<!--\n    <div class="row border-bottom">\n        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">\n            <div class="navbar-header">\n                <a id="navbar-minimalize" class="minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>\n                <form role="search" class="navbar-form-custom" action="search_results">\n                    <div class="form-group">\n                        <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">\n                    </div>\n                </form>\n            </div>\n            <ul class="nav navbar-top-links navbar-right">\n                <li>\n                    <a href="/create">\n                        <button type="button" class="btn btn-w-m btn-primary">Sign Up</button>\n                    </a>\n                    \n                </li>\n                <li>\n                    <a href="/create">\n                        <button type="button" class="btn btn-w-m btn-primary">Log In</button>\n                    </a>\n                    \n                </li>\n            </ul>\n\n        </nav>\n    </div>\n    -->');
}));

})();
