ServerEvents.recipes(event => {
    event.remove({ id: 'bigreactors:reactor/basic/casing' })

    // Reactor Casing (Basic)
    event.recipes.createMixing(
        Item.of('bigreactors:basic_reactorcasing'),
        [
            Item.of('minecraft:iron_ingot', 4),
            Item.of('bigreactors:graphite_ingot', 4),
            'minecraft:sand',
            Fluid.lava(250)
        ]
    )
})