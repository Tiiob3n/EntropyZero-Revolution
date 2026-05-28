ServerEvents.recipes(event => {

    event.remove({ id: 'refinedstorage:machine_casing' })

    event.shaped('refinedstorage:machine_casing', [
        'SIS',
        'III',
        'SIS'
    ], {
        S: 'allthecompressed:steel_block_4x',
        I: 'refinedstorage:quartz_enriched_iron'
    })
})