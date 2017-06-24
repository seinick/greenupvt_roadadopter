/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 | All Code Copyright 2016 Stone Environmental, Inc.
 | This program is free software: you can redistribute it and/or modify
 | it under the terms of the GNU Affero General Public License as published
 | by the Free Software Foundation, either version 3 of the License, or
 | (at your option) any later version.
 |
 | This program is distributed in the hope that it will be useful,
 | but WITHOUT ANY WARRANTY; without even the implied warranty of
 | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 | GNU Affero General Public License for more details.
 |
 | You should have received a copy of the GNU Affero General Public License
 | along with this program.  If not, see <http://www.gnu.org/licenses/>.
 |
 | Authors: Based on work by Patrick Arlt - parlt@esri.com
 |          Nick Floersch - nick@stone-env.com
 | File: init.js
 | Description: DOJO wrapper around Angular App. There are better
 | ways to handle this now. Check out the ESRI Angular code
 | on github: https://github.com/Esri/angular-esri-map
 \ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
/* global angular:true */
"use strict";

(function(angular) {

  var root = location.pathname.replace(new RegExp(/\/[^\/]+$/), '');

  define('angular', function() {
    return angular;
  });

  require({
    async: true,
    tlmSiblingOfDojo: false,
    packages: [
    	{
      		name: 'angularMapApp',
      		location: root + 'scripts',
    	}
    ]
  });

}(angular));