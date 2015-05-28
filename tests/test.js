var assert = require("assert")

var logs=[
'[Sat May 23 04:57:06 2015] [error] [client 66.249.79.176] File does not exist: /srv/www/vhosts/production/localadaption.s54.ok.ubc.ca/http/robots.txt',
'[Sat May 23 13:28:46 2015] [error] [client 66.249.69.34] File does not exist: /srv/www/vhosts/production/localadaption.s54.ok.ubc.ca/http/robots.txt',
'[Sat May 23 22:16:08 2015] [error] [client 66.249.69.53] File does not exist: /srv/www/vhosts/production/localadaption.s54.ok.ubc.ca/http/robots.txt',
'206.87.52.180 - nick [15/May/2015:11:01:56 -0700] "GET /themes/pmahomme/img/col_drop.png HTTP/1.1" 200 132 754 15271',
'206.87.52.180 - nick [15/May/2015:11:01:56 -0700] "GET /navigation.php?ajax_request=1&token=a4b2b69ee7834acc2af3fe89f606f7ca&aPath=cm9vdA%3D%3D.Y2ZlZWJj&vPath=cm9vdA%3D%3D.Y2ZlZWJj&pos=0&pos2_name=&pos2_value=&searchClause=&searchClause2=&_nocache=1431712950420471185 HTTP/1.1" 200 2522 910 165872',
'206.87.52.180 - nick [15/May/2015:11:01:56 -0700] "GET /index.php?ajax_request=1&recent_table=1&token=a4b2b69ee7834acc2af3fe89f606f7ca HTTP/1.1" 200 183 777 123505',
'66.249.79.137 - - [17/May/2015:03:05:21 -0700] "GET /placemark-tool/fill-575906/fillOpacity-1/stroke-c787d4/strokeOpacity-1/strokeWidth-8/base-five/fade-FFFFFF/fadeOpacity-0.3 HTTP/1.1" 200 19202 412 838488',
'188.165.15.238 - - [17/May/2015:03:15:46 -0700] "GET /placemark-tool/fill-633138/fillOpacity-1/stroke-ad9872/strokeOpacity-1/strokeWidth-8/base-five/fade-FFFFFF/fadeOpacity-0.2 HTTP/1.1" 200 19208 289 1095247',
'100.43.85.22 - - [17/May/2015:03:25:36 -0700] "GET /robots.txt HTTP/1.1" 404 208 186 420',
'[Thu May 07 18:03:51 2015] [error] [client 131.103.20.165] PHP   4. GeoliveAjaxController->executeTask() /srv/www/vhosts/production/release.s54.ok.ubc.ca/http/administrator/components/com_geolive/Ajax/ajaxRouter.php:43',
'[Thu May 07 18:03:51 2015] [error] [client 131.103.20.165] PHP   5. ReleaseAjaxController->ajax_updataPackages() /srv/www/vhosts/production/release.s54.ok.ubc.ca/http/administrator/components/com_geolive/Ajax/geoliveAjaxController.php:343',
'[Thu May 07 18:03:51 2015] [error] [client 131.103.20.165] PHP   6. mail() /srv/www/vhosts/production/release.s54.ok.ubc.ca/http/administrator/components/com_geolive/geolive/Extensions/Plugins/Release/ReleaseAjaxController.php:172',
'[Wed May 27 12:35:40 2015] [error] [client 206.87.52.180] PHP  18. GeoliveWidget->display() /srv/www/vhosts/production/firelite.s54.ok.ubc.ca/http/administrator/components/com_geolive/geolive/Extensions/Widgets/GeoliveWidget.php:90, referer: http://firelight.geolive.ca/themap',
'[Wed May 27 12:35:40 2015] [error] [client 206.87.52.180] PHP  19. include() /srv/www/vhosts/production/firelite.s54.ok.ubc.ca/http/administrator/components/com_geolive/geolive/Extensions/Widgets/GeoliveWidget.php:623, referer: http://firelight.geolive.ca/themap',
'[Wed May 27 12:35:40 2015] [error] [client 206.87.52.180] PHP  20. CustomBehaviorScriptWidget->printScript() /srv/www/vhosts/production/firelite.s54.ok.ubc.ca/http/administrator/components/com_geolive/geolive/Extensions/Widgets/CustomBehaviorScript/view/default.php:21, referer: http://firelight.geolive.ca/themap',
'[Mon May 25 22:10:58 2015] [error] [client 142.103.198.178] File does not exist: /srv/www/vhosts/s54.ok.ubc.ca/https/scripts',
'[Mon May 25 22:10:58 2015] [error] [client 142.103.198.178] script not found or unable to stat: /var/www/cgi-bin/hosting',
'[Mon May 25 22:10:58 2015] [error] [client 142.103.198.178] File does not exist: /srv/www/vhosts/s54.ok.ubc.ca/https/hosting',
'Unable to access jarfile /srv/www/vhosts/production/recreate.s54.ok.ubc.ca/http/administrator/components/com_geolive/library/yuicompressor-2.4.2.jar',
'Unable to access jarfile /srv/www/vhosts/production/recreate.s54.ok.ubc.ca/http/administrator/components/com_geolive/library/yuicompressor-2.4.2.jar',
'Unable to access jarfile /srv/www/vhosts/production/recreate.s54.ok.ubc.ca/http/administrator/components/com_geolive/library/yuicompressor-2.4.2.jar',
'176.31.126.56 - - [17/May/2015:00:29:41 -0700] "GET / HTTP/1.1" 206 317 202 1319',
'182.118.20.218 - - [17/May/2015:01:39:45 -0700] "GET /robots.txt HTTP/1.1" 404 208 341 6462',
'208.115.113.89 - - [17/May/2015:03:22:49 -0700] "GET /robots.txt HTTP/1.1" 404 208 221 334',
'132.216.27.113 - - [17/May/2015:02:00:12 -0700] "GET /index.php?format=feed&type=rss HTTP/1.0" 200 11 117 1166',
'180.76.5.175 - - [17/May/2015:02:21:05 -0700] "GET / HTTP/1.1" 200 11 217 1397',
'132.216.27.113 - - [17/May/2015:03:00:11 -0700] "GET /index.php?format=feed&type=rss HTTP/1.0" 200 11 117 1214',
'174.4.37.8 - nick [22/May/2015:11:07:27 -0700] "GET /sql.php?db=firelite&table=z78ge_GeoL_Map_MapItem&token=8d369bbaef1fbf635fd74be16efcbc3e&pos=0&ajax_request=true&ajax_page_request=true&menuHashes=38267976-39078542-9a9dd07a-a6c72b5a-56bad905&_nocache=1432318081541133255 HTTP/1.1" 200 9353 911 533376',
'174.4.37.8 - nick [22/May/2015:11:07:29 -0700] "GET /index.php?ajax_request=1&recent_table=1&token=8d369bbaef1fbf635fd74be16efcbc3e HTTP/1.1" 200 237 770 87502',
'174.4.37.8 - nick [22/May/2015:11:07:29 -0700] "GET /navigation.php?ajax_request=1&token=8d369bbaef1fbf635fd74be16efcbc3e&aPath=cm9vdA%3D%3D.ZmlyZWxpdGU%3D&vPath=cm9vdA%3D%3D.ZmlyZWxpdGU%3D&pos=0&pos2_name=&pos2_value=&searchClause=&searchClause2=&_nocache=1432318082733501141 HTTP/1.1" 200 2466 915 169777',
'[Tue May 26 15:30:40 2015] [error] [client 209.52.88.22] File does not exist: /srv/www/vhosts/production/gateway.s54.ok.ubc.ca/http/components/com_geolive/users_files/user_files_226/Uploads/[G]_[ImAgE]_9gK_sXk_3Wg.png, referer: http://gateway.geolive.ca/',
'[Wed May 27 19:34:03 2015] [error] [client 70.29.76.13] File does not exist: /srv/www/vhosts/production/gateway.s54.ok.ubc.ca/http/components/com_geolive/users_files/user_files_226/Uploads/[G]_[ImAgE]_9gK_sXk_3Wg.png, referer: http://gateway.geolive.ca/',
'[Wed May 27 19:34:05 2015] [error] [client 70.29.76.13] File does not exist: /srv/www/vhosts/production/gateway.s54.ok.ubc.ca/http/favicon.ico, referer: http://gateway.geolive.ca/',
'131.103.20.165 - - [15/May/2015:13:35:58 -0700] "POST /job/Core%20App/build?token=1234567890 HTTP/1.1" 201 - 1473 5866',
'206.87.52.180 - - [15/May/2015:13:38:58 -0700] "GET /job/Core%20App/badge/icon HTTP/1.1" 200 724 491 5603',
'206.87.52.180 - - [15/May/2015:13:39:31 -0700] "GET /job/Core%20App/badge/icon HTTP/1.1" 304 - 559 2878',
];

var apache=require('../log-parser.js');

logs.forEach(function(line){
	assert('object', typeof apache.parse(line));
});

assert(true,true);