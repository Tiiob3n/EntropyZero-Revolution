// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(entropy => {
    //Atomic Disassembler
    entropy.remove({ id: 'mekanism:atomic_disassembler' })
    entropy.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
        I: 'mekanism:alloy_reinforced',
        T: 'mekanism:basic_induction_cell',
        A: 'mekanism:ultimate_control_circuit',
        P: 'allthemodium:allthemodium_pickaxe'
    }).id('entropy:mekanism/atomic_disassembler')

    //Meka Tool
    entropy.remove({ id: 'mekanism:meka_tool' })
    entropy.shaped('mekanism:meka_tool', ['UCU', 'TDT', 'PBP'], {
        U: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:configurator',
        T: '#c:plates/unobtainium',
        D: 'mekanism:atomic_disassembler',
        B: 'mekanism:ultimate_induction_cell',
        P: 'mekanism:pellet_polonium'
    }).id('entropy:mekanism/meka_tool')

    //MekaSuit Helmet
    entropy.remove({ id: 'mekanism:mekasuit_helmet' })
    entropy.shaped('mekanism:mekasuit_helmet', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_helmet'
    }).id('entropy:mekanism/mekasuit_helmet')

    //MekaSuit Bodyarmor
    entropy.remove({ id: 'mekanism:mekasuit_bodyarmor' })
    entropy.shaped('mekanism:mekasuit_bodyarmor', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_chestplate'
    }).id('entropy:mekanism/mekasuit_bodyarmor')

    //MekaSuit Pants
    entropy.remove({ id: 'mekanism:mekasuit_pants' })
    entropy.shaped('mekanism:mekasuit_pants', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_leggings'
    }).id('entropy:mekanism/mekasuit_pants')

    //MekaSuit Boots
    entropy.remove({ id: 'mekanism:mekasuit_boots' })
    entropy.shaped('mekanism:mekasuit_boots', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_boots'
    }).id('entropy:mekanism/mekasuit_boots')
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.