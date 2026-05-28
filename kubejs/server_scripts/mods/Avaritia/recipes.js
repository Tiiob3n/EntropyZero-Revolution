ServerEvents.recipes(event => {

    // Neutronium Ingot
    event.remove({ output: 'avaritia:neutronium_ingot' })
    event.shaped(
        'avaritia:neutronium_ingot',
        [
            'NNN',
            'NNN',
            'NNN'
        ],
        { N: 'avaritia:neutron_nugget' }
    )

    // Neutronium Block
    event.remove({ output: 'avaritia:neutronium_block' })
    event.shaped(
        'avaritia:neutronium_block',
        [
            'NNN',
            'NNN',
            'NNN'
        ],
        { N: 'avaritia:neutronium_ingot' }
    )

    // Crystal Matrix Block
    event.remove({ output: 'avaritia:crystal_matrix_block' })
    event.shaped(
        'avaritia:crystal_matrix_block',
        [
            'NNN',
            'NNN',
            'NNN'
        ],
        { N: 'avaritia:crystal_matrix_ingot' }
    )

    // Infinity Block
    event.remove({ output: 'avaritia:infinity_block' })
    event.shaped(
        'avaritia:infinity_block',
        [
            'III',
            'III',
            'III'
        ],
        { I: 'avaritia:infinity_ingot' }
    )

    // Compressed Crafting Table
    event.remove({ output: 'avaritia:compressed_crafting_table' })
    event.shaped(
        'avaritia:compressed_crafting_table',
        [
            'CCC',
            'CCC',
            'CCC'
        ],
        { C: 'minecraft:crafting_table' }
    )

    // Extreme Crafting Table (recette vanilla du JAR)
    event.remove({ output: 'avaritia:extreme_crafting_table' })
    event.shaped(
        'avaritia:extreme_crafting_table',
        [
            'III',
            'ICI',
            'III'
        ],
        {
            I: 'avaritia:crystal_matrix_ingot',
            C: 'avaritia:double_compressed_crafting_table'
        }
    )

    // Infinity Ingot (Extreme Shaped)
    event.remove({ output: 'avaritia:infinity_ingot' })
    event.custom({
        type: "avaritia:extreme_shaped",
        pattern: [
            "NNNNNNNNN",
            "NCXXCXXCN",
            "NXCCXCCXN",
            "NCXXCXXCN",
            "NNNNNNNNN",
            "         ",
            "         ",
            "         ",
            "         "
        ],
        key: {
            "N": { "item": "avaritia:neutronium_ingot" },
            "C": { "item": "avaritia:crystal_matrix_ingot" },
            "X": { "item": "avaritia:infinity_catalyst" }
        },
        result: { "id": "avaritia:infinity_ingot", "count": 1 }
    })

    // Compressor (Extreme Shaped)
    event.remove({ output: 'avaritia:compressor' })
    event.custom({
        type: "avaritia:extreme_shaped",
        pattern: [
            "IIIHHHIII",
            "X N   N X",
            "I N   N I",
            "X N   N X",
            "RNN O NNR",
            "X N   N X",
            "I N   N I",
            "X N   N X",
            "IIIXIXIII"
        ],
        key: {
            "N": { "item": "avaritia:neutronium_ingot" },
            "H": { "item": "minecraft:hopper" },
            "I": { "item": "minecraft:iron_block" },
            "O": { "item": "avaritia:neutronium_block" },
            "X": { "item": "avaritia:crystal_matrix_ingot" },
            "R": { "item": "minecraft:redstone_block" }
        },
        result: { "id": "avaritia:compressor", "count": 1 }
    })

    // Neutron Collector (Extreme Shaped)
    event.remove({ output: 'avaritia:neutron_collector' })
    event.custom({
        type: "avaritia:extreme_shaped",
        pattern: [
            "IIQQQQQII",
            "I QQQQQ I",
            "I  RRR  I",
            "X RRRRR X",
            "I RRXRR I",
            "X RRRRR X",
            "I  RRR  I",
            "I       I",
            "IIIXIXIII"
        ],
        key: {
            "I": { "item": "minecraft:iron_block" },
            "X": { "item": "avaritia:crystal_matrix_ingot" },
            "R": { "item": "minecraft:redstone_block" },
            "Q": { "item": "minecraft:quartz_block" }
        },
        result: { "id": "avaritia:neutron_collector", "count": 1 }
    })

    // Skullfire Sword (Extreme Shaped)
    event.remove({ output: 'avaritia:skullfire_sword' })
    event.custom({
        type: "avaritia:extreme_shaped",
        pattern: [
            "       IX",
            "      IXI",
            "     IXI ",
            "    IXI  ",
            " B IXI   ",
            "  BXI    ",
            "  WB     ",
            " W  B    ",
            "D        "
        ],
        key: {
            "B": { "item": "minecraft:bone" },
            "D": { "item": "minecraft:nether_star" },
            "I": { "item": "avaritia:crystal_matrix_ingot" },
            "X": { "item": "minecraft:blaze_powder" },
            "W": { "item": "minecraft:oak_log" }
        },
        result: { "id": "avaritia:skullfire_sword", "count": 1 }
    })

    // ==========================================
    //          RAJOUTS DES RECETTES JSON
    // ==========================================

    // Diamond Lattice
    event.remove({ output: 'avaritia:diamond_lattice' })
    event.shaped(
        'avaritia:diamond_lattice',
        [
            'D D',
            ' D ',
            'D D'
        ],
        { D: 'minecraft:diamond_block' }
    )

    // Crystal Matrix Ingot
    event.remove({ output: 'avaritia:crystal_matrix_ingot' })
    event.shaped(
        'avaritia:crystal_matrix_ingot',
        [
            'DSD',
            'DSD'
        ],
        {
            D: 'avaritia:diamond_lattice',
            S: 'minecraft:nether_star'
        }
    )

    // Endest Pearl (Extreme Shaped)
    event.remove({ output: 'avaritia:endest_pearl' })
    event.custom({
        type: "avaritia:extreme_shaped",
        pattern: [
            "   EEE   ",
            " EEPPPEE ",
            " EPPPPPE ",
            "EPPPNPPPE",
            "EPPNSNPPE",
            "EPPPNPPPE",
            " EPPPPPE ",
            " EEPPPEE ",
            "   EEE   "
        ],
        key: {
            "N": { "item": "avaritia:neutronium_ingot" },
            "E": { "item": "minecraft:end_stone" },
            "S": { "item": "minecraft:nether_star" },
            "P": { "item": "cataclysm:storm_eye" }
        },
        result: { "id": "avaritia:endest_pearl" }
    })

    // Infinity Catalyst (Recettes Extreme Shapeless)
    event.remove({ output: 'avaritia:infinity_catalyst' })
    
    // Variante 1 (Avec Singularities activées)
    event.custom({
        type: "avaritia:extreme_shapeless",
        ingredients: [
            { "item": "avaritia:diamond_lattice" },
            { "item": "avaritia:crystal_matrix_ingot" },
            { "item": "avaritia:neutron_pile" },
            { "item": "avaritia:neutron_nugget" },
            { "item": "avaritia:neutronium_ingot" }
        ],
        singularities: true,
        result: { "id": "avaritia:infinity_catalyst" }
    })

    // Variante 2 (Avec l'item de singularité d'infinité)
    event.custom({
        type: "avaritia:extreme_shapeless",
        ingredients: [
            { "item": "avaritia:diamond_lattice" },
            { "item": "avaritia:crystal_matrix_ingot" },
            { "item": "avaritia:neutron_pile" },
            { "item": "avaritia:neutron_nugget" },
            { "item": "avaritia:neutronium_ingot" },
            { "item": "avaritia:infinity_singularity" }
        ],
        result: { "id": "avaritia:infinity_catalyst" }
    })

})