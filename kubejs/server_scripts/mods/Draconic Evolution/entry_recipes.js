ServerEvents.recipes(event => {

    // Remove original Draconium Core recipe
    event.remove({ id: 'draconicevolution:components/draconium_core' })

    // New Draconium Core - photoniy ingot instead of gold
    event.shaped('draconicevolution:draconium_core', [
        'DPD',
        'PCP',
        'DPD'
    ], {
        D: 'draconicevolution:draconium_ingot',
        P: 'industrialupgrade:photoniy_ingot',
        C: 'minecraft:diamond'
    })
})