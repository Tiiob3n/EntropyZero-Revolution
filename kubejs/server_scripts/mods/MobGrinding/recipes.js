ServerEvents.recipes(event => {

    // Remove original recipes
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness' })
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_looting' })
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_beheading' })
    event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_speed' })
    event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_height' })
    event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_width' })
    event.remove({ id: 'mob_grinding_utils:recipe_spikes' })

    // Sharpness - fire essence
    event.shaped('mob_grinding_utils:saw_upgrade_sharpness', [
        'GFG',
        'FRF',
        'GFG'
    ], {
        G: 'minecraft:gold_block',
        F: 'ars_nouveau:fire_essence',
        R: 'minecraft:redstone_block'
    })

    // Looting - earth essence
    event.shaped('mob_grinding_utils:saw_upgrade_looting', [
        'GEG',
        'ESE',
        'GEG'
    ], {
        G: 'minecraft:gold_block',
        E: 'ars_nouveau:earth_essence',
        S: 'ars_nouveau:source_gem_block'
    })

    // Beheading - manipulation essence
    event.shaped('mob_grinding_utils:saw_upgrade_beheading', [
        'GMG',
        'MSM',
        'GMG'
    ], {
        G: 'minecraft:gold_block',
        M: 'ars_nouveau:manipulation_essence',
        S: 'ars_nouveau:source_gem_block'
    })

    // Fan Distance Upgrade - air essence
    event.shaped('mob_grinding_utils:fan_upgrade_speed', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        B: 'create:brass_block',
        A: 'ars_nouveau:air_essence',
        C: 'minecraft:redstone_block'
    })

    // Fan Height Upgrade - abjuration essence
    event.shaped('mob_grinding_utils:fan_upgrade_height', [
        'BXB',
        'XPX',
        'BXB'
    ], {
        B: 'create:brass_block',
        X: 'ars_nouveau:abjuration_essence',
        P: 'minecraft:piston'
    })

    // Fan Width Upgrade - water essence
    event.shaped('mob_grinding_utils:fan_upgrade_width', [
        'BWB',
        'WHW',
        'BWB'
    ], {
        B: 'create:brass_block',
        W: 'ars_nouveau:water_essence',
        H: 'minecraft:hopper'
    })

    // Iron Spikes - fire, water, air essences
    event.shaped('mob_grinding_utils:spikes', [
        'FAW',
        'AIA',
        'WAF'
    ], {
        F: 'ars_nouveau:fire_essence',
        A: 'ars_nouveau:air_essence',
        W: 'ars_nouveau:water_essence',
        I: 'minecraft:iron_block'
    })
})