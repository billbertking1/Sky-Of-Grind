GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:kaemite_bedrock', vein => {
        vein.dimensions('ad_astra:mercury')
        vein.fluid(() => Fluid.of('gtceu:kaemite').fluid)
        vein.weight(600)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
})