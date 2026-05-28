// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(entropy => {
    entropy.custom({
        type: 'create:crushing',
        ingredients: [{item: 'draconicevolution:awakened_draconium_ingot'}],
        processingTime: 300,
        results: [
          {id: 'draconicevolution:awakened_draconium_dust'}
        ]
    }).id(`entropy:create/crushing/awakened_draconium_dust`)

    entropy.custom({
        type: 'mekanism:crushing',
        input: {item: 'draconicevolution:awakened_draconium_ingot'},
        output: {id: 'draconicevolution:awakened_draconium_dust'}
    }).id(`entropy:mekanism/crushing/awakened_draconium_dust`)

    entropy.custom({
        type: 'create:crushing',
        ingredients: [{item: 'draconicevolution:draconium_ingot'}],
        processingTime: 300,
        results: [
          {id: 'draconicevolution:draconium_dust'}
        ]
    }).id(`entropy:create/crushing/draconium_dust`)

    entropy.custom({
        type: 'mekanism:crushing',
        input: {item: 'draconicevolution:draconium_ingot'},
        output: {id: 'draconicevolution:draconium_dust'}
    }).id(`entropy:mekanism/crushing/draconium_dust`)
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.