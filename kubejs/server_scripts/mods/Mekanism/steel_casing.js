ServerEvents.recipes(event => {

    // Remove original Steel Casing recipe
    event.remove({ id: 'mekanism:steel_casing' })

    // New Steel Casing - pneumaticcraft programming puzzle instead of glass
    event.shaped('mekanism:steel_casing', [
        'SMS',
        'MPM',
        'SMS'
    ], {
        S: 'mekanism:ingot_steel',
        M: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:programming_puzzle'
    })
})