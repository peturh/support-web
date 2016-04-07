angular.module('templates-main', ['parts/401.html', 'parts/downloads.html', 'parts/footer.html', 'parts/header.html', 'parts/login.html', 'parts/logout.html', 'parts/main.html', 'parts/menu.html', 'parts/opensource.html', 'parts/register.html', 'parts/servicedesk.html', 'parts/start.html', 'parts/status.html', 'parts/users.html']);

angular.module("parts/401.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/401.html",
    "<section class=\"section four-o-one\"><div class=container><div class=\"col-sm-12 text-center white\"><h3 class=white><i class=\"fa fa-warning fa-4x\"></i></h3><h3 class=white>You are not authorized to view this page.</h3></div></div></section>");
}]);

angular.module("parts/downloads.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/downloads.html",
    "<div ng-if=!isUser()><div ng-include=\"'parts/401.html'\"></div></div><div ng-if=isUser()><section class=\"section downloads\" ng-init=init()><div class=container><div class=\"col-sm-12 text-center white\"><h3 class=\"white wow slideInLeft\"><i class=\"fa fa-download fa-4x\"></i></h3><h3 class=\"white wow slideInUp\">We want to be transparent with our customers, please have a look at our downloads, we got presentations, whitepapers, manuals etc.</h3></div></div><div class=\"container more-margin-top wow slideInUp\" data-wow-duration=0.5s ng-if=isUser()><div ng-class=adminColumnClass()><div class=\"panel panel-default\"><div class=panel-heading><h3>Downloads <i class=\"fa fa-download pull-right\"></i></h3></div><div class=panel-body><ul class=list-group><li hide-show theid={{download.id}} class=\"list-group-item clickable hover\" ng-repeat=\"download in downloads\"><div id={{download.id}}viewMode><span class=opensource-lib><a target=_blank href={{download.url}}>{{download.title}}</a></span><div><div id={{download.id}} class=truncate><div class=description>{{download.type}}</div><div class=licence-text>{{download.description}}</div><div class=\"hidden padding-bottom\" id={{download.id}}editAndRemove><span ng-if=isAdmin() ng-click=removeDownload(download.id) class=pull-right><i class=\"fa fa-times\"></i></span> <span ng-if=isAdmin() edit-mode theid={{download.id}} class=pull-right><i class=\"fa fa-pencil more-margin-right\"></i></span></div></div></div></div><div class=hidden id={{download.id}}editMode><label>Title:</label><input class=form-control ng-model=download.title><label>URL:</label><input class=form-control ng-model=download.url><label>Description:</label><input class=\"form-control licence-text\" ng-model=download.type><label>Description:</label><textarea class=\"form-control licence-text\" ng-model=download.description></textarea><div class=padding-bottom id={{download.id}}save><span edit-mode ng-if=isAdmin() theid={{download.id}} ng-click=saveDownload(download) class=pull-right><i class=\"fa fa-save fa-lg\"></i></span> <span edit-mode ng-if=isAdmin() theid={{download.id}} class=\"fa-stack pull-right more-margin-right\"><i class=\"fa fa-pencil fa-stack-1x\"></i> <i class=\"fa fa-ban fa-stack-2x fa-rotate-90\"></i></span></div></div></li></ul></div></div></div><div class=col-md-6 ng-if=isAdmin()><div class=\"panel panel-default\"><div class=panel-heading><h5>Add new download <i class=\"fa fa-upload pull-right\"></i></h5></div><div class=panel-body><form name=newDownloadForm><div class=form-group><input ng-model=newDownload.title class=form-control placeholder=\"Download name\" required> <input ng-model=newDownload.type class=form-control placeholder=\"Type of download\" required> <input ng-model=newDownload.url class=form-control placeholder=URL required><textarea type=text ng-model=newDownload.description class=\"form-control licence-text\" placeholder=\"Download Description\" required></textarea></div><div class=form-group><h5 class=\"pull-left wow tada\" ng-if=addedNewDownload>Added!</h5><button ladda=downloadLoading ng-click=createDownload() data-style=slide-down class=\"btn btn-primary pull-right\" ng-disabled=newDownloadForm.$invalid><i class=\"fa fa-upload\"></i> Upload</button></div></form></div></div></div></div></section></div>");
}]);

