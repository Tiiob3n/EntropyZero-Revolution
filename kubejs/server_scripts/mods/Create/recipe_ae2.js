ServerEvents.recipes(event => {

    // == REMOVE anciennes recettes ==
    event.remove({ output: 'ae2:printed_silicon' })
    event.remove({ output: 'ae2:printed_calculation_processor' })
    event.remove({ output: 'ae2:printed_engineering_processor' })
    event.remove({ output: 'ae2:printed_logic_processor' })
    event.remove({ output: 'extendedae:concurrent_processor_print' })
    event.remove({ id: 'ae_universal_press:concurrentprint' })
    event.remove({ id: 'entropy:inscriber/universal_press/concurrent_processor_print' })
    event.remove({ id: 'extendedae:inscriber/concurrent_print' })
    event.remove({ output: 'advanced_ae:printed_quantum_processor' })
    event.remove({ id: 'ae_universal_press:quantumprocessorprint' })
    event.remove({ id: 'advanced_ae:quantum_processor_print' })
    event.remove({ id: 'entropy:inscriber/universal_press/printed_quantum_processor' })

    // == NOUVELLES recettes Create Deploying ==

    // Printed Calculation Circuit
    event.recipes.createDeploying(
        Item.of('ae2:printed_calculation_processor'),
        [
            'ae2:certus_quartz_crystal',
            { item: 'ae2:calculation_processor_press', remainingItem: 'ae2:calculation_processor_press' }
        ]
    )

    // Printed Engineering Circuit
    event.recipes.createDeploying(
        Item.of('ae2:printed_engineering_processor'),
        [
            'minecraft:diamond',
            { item: 'ae2:engineering_processor_press', remainingItem: 'ae2:engineering_processor_press' }
        ]
    )

    // Printed Logic Circuit
    event.recipes.createDeploying(
        Item.of('ae2:printed_logic_processor'),
        [
            'minecraft:gold_ingot',
            { item: 'ae2:logic_processor_press', remainingItem: 'ae2:logic_processor_press' }
        ]
    )

    // Printed Silicon
    event.recipes.createDeploying(
        Item.of('ae2:printed_silicon'),
        [
            'ae2:silicon',
            { item: 'ae2:silicon_press', remainingItem: 'ae2:silicon_press' }
        ]
    )

    // Printed Concurrent Circuit
    event.recipes.createDeploying(
        Item.of('extendedae:concurrent_processor_print'),
        [
            'extendedae:entro_crystal',
            { item: 'extendedae:concurrent_processor_press', remainingItem: 'extendedae:concurrent_processor_press' }
        ]
    )

    // Printed Quantum Circuit
    event.recipes.createDeploying(
        Item.of('advanced_ae:printed_quantum_processor'),
        [
            'advanced_ae:quantum_alloy',
            { item: 'advanced_ae:quantum_processor_press', remainingItem: 'advanced_ae:quantum_processor_press' }
        ]
    )

})