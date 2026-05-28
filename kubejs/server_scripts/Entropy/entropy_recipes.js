ServerEvents.recipes(event => {
    event.custom({
        type: "minecraft:crafting_shapeless",
        ingredients: [
            { item: 'powah:nitro_crystal_block' },
            { item: 'avaritia:infinity_singularity' },
            { item: 'ars_nouveau:fire_essence' },
            { item: 'createcasing:chorium_ingot' }
        ],
        result: { id: 'kubejs:shard_of_fire', count: 1 }
    })

    event.custom({
        type: "minecraft:crafting_shapeless",
        ingredients: [
            { item: 'avaritia:infinity_singularity' },
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'ars_nouveau:water_essence' },
            { item: 'advanced_ae:quantum_core' }
        ],
        result: { id: 'kubejs:shard_of_water', count: 1 }
    })

    event.custom({
        type: "minecraft:crafting_shapeless",
        ingredients: [
            { item: 'avaritia:infinity_singularity' },
            { item: 'industrialupgrade:crafting_elements/crafting_757_element' },
            { item: 'ars_nouveau:earth_essence' },
            { item: 'bigreactors:insanite_block' }
        ],
        result: { id: 'kubejs:shard_of_earth', count: 1 }
    })

    event.custom({
        type: "minecraft:crafting_shapeless",
        ingredients: [
            { item: 'avaritia:infinity_singularity' },
            { item: 'allthecompressed:unobtainium_block_9x' },
            { item: 'ars_nouveau:air_essence' },
            { item: 'pneumaticcraft:printed_circuit_board' }
        ],
        result: { id: 'kubejs:shard_of_air', count: 1 }
    })

    event.custom({
        type: "minecraft:crafting_shapeless",
        ingredients: [
            { item: 'avaritia:infinity_singularity' },
            { item: 'create_creative:creative_alloy' },
            { item: 'ars_nouveau:conjuration_essence' },
            { item: 'draconicevolution:chaotic_energy_core' }
        ],
        result: { id: 'kubejs:shard_of_light', count: 1 }
    })

    event.custom({
        type: "minecraft:crafting_shapeless",
        ingredients: [
            { item: 'avaritia:infinity_singularity' },
            { item: 'evolvedmekanism:alloy_creative' },
            { item: 'ars_nouveau:abjuration_essence' },
            { item: 'draconicevolution:chaos_shard' }
        ],
        result: { id: 'kubejs:shard_of_shadow', count: 1 }
    })

    event.shapeless(
        'kubejs:primal_ember',
        [
            'kubejs:shard_of_fire',
            'kubejs:shard_of_water'
        ]
    )

    event.shapeless(
        'kubejs:celestial_vortex',
        [
            'kubejs:shard_of_earth',
            'kubejs:shard_of_air'
        ]
    )

    event.shapeless(
        'kubejs:dual_essence',
        [
            'kubejs:shard_of_light',
            'kubejs:shard_of_shadow'
        ]
    )

    event.shapeless(
        'kubejs:entropy_crystal',
        [
            'kubejs:primal_ember',
            'kubejs:celestial_vortex',
            'kubejs:dual_essence'
        ]
    )
})