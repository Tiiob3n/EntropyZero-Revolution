ServerEvents.recipes(event => {

    // Remove anciennes recettes Inscriber
    event.remove({ output: 'ae2:calculation_processor' })
    event.remove({ output: 'ae2:engineering_processor' })
    event.remove({ output: 'ae2:logic_processor' })
    event.remove({ output: 'advanced_ae:quantum_processor' })
    event.remove({ output: 'extendedae:concurrent_processor' })

    // Calculation Processor
    event.recipes.createDeploying(
        Item.of('ae2:calculation_processor'),
        [
            'ae2:printed_calculation_processor',
            { item: 'ae2:printed_silicon', remainingItem: 'ae2:printed_silicon' }
        ]
    )

    // Engineering Processor
    event.recipes.createDeploying(
        Item.of('ae2:engineering_processor'),
        [
            'ae2:printed_engineering_processor',
            { item: 'ae2:printed_silicon', remainingItem: 'ae2:printed_silicon' }
        ]
    )

    // Logic Processor
    event.recipes.createDeploying(
        Item.of('ae2:logic_processor'),
        [
            'ae2:printed_logic_processor',
            { item: 'ae2:printed_silicon', remainingItem: 'ae2:printed_silicon' }
        ]
    )

    // Quantum Processor
    event.recipes.createDeploying(
        Item.of('advanced_ae:quantum_processor'),
        [
            'advanced_ae:printed_quantum_processor',
            { item: 'ae2:printed_silicon', remainingItem: 'ae2:printed_silicon' }
        ]
    )

    // Concurrent Processor
    event.recipes.createDeploying(
        Item.of('extendedae:concurrent_processor'),
        [
            'extendedae:concurrent_processor_print',
            { item: 'ae2:printed_silicon', remainingItem: 'ae2:printed_silicon' }
        ]
    )

})