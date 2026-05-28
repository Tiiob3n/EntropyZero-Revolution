// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(entropy => {
  entropy.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  entropy.remove({ type: 'mekanism:combining', id: /ore/ })
  
  // GBG Recipe Change
  entropy.remove({ id: 'mekanismgenerators:generator/gas_burning' })
  entropy.shaped( 'mekanismgenerators:gas_burning_generator', ['UBU', 'TDT', 'UBU'], {
    U: 'mekanism:ingot_refined_obsidian',
    B: 'mekanism:alloy_atomic',
    T: 'mekanismgenerators:bio_generator',
    D: 'mekanism:electrolytic_core'
  }).id('entropy:mekanismgenerators/gas_burning_gen')

  //Digital Miner
  entropy.remove('mekanism:digital_miner')
  entropy.shaped('mekanism:digital_miner', [
        "ACA",
        "SRS",
        "TXT"
      ], {
        A: '#c:ingots/vibranium',
        C: '#c:circuits/basic',
        R: 'mekanism:robit',
        S: 'mekanism:logistical_sorter',
        T: 'mekanism:teleportation_core',
        X: 'mekanism:steel_casing'
      }
  ).id('entropy:mekanism/digital_miner')

  //mekCrushing({item: 'mod:item', count: 0}, {item/tag: 'mod:item/tag', count: 0}, 'id');
  function mekCrushing(output, input, id) {
    let inputObject = {
      "count": input.count || 1
    };

    if (input.item) {
      inputObject["item"] = input.item;
    } else if (input.tag) {
      inputObject["tag"] = input.tag;
    }

    let recipe = {
      "type": "mekanism:crushing",
      "input": inputObject,
      "output": {
        "count": output.count || 1,
        "id": output.item
      }
    };

    entropy.custom(recipe).id(`entropy:mekanism/crushing/${id}`);
  }

  //mekEnriching({item: 'mod:item', count: 0}, {item/tag: 'mod:item/tag', count: 0}, 'id');
  function mekEnriching(output, input, id) {
    let inputObject = {
      "count": input.count || 1
    };

    if (input.item) {
      inputObject["item"] = input.item;
    } else if (input.tag) {
      inputObject["tag"] = input.tag;
    }

    let recipe = {
      "type": "mekanism:enriching",
      "input": inputObject,
      "output": {
        "count": output.count,
        "id": output.item
      }
    };

    entropy.custom(recipe).id(`entropy:mekanism/enriching/${id}`);
  }

  //mekSawing({item: 'mod:item', count: 0}, {item/tag: 'mod:item/tag', count: 0}, {chance: 0.00, item: 'mod:item',count: 0}, 'id');
  function mekSawing(output, input, extraOutput, id) {
    let inputObject = {
      "count": input.count || 1
    };

    if (input.item) {
      inputObject["item"] = input.item;
    } else if (input.tag) {
      inputObject["tag"] = input.tag;
    }

    let recipe = {
      "type": "mekanism:sawing",
      "input": inputObject,
      "main_output": {
        "count": output.count || 1,
        "id": output.item
      },
      "secondary_chance": extraOutput.chance,
      "secondary_output": {
        "count": extraOutput.count,
        "id": extraOutput.item
      }
    };

    entropy.custom(recipe).id(`entropy:mekanism/sawing/${id}`);
  }

  //mekOxidizing(output{item, count}, input, id)
  function mekOxidizing(output, input) {
    entropy.custom({
      "type": "mekanism:oxidizing",
      "input": {
        "count": 1,
        "tag": input
      },
      "output": {
        "amount": output.count,
        "id": output.item
      }
    })
  }
  

  [['gravel','cobblestone'], ['sand','gravel']].forEach(recipe => {
    for (let count = 1; count < 10; count++) {
      mekCrushing(
          {item: 'allthecompressed:' + recipe[0] + '_' + count + 'x'},
          {item: 'allthecompressed:' + recipe[1] + '_' + count + 'x'},
          recipe[1] + '_to_' + recipe[0] + '_' + count + 'x'
      )
    }
  })

  //mekCrushing({item: 'mod:item', count: 0}, {item/tag: 'mod:item/tag', count: 0}, 'id');
  mekCrushing(
    {item: 'silentgear:blaze_gold_dust'},
    {item: 'silentgear:blaze_gold_ingot'},
    'blaze_gold_ingot_to_dust'
  )
  mekCrushing(
    {item: 'silentgear:azure_electrum_dust'},
    {item: 'silentgear:azure_electrum_ingot'},
    'azure_electrum_ingot_to_dust'
  )
  mekCrushing(
    {item: 'silentgear:crimson_steel_dust'},
    {item: 'silentgear:crimson_steel_ingot'},
    'crimson_steel_ingot_to_dust'
  )
  mekCrushing(
    {item:'extendedae:entro_dust'},
    {item:'extendedae:entro_crystal'},
    'entro_crystal_to_dust'
  )

  //mekEnriching(output{item: 'mod:item', count: 0}, input{item/tag: 'mod:item/tag', count: 0}, 'id');
  mekEnriching({item: 'mysticalagriculture:prosperity_shard', count: 3}, {tag:'c:ores/prosperity'}, 'prosperity_ore_to_shard')
  mekEnriching({item: 'mysticalagriculture:inferium_essence', count: 3}, {tag:'c:ores/inferium'}, 'inferium_ore_to_essence')
  mekEnriching({item: 'powah:uraninite_raw', count: 2}, {tag: 'c:ores/uraninite_poor'}, 'uraninite_poor_to_raw')
  mekEnriching({item: 'powah:uraninite_raw', count: 4}, {tag: 'c:ores/uraninite_regular'}, 'uraninite_regular_to_raw')
  mekEnriching({item: 'powah:uraninite_raw', count: 6}, {tag: 'c:ores/uraninite_dense'}, 'uraninite_dense_to_raw')
  mekEnriching({item: 'silentgear:bort', count: 3}, {tag: 'c:ores/bort'}, 'bort_ore_to_bort')
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.