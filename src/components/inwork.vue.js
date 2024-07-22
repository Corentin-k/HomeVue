import lottie from 'lottie-web'; // Importer Lottie Web
import animationData from '@/assets/Animation - 1721226223724.json'; // Chemin vers votre fichier .json
export default (await import('vue')).defineComponent({
    name: 'LottieAnimation',
    mounted() {
        // Initialiser Lottie
        const animationContainer = this.$refs.lottieContainer;
        lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg', // Choisissez le rendu SVG ou HTML (facultatif)
            loop: true, // Optionnel : Définir la boucle
            autoplay: true, // Optionnel : Lecture automatique de l'animation
            animationData: animationData, // Charger les données d'animation à partir du fichier .json
        });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("lottieContainer"), });
    // @ts-ignore
    (__VLS_ctx.lottieContainer);
    // @ts-ignore
    [lottieContainer,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'LottieAnimation';
    let __VLS_internalComponent;
}
//# sourceMappingURL=inwork.vue.js.map