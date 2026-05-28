// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ItemEvents.modifyTooltips(entropy => {

    // ##### Gear #####

    //Mekasuit
    entropy.add(/mekanism:mekasuit_/, [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity')
    ])
    //Meka Tool
    entropy.add('mekanism:meka_tool', [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity!'),
        Text.green('Increased Attack Speed & Damage!')
    ])

    // ##### Generators #####

    //Solar Generator
    entropy.add('mekanismgenerators:solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Advanced Solar Generator
    entropy.add('mekanismgenerators:advanced_solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Wind Generator
    entropy.add('mekanismgenerators:wind_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Heat Generator
    entropy.add('mekanismgenerators:heat_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Gas Burning Generator
    entropy.add('mekanismgenerators:gas_burning_generator', [
        Text.red('Decreased Energy Production!'),
        Text.red('Increased Fuel Consumption!')
    ])
    //Fission Generator
    entropy.add(/mekanismgenerators:fission_/, [
        Text.red('Decreased Energy Production!'),
    ])
    //Fusion Generator
    entropy.add(/mekanismgenerators:fusion_/, [
        Text.red('Decreased Energy Production!'),
        Text.green('Decreased Fuel Consumption!'),
    ])
    //Turbine
    entropy.add(/mekanismgenerators:turbine_/, [
        Text.green('Increased Production Speed!'),
    ])
    //Boiler
    entropy.add(/mekanism:boiler_/, [
        Text.green('Increased Production Speed!'),
    ])

    // ##### Machines #####

    //Upgrades
    entropy.add(/mekanism:upgrade_/, [
        Text.green('Increased Machine Boost!')
    ])
    //Waste Barrel
    entropy.add('mekanism:radioactive_waste_barrel', [
        Text.green('Increased Decay Rate!')
    ])
    //Thermal Evaporation Tower
    entropy.add(/mekanism:thermal_evaporation_/, [
        Text.green('Increased Production Speed!')
    ])
    //Solar Neutron Activator
    entropy.add('mekanism:solar_neutron_activator', [
        Text.green('Increased Production Speed!'),
        Text.green('Waste -> Polonium buffed!')
    ])
    //Isotopic Centrifuge
    entropy.add('mekanism:isotopic_centrifuge', [
        Text.green('Waste -> Plutonium buffed!')
    ])
    //Electric Pump
    entropy.add('mekanism:electric_pump', [
        Text.green('Increased Production Speed!')
    ])
    //SPS
    entropy.add(/mekanism:sps_/, [
        Text.green('Decreased Energy Consumption!')
    ])
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.