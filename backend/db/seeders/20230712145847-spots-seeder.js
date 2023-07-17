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
        ownerId: 1,
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
        ownerId: 2,
        address: "456 Vivian",
        city: "Lake Hamilton",
        state: "Arkansas",
        country: "United States",
        lat: 111.7645358,
        lng: -122.4730329,
        name: "The Outlook Shipping Container Lakehouse Amazing Views ",
        description: "Welcome to the brand new Hygge Hideaway! As soon as you drive up, you'll see that that this lakefront cabin sits right next to our very own Pine Lake and is all about unplugging and getting back to the simple, enjoyable moments that make life grand. Hygge Hideaway greets you with an airy, open floor plan interspersed with nature-inspired design choices and whimsical decor––hinting that you should let out your inner \"cabin life\" state of mind and let yourself be charmed into instant vacation mode!",
        price: 514
      },
      {
        ownerId: 2,
        address: "456 Vivian",
        city: "Granbury",
        state: "Texas",
        country: "United States",
        lat: 111.7645358,
        lng: -122.4730329,
        name: "Trails edge lake house, boat dock, & best views!!!",
        description: "Make memories to last a lifetime on lake Granbury, as well as having the best view in town. BRING YOUR BOAT!!!! Two story dock that is covered, has 2 boat slips, and plenty room for lake activities. Have a perfect view of the most beautiful sunrises and sunsets!! Centrally located between the Historic Granbury Square, Fossil Rim Wildlife Center and Dinosaur Valley State Park!",
        price: 300
      },
      {
        ownerId: 3,
        address: "456 Vivian",
        city: "Osage Beach",
        state: "Missouri",
        country: "United States",
        lat: 111.7645358,
        lng: -122.4730329,
        name: "Luxury Knolls Mansion, private pool and hot tub!",
        description: "What's not to love about this place! One of the most unique homes on the lake comes with the best views on the lake, private outdoor pool and hot tub, excellent location and gives you access to all of the fantastic Knolls amenities (shared indoor pool/hot tub, sauna, steam room, tennis courts and more). Not that you need to ever leave the house, but if you do you're a short drive or boat ride to Redhead Yacht Club, Margaritaville Landshark Bar, Shorty Pants and many other great spots!",
        price: 623
      },
      {
        ownerId: 3,
        address: "456 Vivian",
        city: "Cassopolis",
        state: "Michigan",
        country: "United States",
        lat: 111.7645358,
        lng: -122.4730329,
        name: "Gorgeous 4 BR Home on Peaceful Shavehead Lake",
        description: "Beautiful, newly renovated (2021) lakefront home on Shavehead Lake! Take out the kayaks or paddleboards for a morning ride on the calm, spring-fed lake.  Bring a boat or rent one for endless days in the sun! ",
        price: 845
      },
      {
        ownerId: 4,
        address: "456 Vivian",
        city: "Chicago",
        state: "Illinois",
        country: "United States",
        lat: 111.7645358,
        lng: -122.4730329,
        name: "55/56 Floor VIEW, Pool, Fireplace, Fitness Center.",
        description: "PH#1 is a magnificent unique rental in Chicago.  Towering 55 stories above the city, with dramatic living areas and exquisite fireplace, this Penthouse  gives you the ultimate in city living.  It's all about the views and location; nowhere in Chicago can you stay with view like these.  Bordered by the elegance and glamour of North Michigan Avenue to the east and the artsy sophistication of the River North District to the west, PH#1 is at the heart of one of Chicago most exciting neighborhoods.",
        price: 2000
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
