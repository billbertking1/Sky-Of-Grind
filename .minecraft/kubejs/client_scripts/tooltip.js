const FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine")


ItemEvents.tooltip(event => {
    event.add('gtceu:atomicforge', Text.gray('Huge multiblock that uses lots of energy to modify and transmute items'))



    event.add('gtceu:uhv_uhv_parallel_hatch', Text.translatable('gtceu.uhv_parallel_hatch.desc'))
    event.add('gtceu:uev_uev_parallel_hatch', Text.translatable('gtceu.uev_parallel_hatch.desc'))
    event.add('gtceu:uiv_uiv_parallel_hatch', Text.translatable('gtceu.uiv_parallel_hatch.desc'))
    event.add('gtceu:uxv_uxv_parallel_hatch', Text.translatable('gtceu.uxv_parallel_hatch.desc'))
    event.add('gtceu:opv_opv_parallel_hatch', Text.translatable('gtceu.opv_parallel_hatch.desc'))

    event.addAdvanced('gtceu:quantum_space_projector', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:atomic_moonminer', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:atomicompressor', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:bio_lab', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:large_bacterial_vat', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:greenhouse', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:uev_fusion_reactor', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.machine.fusion_reactor.capacity', Math.trunc(FusionReactorMachine.calculateEnergyStorageFactor(GTValues.UEV, 16) / 1000000)))
        text.add(2, Text.translatable('gtceu.multiblock.uev_fusion_reactor.description'))
    })




})


ClientEvents.lang("en_us", e => {
    e.renameItem('avaritia:crystal_matrix_ingot', 'Resonant Crystal Matrix Ingot')
    e.renameItem('avaritia:neutron_pile', 'Pile of Cosmic Neutrons')
    e.renameItem('avaritia:neutron_nugget', 'Cosmic Neutronium Nugget')
    e.renameItem('avaritia:neutron_ingot', 'Cosmic Neutronium Ingot')
    e.renameItem('avaritia:neutron_gear', 'Cosmic Neutronium Gear')
    e.renameItem('avaritia:neutron', 'Very Cosmic Neutronate Block')
    })