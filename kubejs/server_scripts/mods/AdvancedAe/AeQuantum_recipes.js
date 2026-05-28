ServerEvents.recipes(event => {

    // Remove original Quantum Crafting Unit recipe
    event.remove({ id: 'advanced_ae:eaequantumunit' })

    // New Quantum Crafting Unit
    event.shaped('advanced_ae:quantum_unit', [
        'SAS',
        'ACA',
        'SPS'
    ], {
        S: 'ae2:crafting_unit',
        A: 'ae2:singularity',
        C: 'occultism:storage_stabilizer_tier4',
        P: 'extendedae:concurrent_processor'
    })
})