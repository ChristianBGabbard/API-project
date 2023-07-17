'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: "987 Tracy St",
        city: "Eureka Springs",
        state: "Arkansas",
        country: "United States",
        lat: 88.7645358,
        lng: -122.4730329,
        name: "GeoDome w/AC, Indoor Jetted Tub and Hilltop View's",
        description: "Adventure meets luxury with this one of a kind climate controlled glamping excursion. All the best of nature combined with the luxury of an upscale hotel room. Gaze up at the stars or out at the rolling Eureka forestry from the comfort of your 100% climate controlled dome. Soak in the jetted tub cookout on the deck and drink cocktails from the built in hammock. 15min to Eureka Springs downtown. NO WIFI and cell service is spotty.",
        price: 312
      },
      {
        ownerId: 2,
        address: "123 Troost",
        city: "Broken Bow",
        state: "Oklahoma",
        country: "United States",
        lat: 99.7645358,
        lng: -122.4730329,
        name: "NEW On Creek! HUGE Deck- Elegant Luxury! Sleeps 15",
        description: "Nestled on a 2 acre lot with a flowing creek and expansive deck, Walkin' After Midnight is a stunning, chic, modern and rustic cabin. Privately owned and operated by Almost Heaven Luxury Cabins, LLC, Walkin' After Midnight will sleep 15! It is located on a cul-de-sac street with 80' pine trees and a large circular driveway to pull your boat. You'll love the 1600sf deck w/ built in grill, bev fridge & outdoor games.",
        price: 815
      },
      {
        ownerId: 3,
        address: "456 Vivian",
        city: "Lake Hamilton",
        state: "Arkansas",
        country: "United States",
        lat: 111.7645358,
        lng: -122.4730329,
        name: "The Outlook Shipping Container Lakehouse Amazing Views ",
        description: "Welcome to the brand new Hygge Hideaway! As soon as you drive up, you'll see that that this lakefront cabin sits right next to our very own Pine Lake and is all about unplugging and getting back to the simple, enjoyable moments that make life grand. Hygge Hideaway greets you with an airy, open floor plan interspersed with nature-inspired design choices and whimsical decor––hinting that you should let out your inner \"cabin life\" state of mind and let yourself be charmed into instant vacation mode!",
        price: 514
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Spots', {
      address: { [Op.in]: ['987 Tracy', '123 Troost', '456 Vivian'] }
    }, {});
  }
};
