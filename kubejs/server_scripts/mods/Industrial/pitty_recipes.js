ServerEvents.recipes(event => {

    // Remove original Pity Machine Frame recipe
    event.remove({ id: 'industrialforegoing:machine_frame_pity' })

    // New Pity Machine Frame - Create Mixing with water
    event.recipes.createMixing('industrialforegoing:machine_frame_pity', [
        '#c:logs',
        'minecraft:redstone_block',
        'minecraft:iron_block',
        Fluid.water(1000)
    ])
})