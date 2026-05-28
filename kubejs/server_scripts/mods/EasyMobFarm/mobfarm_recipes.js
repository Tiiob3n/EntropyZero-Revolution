ServerEvents.recipes(event => {

    // Remove original Easy Mob Farm recipes
    event.remove({ id: 'easy_mob_farm:mob_farm_template/tier0_mob_farm_template' })
    event.remove({ id: 'easy_mob_farm:mob_farm_template/tier0_mob_farm_template_tier1' })
    event.remove({ id: 'easy_mob_farm:mob_farm_template/tier1_mob_farm_template' })
    event.remove({ id: 'easy_mob_farm:mob_farm_template/tier1_mob_farm_template_tier2' })
    event.remove({ id: 'easy_mob_farm:mob_farm_template/tier2_mob_farm_template' })
    event.remove({ id: 'easy_mob_farm:mob_farm_template/tier2_mob_farm_template_tier3' })
    event.remove({ id: 'easy_mob_farm:mob_farm_template/tier3_mob_farm_template' })

    // Tier 0 - all 6 essences + compressed glass center
    event.shaped('easy_mob_farm:tier0_mob_farm_template', [
        'FWA',
        'EGM',
        'XAB'
    ], {
        F: 'ars_nouveau:fire_essence',
        W: 'ars_nouveau:water_essence',
        A: 'ars_nouveau:air_essence',
        E: 'ars_nouveau:earth_essence',
        G: 'allthecompressed:glass_3x',
        M: 'ars_nouveau:manipulation_essence',
        X: 'ars_nouveau:abjuration_essence',
        B: 'ars_nouveau:source_gem_block'
    })

    // Tier 1 - tier0 center + gold blocks
    event.shaped('easy_mob_farm:tier1_mob_farm_template', [
        'GGG',
        'GTG',
        'GGG'
    ], {
        G: 'minecraft:gold_block',
        T: 'easy_mob_farm:tier0_mob_farm_template'
    })

    // Tier 2 - tier1 center + diamond blocks
    event.shaped('easy_mob_farm:tier2_mob_farm_template', [
        'DDD',
        'DTD',
        'DDD'
    ], {
        D: 'minecraft:diamond_block',
        T: 'easy_mob_farm:tier1_mob_farm_template'
    })

    // Tier 3 - tier2 center + netherite blocks
    event.shaped('easy_mob_farm:tier3_mob_farm_template', [
        'NNN',
        'NTN',
        'NNN'
    ], {
        N: 'minecraft:netherite_block',
        T: 'easy_mob_farm:tier2_mob_farm_template'
    })
})