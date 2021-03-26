"use strict";

var news = [{
  Mission: 1,
  title: 'SAOCOM 1B, GNOMES-1, Tyvak-0172',
  text: "SpaceX's Falcon 9 will launch the second of the two satellite SAOCOM 1 satellites into a sun - synchronous polar orbit from SLC - 40,Cape Canaveral AFS.SAOCOM 1 B is a synthetic aperture radar Earth observation satellite to support disaster management. <br>The SAOCOM spacecraft are operated by CONAE, the Argentinian National Space Activities Commission, and are built by INVAP.This mission is also expected to include rideshare payloads Sequoia, and GNOMES - 1. This will be the first polar launch from the Space Coast in 60 years.The launch azimuth will be southward and the booster will land at LZ - 1.",
  data: '2020-08-30',
  time: '23:18:00',
  rocket: 'Falcon 9'
}, {
  Mission: 2,
  title: 'Starlink-12 (v1.0)',
  text: "This mission will launch the twelfth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral Air Force Station. It is the thirteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS",
  data: '2020-10-06',
  time: '11:29:00',
  rocket: 'Falcon 9'
}, {
  Mission: 3,
  title: 'Crew-1',
  text: "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011",
  data: '2020-11-16',
  time: '00:27:00',
  rocket: 'Falcon 9'
}];
var main = document.querySelector('.main');

for (var _i = 0, _news = news; _i < _news.length; _i++) {
  var key = _news[_i];
  main.innerHTML += "\n  <section class=\"news\">\n    <h3>Mission ".concat(key.Mission, "</h3>\n    <h2>").concat(key.title, "</h2>\n    <p class=\"news--text\">").concat(key.text, "</p>\n    <div class=\"icons_block\">\n      <div class=\"icon_block data\">\n        <img src=\"assets/img/icons/calendar.png\" alt=\"calendar\">\n        <div class=\"data--number\">").concat(key.data, "</div>\n      </div>\n      <div class=\"icon_block time\">\n        <img src=\"assets/img/icons/time.png\" alt=\"calendar\">\n        <div class=\"time--number\">").concat(key.time, "</div>\n      </div>\n      <div class=\"icon_block rocket\">\n        <img src=\"assets/img/icons/rocket.png\" alt=\"calendar\">\n        <div class=\"rocket--name\">").concat(key.rocket, "</div>\n      </div>\n    </div>\n    <!-- /.icons_block -->\n  </section>\n  <!-- /.news -->");
}