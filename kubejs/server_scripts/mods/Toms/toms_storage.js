ServerEvents.recipes(event => {
    event.remove({ output: 'toms_storage:wireless_terminal' })

    event.shaped(
        'toms_storage:wireless_terminal',
        [
            'RCR',
            'LWT',
            'RER'
        ],
        {
            R: '#minecraft:planks',
            C: 'minecraft:repeater',
            L: 'minecraft:spyglass',
            W: 'toms_storage:crafting_terminal',
            T: 'minecraft:tinted_glass',
            E: 'minecraft:ender_pearl'
        }
    )
})