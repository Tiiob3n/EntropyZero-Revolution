// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(entropy => {

    //Upgrades
    entropy.replaceInput(
        { output: ['mekanism:upgrade_speed', 'mekanism:upgrade_energy', 'mekanism:upgrade_filter', 'mekanism:upgrade_chemical', 'mekanism:upgrade_stone_generator' ] }, // Arg 1: the filter
        '#c:glass_blocks/cheap',
        'mekanism:structural_glass'
    )

    //polonium
    entropy.remove('mekanism:processing/lategame/polonium')
    entropy.custom(
        {
            type: "mekanism:activating",
            input: {
                amount: 5,
                chemical: "mekanism:nuclear_waste"
            },
            output: {
                amount: 1,
                id: "mekanism:polonium"
            }
        }
    ).id('entropy:processing/lategame/polonium')
    
    //plutonium
    entropy.remove('mekanism:processing/lategame/plutonium')
    entropy.custom(
        {
            type: "mekanism:centrifuging",
            input: {
                amount: 5,
                chemical: "mekanism:nuclear_waste"
            },
            output: {
                amount: 1,
                id: "mekanism:plutonium"
            }
        }
    ).id('entropy:processing/lategame/plutonium')

    //Thermal Evaporation Blocks
    entropy.remove('mekanism:thermal_evaporation/block')
    entropy.shaped('8x mekanism:thermal_evaporation_block', ['BSB', 'SMS', 'BSB'], {
        B: '#c:ingots/bronze',
        S: '#c:ingots/steel',
        M: 'mekanism:superheating_element'
    }).id('entropy:thermal_evaporation_block')

    //Solar Neutron Activator
    entropy.remove('mekanism:solar_neutron_activator')
    entropy.shaped('mekanism:solar_neutron_activator', ['APA', 'CSC', 'BBB'], {
        A: 'mekanism:alloy_atomic',
        P: 'mekanismgenerators:advanced_solar_generator',
        C: 'mekanism:elite_control_circuit',
        S: 'mekanism:steel_casing',
        B: '#c:ingots/bronze'
    }).id('entropy:solar_neutron_activator')

    //Electric Pump
    entropy.remove('mekanism:electric_pump')
    entropy.shaped('mekanism:electric_pump', ['CBC', 'ASA', 'OTO'], {
        B: '#c:buckets/empty',
        C: 'mekanism:advanced_control_circuit',
        A: 'mekanism:alloy_reinforced',
        S: 'mekanism:steel_casing',
        O: '#c:ingots/osmium',
        T: 'mekanism:energy_tablet'
    }).id('entropy:electric_pump')

    //Wasted Combs
    entropy.remove('productivebees:mekanism/oxidizing/honeycomb_wasted_radioactive')
    entropy.custom(
        {
            "type": "mekanism:oxidizing",
            "input": {
                "type": "productivebees:component",
                "components": {
                    "productivebees:bee_type": "productivebees:wasted_radioactive"
                },
                "items": "productivebees:configurable_honeycomb"
            },
            "output": {
                "id": "mekanism:nuclear_waste",
                "amount": 50
            },
            "neoforge:conditions": [
                {
                    "type": "neoforge:mod_loaded",
                    "modid": "mekanism"
                },
                {
                    "type": "productivebees:bee_exists",
                    "bee": "productivebees:wasted_radioactive"
                }
            ]
        }
    ).id('entropy:productivebees/oxidizing/honeycomb_wasted_radioactive')

    entropy.remove('productivebees:mekanism/oxidizing/comb_block_wasted_radioactive')
    entropy.custom(
        {
            "type": "mekanism:oxidizing",
            "input": {
                "type": "productivebees:component",
                "components": {
                    "productivebees:bee_type": "productivebees:wasted_radioactive"
                },
                "items": "productivebees:configurable_comb"
            },
            "output": {
                "id": "mekanism:nuclear_waste",
                "amount": 200
            },
            "neoforge:conditions": [
                {
                    "type": "neoforge:mod_loaded",
                    "modid": "mekanism"
                },
                {
                    "type": "productivebees:bee_exists",
                    "bee": "productivebees:wasted_radioactive"
                }
            ]
        }
    ).id('entropy:productivebees/oxidizing/comb_block_wasted_radioactive')
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.