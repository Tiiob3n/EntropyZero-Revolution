// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(entropy => {

    entropy.remove({output: 'megacells:radioactive_cell_component'})
    entropy.shaped('megacells:radioactive_cell_component',
        [
            'ADA',
            'BCB',
            'ADA'
        ], {
            A: 'megacells:accumulation_processor',
            B: 'mekanism:radioactive_waste_barrel',
            C: 'megacells:cell_component_64m',
            D: '#c:pellets/antimatter',
        }).id('entropy:radioactive_cell_component')

})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.