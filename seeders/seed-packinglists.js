"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("PackingLists", [
      // Outdoor Sport Climbing
      {
        packing_item: "Rope",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Belay/rappel device",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Locking carabiners",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Non-locking carabiners",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "PAS (Personal Anchor System)",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Quickdraws",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Helmet",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Harness",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Rock climbing shoes",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Chalk",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Tape or rappel gloves",
        important_level: 1,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Sunscreen",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Extra batteries",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Knife or multitool",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Water bottle",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Snack",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Bright T-shirt",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Shorts, pants, or tights",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Rain jacket",
        important_level: 1,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item:
          "Hiking shoes or sandals - something to change into while belaying",
        important_level: 2,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Guidebook",
        important_level: 3,
        check: false,
        climbingtype_name: "Outdoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Indoor Sport Climbing
      {
        packing_item: "Climbing shoes",
        important_level: 3,
        check: false,
        climbingtype_name: "Indoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Chalk Bag",
        important_level: 3,
        check: false,
        climbingtype_name: "Indoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Harness",
        important_level: 3,
        check: false,
        climbingtype_name: "Indoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Belay Device",
        important_level: 3,
        check: false,
        climbingtype_name: "Indoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Rope (30-35m)",
        important_level: 3,
        check: false,
        climbingtype_name: "Indoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Belay Glasses",
        important_level: 1,
        check: false,
        climbingtype_name: "Indoor Sport Climbing",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Outdoor Bouldering
      {
        packing_item: 'Climbing shoes',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Crash Pad',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Chalk Bag',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Guidebook',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Brush',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Sunscreen',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Water bottle',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Food',
        important_level: 3,
        check: false,
        climbingtype_name: 'Outdoor Bouldering',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Indoor Bouldering
      {
        packing_item: "Climbing Shoes",
        important_level: 1,
        check: false,
        climbingtype_name: "Indoor Bouldering",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Chalk Bag",
        important_level: 2,
        check: false,
        climbingtype_name: "Indoor Bouldering",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: "Climbing Pants",
        important_level: 3,
        check: false,
        climbingtype_name: "Indoor Bouldering",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Indoor Top Rope
      {
        packing_item: 'Climbing shoes',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Top Rope',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Chalk Bag',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Top Rope',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Harness',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Top Rope',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Belay Glasses',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Top Rope',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packing_item: 'Water bottle',
        important_level: 3,
        check: false,
        climbingtype_name: 'Indoor Top Rope',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added packing list items if needed
    await queryInterface.bulkDelete("PackingLists", null, {});
  },
};
