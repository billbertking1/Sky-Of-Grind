ServerEvents.recipes(event => {



  event.custom({
        "type": "extractinator:extractinating",
        "input": {
          "item": "minecraft:cobblestone"
        },
        "drops": [
          {
            "drop": "minecraft:raw_iron",
            "drop_chance": 0.80,
            "min_drop_count": 1,
            "max_drop_count": 3
          },
          {
            "drop": "minecraft:raw_gold",
            "drop_chance": 0.50
        },
        {
          "drop": "minecraft:raw_copper",
          "drop_chance": 0.75,
          "min_drop_count": 1,
          "max_drop_count": 3
        },
        {
          "drop": "gtceu:raw_tin",
          "drop_chance": 0.70
        },
        {
          "drop": "gtceu:raw_coal",
          "drop_chance": 0.80,
          "min_drop_count": 1,
          "max_drop_count": 5
        },
        {
          "drop": "minecraft:flint",
          "drop_chance": 0.50
        },
        {
          "drop": "gtceu:crushed_stibnite_ore",
          "drop_chance": 0.50
        }
        ]
    }).id('skyofgrind:extractor_cobble')

    
  event.shaped('extractinator:extractinator', [// arg 1: output
        'AC ', 
        'BDC', // arg 2: the shape (array of strings)
        'BEF'  
      ], {
        A: 'exdeorum:compressed_cobblestone', 
        B: 'exdeorum:stone_hammer',  //arg 3: the mapping object
        C: 'minecraft:oak_stairs',
        D: 'minecraft:oak_planks',
        E: 'minecraft:flint',
        F: 'minecraft:oak_fence_gate'
      }
      
    )

  event.custom({
      "type": "extractinator:extractinating",
      "input": {
        "item": "minecraft:dirt"
      },
      "drops": [
      {
        "drop": 'gtceu:rubber_sapling',
        "drop_chance": 0.80,
        "min_drop_count": 1,
        "max_drop_count": 3
      },
      {
        "drop": "minecraft:grass",
        "drop_chance": 0.50
      },
      {
        "drop": "minecraft:oak_sapling",
        "drop_chance": 0.75,
        "min_drop_count": 1,
        "max_drop_count": 3
      },
      {
        "drop": 'exdeorum:grass_seeds',
        "drop_chance": 0.75,
        "min_drop_count": 1,
        "max_drop_count": 3
      }
      ]
  }).id('skyofgrind:extractor_dirt')
  


  event.custom({
    "type": "extractinator:extractinating",
    "input": {
      "item": "minecraft:sand"
    },
    "drops": [
    {
      "drop": "minecraft:bone_meal",
      "drop_chance": 0.80,
      "min_drop_count": 1,
      "max_drop_count": 3
    },
    {
      "drop": "minecraft:redstone",
      "drop_chance": 0.50
    },
    {
      "drop": "minecraft:rotten_flesh",
      "drop_chance": 0.75,
      "min_drop_count": 1,
      "max_drop_count": 3
    },
    {
      "drop": "gtceu:raw_calcite",
      "drop_chance": 0.75,
      "min_drop_count": 1,
      "max_drop_count": 2
    },
    {
      "drop": "gtceu:stone_dust",
      "drop_chance": 0.75,
      "min_drop_count": 3,
      "max_drop_count": 4
    },
    {
      "drop": "minecraft:sugar_cane",
      "drop_chance": 0.50,
      "min_drop_count": 3,
      "max_drop_count": 4
    },
    {
      "drop": "minecraft:cactus",
      "drop_chance": 0.50,
      "min_drop_count": 3,
      "max_drop_count": 4
    }
    ]
}).id('skyofgrind:extractor_sand')



event.custom({
  "type": "extractinator:extractinating",
  "input": {
    "item": 'minecraft:water_bucket'
  },
  "drops": [
    {
      "drop": "minecraft:kelp",
      "drop_chance": 0.80,
      "min_drop_count": 1,
      "max_drop_count": 3
    },
    {
      "drop": "minecraft:ink_sac",
      "drop_chance": 0.50,
      "min_drop_count": 1,
      "max_drop_count": 1
    },
    {
      "drop": "gtceu:iron_dust",
      "drop_chance": 0.70,
      "min_drop_count": 3,
      "max_drop_count": 7
    },
    {
      "drop": "gtceu:gold_dust",
      "drop_chance": 0.60,
      "min_drop_count": 2,
      "max_drop_count": 5
    },
    {
      "drop": "gtceu:copper_dust",
      "drop_chance": 0.70,
      "min_drop_count": 3,
      "max_drop_count": 7
    },
    {
      "drop": "minecraft:redstone",
      "drop_chance": 0.70,
      "min_drop_count": 3,
      "max_drop_count": 7
    }

  ]
})

event.recipes.gtceu.extractinator('c1cobble')
    .circuit(1)
    .itemInputs('2x minecraft:cobblestone')
    .itemOutputsRanged( 'minecraft:raw_iron', 6, 12)
    .itemOutputsRanged( 'minecraft:raw_gold', 2, 8)
    .itemOutputsRanged( 'minecraft:raw_copper', 4, 12)
    .itemOutputsRanged( 'gtceu:raw_coal', 4, 20)
    .itemOutputsRanged( 'gtceu:raw_tin', 4, 8)
    .itemOutputsRanged( 'gtceu:crushed_stibnite_ore', 2, 8)
    .duration(10)
    .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c1sand')
    .circuit(1)
    .itemInputs('2x minecraft:sand')
    .itemOutputsRanged( 'gtceu:stone_dust', 4, 20)
    .itemOutputsRanged( 'gtceu:raw_redstone', 6, 12)
    .itemOutputsRanged( 'gtceu:raw_calcite', 4, 12)
    .duration(10)
    .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c2sand')
    .circuit(2)
    .itemInputs('2x minecraft:sand')
    .itemOutputsRanged( 'minecraft:bone_meal', 4, 20)
    .itemOutputsRanged( 'minecraft:sugar_cane', 4, 20)
    .itemOutputsRanged( 'minecraft:cactus', 4, 20)
    .itemOutputsRanged( 'minecraft:rotten_flesh', 4, 20)
    .duration(10)
    .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c2cobble')
  .circuit(2)
  .itemInputs('2x minecraft:cobblestone')
  .itemOutputsRanged( 'minecraft:tuff', 6, 12)
  .itemOutputsRanged( 'minecraft:flint', 2, 8)
  .duration(10)
  .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c1water')
  .circuit(1)
  .inputFluids('minecraft:water 2000')
  .itemOutputsRanged( 'minecraft:kelp', 16, 24)
  .itemOutputsRanged( 'minecraft:ink_sac', 4, 8)
  .itemOutputsRanged( 'minecraft:lily_pad', 4, 8)
  .duration(20)
  .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c2water')
  .circuit(2)
  .inputFluids('minecraft:water 2000')
  .itemOutputsRanged('gtceu:iron_dust', 5, 25)
  .itemOutputsRanged('gtceu:gold_dust', 4, 20)
  .itemOutputsRanged('gtceu:copper_dust', 6, 30)
  .itemOutputsRanged('minecraft:redstone', 10, 50)
  .itemOutputsRanged('gtceu:stone_dust', 15, 45)
  .duration(20)
  .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c1lava')
  .circuit(1)
  .inputFluids('minecraft:lava 1000')
  .itemOutputsRanged('gtceu:obsidian_dust', 4, 10)
  .itemOutputsRanged('minecraft:redstone', 20, 60)
  .itemOutputsRanged('gtceu:stone_dust', 15, 45)
  .itemOutputsRanged('gtceu:copper_dust', 10, 40)
  .itemOutputsRanged('gtceu:silicon_dioxide_dust', 4, 8)
  .duration(20)
  .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c1air')
  .circuit(1)
  .inputFluids('gtceu:air 10000')
  .itemOutputsRanged('gtceu:silicon_dioxide_dust', 4, 8)
  .itemOutputsRanged('gtceu:nether_quartz_dust', 5, 10)
  .itemOutputsRanged('gtceu:quartzite_dust', 5, 10)
  .itemOutputsRanged('gtceu:stone_dust', 15, 45)
  .duration(20)
  .EUt(GTValues.VA[GTValues.MV]);
event.recipes.gtceu.extractinator('c1netherair')
  .circuit(1)
  .inputFluids('gtceu:nether_air 10000')
  .itemOutputsRanged('gtceu:netherrack_dust', 15, 40)
  .itemOutputsRanged('gtceu:sulfur_dust', 8, 20)
  .itemOutputsRanged('minecraft:redstone', 10, 30)
  .itemOutputsRanged('gtceu:gold_dust', 4, 20)
  .itemOutputsRanged('gtceu:coal_dust', 10, 20)
  .duration(20)
  .EUt(GTValues.VA[GTValues.MV]);
})