angular.module("parts/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/footer.html",
    "<div class=\"footer a-lot-more-margin-top\"><div class=container><div class=row><div class=col-lg-3><h4><i class=\"fa fa-lock\"></i> Secure</h4><p class=footer-text>Carrier class server, secure payments and validations</p></div><div class=col-lg-3><h4><i class=\"fa fa-mobile\"></i> Mobile</h4><p class=footer-text>Truly mobile, works on all mobile phones in the world, smart or dumb</p></div><div class=col-lg-3><h4><i class=\"fa fa-ticket\"></i> Ticketing</h4><p class=footer-text>Real-time ordering with practically any kind of payment</p></div><div class=col-lg-3><h4><i class=\"fa fa-shield\"></i> Zero Fraud</h4><p class=footer-text>The Mobill Service Platform creates unique tickets and coupons, impossible to fake.</p></div></div></div></div><div class=\"alert alert-dismissible alert-info text-center bottom-fixed\" ng-if=!acceptedCookies><button type=button class=close data-dismiss=alert ng-click=acceptCookies()>×</button> <strong><i class=\"fa fa-warning\"></i> Heads up!</strong> Using this site, you approve using cookies with all the dangers that includes bla bla.</div>");
}]);

angular.module("parts/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/header.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" ng-controller=NavController><div class=container><div class=navbar-header><a class=navbar-brand ng-click=goHome()><img class=\"logo img-responsive\" style=\"width: 200px; margin-top: -16px\" src=img/mobill.png></a> <button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#menu><span class=sr-only>Toggle navigation</span> <i class=\"fa fa-bars fa-2x\"></i></button></div><div class=\"collapse navbar-collapse\" id=menu><ul class=\"nav navbar-nav navbar-right\"><li class=\"navbar-li visible-xs\" data-toggle=collapse data-target=#menu><a ng-class=\"{ active: isActive('/servicedesk')}\" ng-click=goServiceDesk()><i class=\"fa fa-envelope-o icon\"></i> Service desk</a></li><li class=visible-xs data-toggle=collapse data-target=#menu><a ng-class=\"{ active: isActive('/opensource')}\" ng-click=goOpenSource()><i class=\"fa fa-code icon\"></i> Open source</a></li><li class=visible-xs data-toggle=collapse data-target=#menu><a ng-class=\"{ active: isActive('/status')}\" ng-click=goStatus()><i class=\"fa fa-info icon\"></i> Status</a></li><li ng-if=isUser() class=visible-xs data-toggle=collapse data-target=#menu><a ng-class=\"{ active: isActive('/downloads')}\" ng-click=goDownloads()><i class=\"fa fa-download icon\"></i> Downloads</a></li><li class=\"navbar-li hidden-xs\"><a ng-class=\"{ active: isActive('/servicedesk')}\" ng-click=goServiceDesk()><i class=\"fa fa-envelope-o icon\"></i> Service desk</a></li><li class=hidden-xs><a ng-class=\"{ active: isActive('/opensource')}\" ng-click=goOpenSource()><i class=\"fa fa-code icon\"></i> Open source</a></li><li class=hidden-xs><a ng-class=\"{ active: isActive('/status')}\" ng-click=goStatus()><i class=\"fa fa-info icon\"></i> Status</a></li><li ng-if=isUser() class=hidden-xs><a ng-class=\"{ active: isActive('/downloads')}\" ng-click=goDownloads()><i class=\"fa fa-download icon\"></i> Downloads</a></li><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown role=button aria-expanded=false><i class=\"fa fa-chevron-down\"></i> {{getUserName()}}</a><ul class=dropdown-menu role=menu><li ng-if=isAdmin() class=visible-xs data-toggle=collapse data-target=#menu><a ng-class=\"{ active: isActive('/users')}\" ng-click=goUsers()><i class=\"fa fa-users\"></i> Users</a></li><li ng-if=isAdmin() class=visible-xs data-toggle=collapse data-target=#menu><a ng-class=\"{ active: isActive('/register')}\" ng-click=goRegister()><i class=\"fa fa-pencil icon\"></i> Register</a></li><li ng-if=!isLoggedIn() class=visible-xs data-toggle=collapse data-target=#menu><a ng-class=\"{ active: isActive('/login')}\" ng-click=goLogin()><i class=\"fa fa-sign-in icon\"></i> Login</a></li><li ng-if=isLoggedIn() class=visible-xs data-toggle=collapse data-target=#menu><a ng-click=goLogout()><i class=\"fa fa-sign-out icon\"></i> Logout</a></li><li ng-if=isAdmin() class=hidden-xs><a ng-class=\"{ active: isActive('/users')}\" ng-click=goUsers()><i class=\"fa fa-users\"></i> Users</a></li><li ng-if=isAdmin() class=hidden-xs><a ng-class=\"{ active: isActive('/register')}\" ng-click=goRegister()><i class=\"fa fa-pencil icon\"></i> Register</a></li><li ng-if=!isLoggedIn() class=hidden-xs><a ng-class=\"{ active: isActive('/login')}\" ng-click=goLogin()><i class=\"fa fa-sign-in icon\"></i> Login</a></li><li ng-if=isLoggedIn() class=hidden-xs><a ng-click=goLogout()><i class=\"fa fa-sign-out icon\"></i> Logout</a></li></ul></li></ul></div></div></nav>");
}]);

