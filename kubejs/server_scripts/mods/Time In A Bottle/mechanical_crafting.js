ServerEvents.recipes(event => {
  event.remove({ id: 'tiab:time_in_a_bottle' })

  event.recipes.create.mechanical_crafting('tiab:time_in_a_bottle', [
    ' NNN ',
    ' G G ',
    'MN NM',
    ' SNS ',
    '  T  '
  ], {
    N: 'occultism:spirit_attuned_gem',
    G: 'allthemodium:allthemodium_ingot',
    M: 'create_sa:heat_engine',
    S: 'create:electron_tube',
    T: 'powah:crystal_nitro'
  })
})