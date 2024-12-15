GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('glacio_layer')
        .targets('minecraft:deepslate') // [*] 
        .dimensions('ad_astra:glacio') // [*]
})