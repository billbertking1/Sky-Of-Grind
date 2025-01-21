ServerEvents.recipes(sog => {
    sog.shaped(
        'gtceu:uhv_uhv_parallel_hatch',
        ['ABC', 'BYB', 'HBH'],
        {
            B: '#gtceu:circuits/uev',
            A: 'gtceu:uhv_sensor',
            C: 'gtceu:uhv_emitter',
            Y: 'gtceu:uhv_machine_hull',
            H: 'gtceu:draconium_single_cable'
    })
    sog.shaped(
        'gtceu:uev_uev_parallel_hatch',
        ['ABC', 'BYB', 'HBH'],
        {
            B: '#gtceu:circuits/uiv',
            A: 'gtceu:uev_sensor',
            C: 'gtceu:uev_emitter',
            Y: 'gtceu:uev_machine_hull',
            H: 'gtceu:awakened_draconium_single_cable'
    })
    
  
  })