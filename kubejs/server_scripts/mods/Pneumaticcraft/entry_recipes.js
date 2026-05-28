ServerEvents.recipes(event => {

    // Remove original Air Compressor recipe
    event.remove({ id: 'pneumaticcraft:air_compressor' })

    // New Air Compressor - dark power gem block on top row
    event.shaped('pneumaticcraft:air_compressor', [
        'DDD',
        'R R',
        'RPR'
    ], {
        D: 'evilcraft:dark_power_gem_block',
        R: 'pneumaticcraft:reinforced_bricks',
        P: 'pneumaticcraft:pressure_tube'
    })
})