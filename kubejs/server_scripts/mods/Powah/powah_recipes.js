ServerEvents.recipes(event => {

    // Remove both original recipes
    event.remove({ id: 'powah:crafting/dielectric_paste' })
    event.remove({ id: 'powah:crafting/dielectric_paste_2' })

    // New recipe with Extreme Reactor Basic Casing
    event.shaped('24x powah:dielectric_paste', [
        'CQC',
        'QBQ',
        'CQC'
    ], {
        C: 'minecraft:coal',
        Q: 'minecraft:quartz',
        B: 'bigreactors:basic_reactorcasing'
    })
})