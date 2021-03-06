/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// (function () {
//     var old_logger = console.log;
//     var html_logger = document.getElementById('upnp2');
//     console.log = function(msg) {
//       old_logger.call(this, arguments);
//       if (typeof msg == 'object') {
//         html_logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(msg) : msg) + '<br>';
//       } else {
//         html_logger.innerHTML += msg + '<br>';
//       }
//     }
// })();

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    var serviceType = "ssdp:all";
    
    var success = function(devices) {
        
        var x = document.getElementById('upnp');
        var html_logger = document.getElementById('upnp3');
        // html_logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(devices) : devices) + '<br>';
        html_logger.innerHTML = JSON.stringify(devices);
        x.innerHTML = devices;       
        console.log(devices);
        
    }
    
    var failure = function() {
        alert("Error calling Service Discovery Plugin");
    }
    
    /**
	 * Similar to the W3C specification for Network Service Discovery api 'http://www.w3.org/TR/discovery-api/'
	 * @method getNetworkServices
	 * @param {String} serviceType e.g. "urn:schemas-upnp-org:service:ContentDirectory:1", "ssdp:all", "urn:schemas-upnp-org:service:AVTransport:1"
	 * @param {Function} success callback an array of services
	 * @param {Function} failure callback 
	*/
    serviceDiscovery.getNetworkServices(serviceType, success, failure);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
