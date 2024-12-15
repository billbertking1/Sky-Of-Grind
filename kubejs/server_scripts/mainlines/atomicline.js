ServerEvents.recipes(sog => {

    sog.recipes.gtceu.mixer('triplatirium_235_dust')
       .itemInputs('1x gtceu:uranium_235_dust', '1x gtceu:uranium_triplatinum_dust', 'gtceu:duranium_dust')
       .itemOutputs('16x gtceu:triplatirium_235_dust')
       .duration(300)
       .EUt(524288)
    sog.recipes.gtceu.electric_blast_furnace('gtceu:ebf/hot_triplatirium_235')
       .itemInputs('gtceu:triplatirium_235_dust')
       .inputFluids('gtceu:darmstadtium 63')
       .itemOutputs('gtceu:hot_triplatirium_235_ingot')
       .blastFurnaceTemp(10800)
       .duration(1400)
       .EUt(524288)
    sog.recipes.gtceu.vacuum_freezer('vac/triplatirium_235_ingot')
       .itemInputs('gtceu:hot_triplatirium_235_ingot')
       .inputFluids('gtceu:liquid_helium 1000')
       .itemOutputs('gtceu:triplatirium_235_ingot')
       .duration(1400)
       .EUt(524288)
    sog.recipes.gtceu.large_chemical_reactor('triplatirium_sulfate')
       .itemInputs('7x gtceu:triplatirium_235_dust')
       .inputFluids('gtceu:sulfuric_acid 1000', 'gtceu:diluted_sulfuric_acid 500')
       .outputFluids('gtceu:triplatirium_sulfate 250')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(20)
       .EUt(524288)
    sog.recipes.gtceu.large_chemical_reactor('processed_triplatirium_sulfate')
       .notConsumable('1x gtceu:sodium_hydroxide_dust')
       .inputFluids('gtceu:triplatirium_sulfate 1000', 'gtceu:polyphenylene_sulfide 2304')
       .outputFluids('gtceu:processed_triplatirium_sulfate 250')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(100)
       .EUt(524288)
    sog.recipes.gtceu.large_chemical_reactor('trisulfate_slurry')
       .circuit('9')
       .inputFluids('gtceu:processed_triplatirium_sulfate 500', 'gtceu:aqua_regia 3000')
       .outputFluids('gtceu:trisulfate_slurry 250')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(40)
       .EUt(524288)
    sog.recipes.gtceu.fluid_heater('cleaned_trisulfate_slurry')
       .circuit('24')
       .inputFluids('gtceu:trisulfate_slurry 1000')
       .outputFluids('gtceu:cleaned_trisulfate_slurry 990')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(20)
       .EUt(524288)
    sog.recipes.gtceu.large_chemical_reactor('trisulfate_solution')
       .circuit('24')
       .inputFluids('gtceu:cleaned_trisulfate_slurry 500', 'gtceu:distilled_water 3000', 'gtceu:indium_concentrate 1299')
       .outputFluids('gtceu:trisulfate_solution 250')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(120)
       .EUt(524288)
    sog.recipes.gtceu.chemical_bath('pure_trisulfate_solution')
       .notConsumable('gtceu:quantum_star')
       .inputFluids('gtceu:trisulfate_solution 1000')
       .outputFluids('gtceu:pure_trisulfate_solution 990')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(5)
       .EUt(524288)
    sog.recipes.gtceu.centrifuge('trisulfate_waste')
       .circuit('16')
       .inputFluids('gtceu:pure_trisulfate_solution 1000')
       .outputFluids('gtceu:trisulfate_waste 750', 'gtceu:californium_sulfate 250')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(20)
       .EUt(524288)
    sog.recipes.gtceu.centrifuge('waste_reprocesing')
       .circuit('24')
       .inputFluids('gtceu:trisulfate_waste 1000')
       .outputFluids('gtceu:triplatirium_235 25', 'gtceu:triplatirium_sulfate 1000')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(120)
       .EUt(524288)
    sog.recipes.gtceu.large_chemical_reactor('processed_californium_sulfate')
       .notConsumable('1x gtceu:sodium_hydroxide_dust')
       .inputFluids('gtceu:californium_sulfate 1000', 'gtceu:polyphenylene_sulfide 2304')
       .outputFluids('gtceu:processed_californium_sulfate 750')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(100)
       .EUt(524288)
    sog.recipes.gtceu.centrifuge('cleaned_californium_dust')
       .circuit('24')
       .inputFluids('gtceu:processed_californium_sulfate 250')
       .itemOutputsRanged('gtceu:cleaned_californium_dust', 10, 45)
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(200)
       .EUt(524288)
    sog.recipes.gtceu.mixer('atomic_alloy_dust')
       .itemInputs('7x gtceu:cleaned_californium_dust')
       .inputFluids('gtceu:triplatirium_235 50')
       .itemOutputs('64x gtceu:atomic_alloy_dust')
       .duration(20)
       .EUt(524288)
    sog.recipes.gtceu.electric_blast_furnace('gtceu:ebf/hot_atomic_alloy')
       .itemInputs('gtceu:atomic_alloy_dust')
       .inputFluids('gtceu:krypton 1000')
       .itemOutputs('gtceu:hot_atomic_alloy_ingot')
       .blastFurnaceTemp(10800)
       .duration(1400)
       .EUt(524288)
    sog.recipes.gtceu.vacuum_freezer('vac/atomic_alloy_ingot')
       .itemInputs('gtceu:hot_atomic_alloy_ingot')
       .inputFluids('gtceu:liquid_helium 1000')
       .itemOutputs('gtceu:atomic_alloy_ingot')
       .duration(25)
       .EUt(524288)
    
    


    














})