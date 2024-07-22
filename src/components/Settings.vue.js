import { defineComponent, ref, onMounted } from 'vue';
import { useUserStore } from '@/store/userStore'; // Importer le store créé avec Pinia
export default defineComponent({
    name: 'Settings',
    setup() {
        const userStore = useUserStore(); // Utiliser le store Pinia pour gérer l'état utilisateur
        // Initialiser selectedColor avec la couleur actuelle du store
        const selectedColor = ref(userStore.userColor);
        const updateColor = async () => {
            const userData = userStore.userData;
            if (userData && userData.username) {
                try {
                    await userStore.setDefaultColor(selectedColor.value);
                    console.log('Color updated successfully');
                }
                catch (error) {
                    console.error('Failed to update color:', error);
                }
            }
            else {
                console.error('User data is not available or does not contain username');
            }
        };
        onMounted(() => {
            // Mettre à jour la couleur sélectionnée au chargement du composant
            selectedColor.value = userStore.userColor;
        });
        return {
            selectedColor,
            updateColor,
        };
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-settings") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("color"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.updateColor) }, id: ("color"), value: ((__VLS_ctx.selectedColor)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("#bb86fc"), });
    // @ts-ignore
    [updateColor, selectedColor,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("#2196F3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("#4CAF50"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container-settings'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Settings';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Settings.vue.js.map