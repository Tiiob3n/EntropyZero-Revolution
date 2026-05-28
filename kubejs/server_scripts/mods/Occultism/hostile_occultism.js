ServerEvents.recipes(event => {

    event.remove({ output: 'hostilenetworks:sim_chamber' })
    event.remove({ output: 'hostilenetworks:loot_fabricator' })

    event.recipes.occultism.ritual(
        'hostilenetworks:sim_chamber',
        [
            'minecraft:ender_eye',
            'occultism:otherstone_frame',
            'minecraft:comparator',
            'occultism:spirit_attuned_gem'
        ],
        'occultism:book_of_binding_bound_afrit',
        'occultism:craft_afrit'
    ).dummy('occultism:ritual_dummy/craft_dimensional_matrix').duration(100)

    event.recipes.occultism.ritual(
        'hostilenetworks:loot_fabricator',
        [
            'minecraft:nether_star',
            'occultism:otherstone_frame',
            'minecraft:netherite_ingot',
            'occultism:spirit_attuned_gem'
        ],
        'occultism:book_of_binding_bound_afrit',
        'occultism:craft_afrit'
    ).dummy('occultism:ritual_dummy/craft_dimensional_matrix').duration(150)

})