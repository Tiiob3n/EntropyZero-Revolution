ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagriculture:infusion_altar' })
    event.remove({ id: 'mysticalagriculture:infusion_pedestal' })

    event.shaped(
        'mysticalagriculture:infusion_altar',
        [
            'GIG',
            ' C ',
            'CCC'
        ],
        {
            G: 'minecraft:gold_ingot',
            I: 'mysticalagriculture:prosperity_ingot',
            C: 'allthecompressed:cobblestone_3x'
        }
    )

    event.shaped(
        'mysticalagriculture:infusion_pedestal',
        [
            'GIG',
            ' C ',
            ' C '
        ],
        {
            G: 'minecraft:gold_ingot',
            I: 'mysticalagriculture:prosperity_ingot',
            C: 'allthecompressed:cobblestone_3x'
        }
    )
})