angular.module("parts/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/login.html",
    "<div ng-init=init()><section class=\"section loggedin\"><div class=container><div class=\"col-sm-12 text-center white\" ng-if=isLoggedIn()><h3 class=white><i class=\"fa fa-check fa-4x wow tada\"></i></h3><h3 class=\"white wow tada\">Successfully logged in!</h3></div><div class=\"col-sm-12 text-center white\" ng-if=!isLoggedIn()><h3 class=\"white wow slideInDown\"><i class=\"fa fa-sign-in fa-4x\"></i></h3><h3 class=\"white wow slideInUp\">Log in to view more parts of the page, to send incident reports and take part of our downloads.</h3><div class=\"a-lot-more-margin-top wow slideInUp\"><form name=Login_Form class=form-signin ng-hide=isLoggedIn()><input class=form-control ng-model=userLogin.username name=Username placeholder=Username required autofocus> <input type=password class=form-control ng-model=userLogin.password name=Password placeholder=Password required><div class=\"alert alert-dismissible alert-danger\" ng-show=error><div><strong><i class=\"fa fa-exclamation-triangle\"></i> Unable to log in at the moment.</strong></div>Try again later.</div><div class=\"alert alert-dismissible alert-danger\" ng-show=wrongUsernameOrPassword><div><strong><i class=\"fa fa-exclamation-triangle\"></i> Wrong username or password</strong></div>Try again later.</div><button ladda=loginLoading data-style=slide-down class=\"btn btn-lg btn-primary btn-block\" value=Login ng-click=login() ng-disabled=Login_Form.$invalid><i class=\"fa fa-sign-in\"></i> Login</button></form></div></div></div></section></div>");
}]);

angular.module("parts/logout.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/logout.html",
    "");
}]);

angular.module("parts/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/main.html",
    "");
}]);

angular.module("parts/menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/menu.html",
    "<div id=sidebar-wrapper ng-controller=NavCtrl><ul class=sidebar-nav><li class=sidebar-brand><img class=\"logo sidebar-logo\" src=img/mobill.png></li><li><a ng-class=\"{ active: isActive('/servicedesk')}\" ng-click=goServiceDesk()>Service desk <i class=\"fa fa-envelope-o icon\"></i></a></li><li><a ng-class=\"{ active: isActive('/opensource')}\" ng-click=goOpenSource()>Open source <i class=\"fa fa-code icon\"></i></a></li><li><a ng-class=\"{ active: isActive('/downloads')}\" ng-click=goDownloads()>Downloads <i class=\"fa fa-download icon\"></i></a></li><li><a ng-class=\"{ active: isActive('/login')}\" ng-click=goLogin()>Login <i class=\"fa fa-sign-in icon\"></i></a></li><li><a ng-class=\"{ active: isActive('/register')}\" ng-click=goRegister()>Register <i class=\"fa fa-pencil icon\"></i></a></li><li><a ng-click=goLogout()>Logout <i class=\"fa fa-sign-out icon\"></i></a></li><li><a ng-class=\"{ active: isActive('/users')}\" ng-click=goUsers()>Users <i class=\"fa fa-users icon\"></i></a></li></ul></div>");
}]);

