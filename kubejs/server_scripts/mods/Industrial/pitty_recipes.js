ServerEvents.recipes(event => {

    // Remove original Pity Machine Frame recipe
    event.remove({ id: 'industrialforegoing:machine_frame_pity' })

    // New Pity Machine Frame - Create Mixing with water
    event.recipes.createMixing(
        Item.of('industrialforegoing:machine_frame_pity'),
        [
            'minecraft:oak_log',
            'minecraft:redstone_block',
            'minecraft:iron_block',
            Fluid.water(1000)
        ]
    )
})