ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:controller' })
    event.remove({ id: 'ae2:network/blocks/controller' })

    event.shaped('ae2:controller', [
        'FCF',
        'CEP',
        'FCF'
    ], {
        F: 'allthecompressed:fluix_block_4x',
        C: 'ae2:fluix_crystal',
        E: 'ae2:engineering_processor',
        P: 'ae2:engineering_processor'
    })
})