angular.module("parts/opensource.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/opensource.html",
    "<section class=\"section opensource\" ng-init=init()><div class=container><div class=\"col-sm-12 text-center white\"><h1 class=white><div class=\"wow slideInLeft inline\">&lt;</div><div class=\"wow slideInUp inline\">/</div><div class=\"wow slideInRight inline\">&gt;</div></h1><h3 class=\"white wow slideInUp\">We embrace the Open Source community and we love well written code created by a dedicated community.</h3></div></div><div class=\"container more-margin-top wow slideInUp\" data-wow-duration=0.5s><div ng-class=adminColumnClass()><div class=\"panel panel-default\"><div class=panel-heading><h3>Open Source <i class=\"fa fa-code pull-right\"></i></h3></div><div class=panel-body><ul class=list-group><li hide-show theid={{openSource.id}} class=\"list-group-item clickable hover\" ng-repeat=\"openSource in openSourceList\"><div id={{openSource.id}}viewMode><span class=opensource-lib>{{openSource.title}}</span> <span class=\"label label-default pull-right\">{{openSource.licence}}</span><div><div id={{openSource.id}} class=truncate><div class=description>{{openSource.description}}</div><div class=licence-text>{{openSource.licenceText}}</div><div class=\"hidden padding-bottom\" id={{openSource.id}}editAndRemove><span ng-if=isAdmin() ng-click=removeOpenSource(openSource.id) class=pull-right><i class=\"fa fa-times\"></i></span> <span ng-if=isAdmin() edit-mode theid={{openSource.id}} class=pull-right><i class=\"fa fa-pencil more-margin-right\"></i></span></div></div></div></div><div class=hidden id={{openSource.id}}editMode><label>Title:</label><input class=form-control ng-model=openSource.title><label>Licence</label><input class=form-control ng-model=openSource.licence><label>Description:</label><textarea class=\"form-control licence-text\" ng-model=openSource.description></textarea><label>Licence text:</label><textarea class=\"form-control licence-text\" ng-model=openSource.licenceText></textarea><div class=padding-bottom id={{openSource.id}}save><span ng-if=isAdmin() edit-mode theid={{download.id}} ng-click=saveOpenSource(openSource) class=pull-right><i class=\"fa fa-save fa-lg\"></i></span> <span edit-mode ng-if=isAdmin() theid={{openSource.id}} class=\"fa-stack pull-right more-margin-right\"><i class=\"fa fa-pencil fa-stack-1x\"></i> <i class=\"fa fa-ban fa-stack-2x fa-rotate-90\"></i></span></div></div></li></ul></div></div></div><div class=col-sm-6 ng-if=isAdmin()><div class=\"panel panel-default\"><div class=panel-heading><h5>Add new open source library <i class=\"fa fa-plus pull-right\"></i></h5></div><div class=panel-body><form name=newOpenSourceLibraryForm><div class=form-group><input ng-model=newOpenSourceLibrary.title class=form-control placeholder=\"Library name\" required> <input ng-model=newOpenSourceLibrary.description class=form-control placeholder=\"Used in application...\" required> <input ng-model=newOpenSourceLibrary.licence class=form-control placeholder=Licence required><textarea type=text ng-model=newOpenSourceLibrary.licenceText class=\"form-control licence-textarea\" placeholder=\"Licence text\" required></textarea></div><div class=form-group><h5 class=\"pull-left wow tada\" ng-if=addedNewOpenSource>Added!</h5><button ladda=openSourceLoading data-style=slide-down class=\"btn btn-primary pull-right\" ng-disabled=newOpenSourceLibraryForm.$invalid ng-click=createOpenSource()><i class=\"fa fa-plus\"></i> Submit</button></div></form></div></div></div></div></section>");
}]);

angular.module("parts/register.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/register.html",
    "<div ng-if=!isAdmin()><div ng-include=\"'parts/401.html'\"></div></div><div ng-init=init() ng-if=isAdmin()><section class=\"section register\"><div class=container><div class=col-sm-12><div class=\"col-sm-12 text-center white\" ng-show=registered><h3 class=\"white wow tada\"><i class=\"fa fa-check fa-4x\"></i></h3><h3 class=\"white wow tada\">Successfully registered!</h3></div><div class=\"col-sm-12 text-center white\" ng-show=!registered><h3 class=\"white wow slideInLeft\"><i class=\"fa fa-pencil fa-4x\"></i></h3><h3 class=\"white wow slideInUp\">Register a user to give them access so they can take part of our downloads and create incident reports on different services.</h3></div><div class=\"col-sm-12 wow slideInUp more-margin-top\" ng-if=isAdmin()><form name=Register_Form class=form-signin><input class=\"form-control margin-bottom\" ng-model=registerUser.username name=Username placeholder=Username required autofocus> <input type=password class=form-control ng-model=registerUser.password name=Password placeholder=Password required> <input type=password class=form-control ng-model=registerUser.repeatPassword name=Password placeholder=\"Repeat password\" required><select class=form-control ng-model=registerUser.type ng-options=\"option for option in userRoles\"></select><textarea class=\"form-control margin-bottom licence-text\" ng-model=registerUser.description required placeholder=\"Describe this user\"></textarea><div class=\"alert alert-dismissible alert-danger\" ng-show=error><div><strong><i class=\"fa fa-exclamation-triangle\"></i> Unable to register.</strong></div>A user with that name existed.</div><div class=\"alert alert-dismissible alert-danger\" ng-show=notMatching><div><strong><i class=\"fa fa-exclamation-triangle\"></i> Password does not match.</strong></div>Please make sure you type the same password in both fields.</div><button ladda=registerUserLoading data-style=slide-down class=\"btn btn-lg btn-warning btn-block\" value=Login ng-disabled=Register_Form.$invalid ng-click=register()><i class=\"fa fa-pencil\"></i> Register</button></form></div></div></div></section></div>");
}]);

angular.module("parts/servicedesk.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/servicedesk.html",
    "<script>$(document).ready(function () {\n" +
    "\n" +
    "        // ==== custom trigger function ====\n" +
    "        clickJira = function (showCollectorDialog) {\n" +
    "            console.log(\"does this run yeah\");\n" +
    "\n" +
    "            $('#myCustomTrigger').on('click', function (e) {\n" +
    "                e.preventDefault();\n" +
    "                showCollectorDialog();\n" +
    "            });\n" +
    "\n" +
    "            // add any other custom triggers for the issue collector here\n" +
    "        }\n" +
    "\n" +
    "    });</script><script src=\"https://tools.mobill.se/jira/s/en_USioaueo/786/3/1.1.2/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?collectorId=0a591419\"></script><section class=\"section servicedesk\"><div class=container><div class=\"col-sm-12 text-center white\"><h3 class=white><i class=\"fa fa-envelope-o fa-4x wow slideInLeft\"></i></h3><h3 class=\"white wow slideInUp\">We always strive for the best service, please do contact us. You can send an incident report right here or send us an email.</h3></div><div class=\"col-sm-12 more-margin-top wow slideInUp\" data-wow-duration=0.5s><div class=col-md-6><div class=\"panel panel-default\"><div class=panel-heading><h3>Contact <i class=\"fa fa-envelope-o pull-right\"></i></h3></div><div class=panel-body><div class=col-sm-6><h5>HEAD OFFICE</h5>Mobill Scandinavia AB<br>Lilla Torg 1<br>SE-211 34 Malmö<br>Sweden<br>+46 40 631 42 00<br><a href=mailto:info@mobill.se type=mail>info@mobill.se</a><h5>SALES</h5>+46 40 631 42 20<br><a href=mailto:sales@mobill.se type=mail>sales@mobill.se</a></div><div class=col-sm-6><h5>CUSTOMER SUPPORT</h5>+46 40 631 42 10<br><a href=mailto:support@mobill.se>support@mobill.se</a><br><a href=mailto:kund@mobill.se>kund@mobill.se</a><h5>OFFICE HOURS</h5>Monday – Friday 9 AM – 5 PM CET</div></div></div></div><div class=col-md-6><div class=\"panel panel-default\"><div class=panel-heading><h3>Send us an incident report <i class=\"fa fa-bolt\"></i></h3></div><div class=panel-body ng-if=isUser()><h5 class=no-bold>Are you having problems with any of our services? Please create an incident report and we'll contact you when it's solved.</h5><button href=# class=\"btn btn-primary btn-block\" id=myCustomTrigger onclick=clickJira>Send an incident report <i class=\"fa fa-plus\"></i></button></div><div class=panel-body ng-if=!isUser()><h5 class=no-bold>If you want to send us an incident report, you have to be logged in.</h5></div></div></div></div></div></section>");
}]);

angular.module("parts/start.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/start.html",
    "<section class=\"section start\"><div class=container><div class=\"col-sm-12 text-center white\"><h1 class=white><i class=\"fa fa-laptop fa-4x wow slideInLeft\"></i></h1><h3 class=\"white wow slideInUp\">This is Mobills support website, here you'll find what Open Source libraries we use, how to create a incident report. You'll find some downloads here as well.</h3></div></div></section>");
}]);

angular.module("parts/status.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/status.html",
    "<section class=\"section status\"><div class=container><div class=\"col-sm-12 text-center white\"><h3 class=\"white wow slideInLeft\"><i class=\"fa fa-info fa-4x\"></i></h3><h3 class=\"white wow slideInUp\">You want to see if it is our services that are down and not fully complying or maybe yours?</h3></div></div></section><section class=section><iframe class=status-frame src=https://tools.mobill.se/status></iframe></section>");
}]);

angular.module("parts/users.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("parts/users.html",
    "<div ng-if=!isAdmin()><div ng-include=\"'parts/401.html'\"></div></div><div ng-init=init() ng-if=isAdmin()><section class=\"section users\"><div class=container><div class=\"col-sm-12 text-center white\"><h3 class=\"white wow slideInLeft\"><i class=\"fa fa-users fa-4x\"></i></h3><h3 class=\"white wow slideInUp\">Here's a list of all the users on the site. Remove, approve guests and promote to admin.</h3></div><div class=\"col-sm-12 more-margin-top wow slideInUp\" ng-if=isAdmin()><div class=col-md-12><div class=panel><div class=panel-body><h4><label>Search: <input ng-model=filter></label></h4><table class=\"table table-striped table-hover\"><thead><tr><th>Username</th><th>Description</th><th>Type</th><th class=pull-right>Edit</th></tr></thead><tbody ng-repeat=\"user in users  | filter:filter\"><tr id={{user.id}}viewMode><td>{{user.username}}</td><td>{{user.description}}</td><td><select ng-change=saveUser(user) class=form-control ng-model=user.type ng-options=\"option for option in userRoles\" disabled></select></td><td class=pull-right><button class=btn theid={{user.id}} edit-mode><i class=\"fa fa-pencil\"></i></button></td></tr><tr id={{user.id}}editMode class=hidden><td><input class=form-control ng-model=user.username></td><td><input class=form-control ng-model=user.description></td><td><select class=form-control ng-model=user.type ng-options=\"option for option in userRoles\"></select></td><td class=pull-right><button theid={{user.id}} ng-click=saveUser(user) edit-mode class=btn><i class=\"fa fa-save\"></i></button></td></tr></tbody></table></div></div></div></div></div></section></div>");
}]);