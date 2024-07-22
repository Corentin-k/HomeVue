import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';
import { useUserStore } from '@/store/userStore';
export default defineComponent({
    name: 'Home',
    setup() {
        const userStore = useUserStore();
        return {
            userStore,
        };
    },
    components: {
        Login,
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_0 = {}
        .Vue3Lottie;
    ({}.Vue3Lottie);
    __VLS_components.Vue3Lottie;
    // @ts-ignore
    [Vue3Lottie,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ animationLink: ("https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json"), height: ((200)), width: ((200)), }));
    const __VLS_2 = __VLS_1({ animationLink: ("https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json"), height: ((200)), width: ((200)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ animationLink: ("https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json"), height: ((200)), width: ((200)), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (!__VLS_ctx.userStore.isLoggedIn) {
        // @ts-ignore
        const __VLS_6 = {}
            .Login;
        ({}.Login);
        __VLS_components.Login;
        // @ts-ignore
        [Login,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({}));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        // @ts-ignore
        [userStore,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("feature-grid") }, });
    // @ts-ignore
    const __VLS_12 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/color"), ...{ class: ("feature-item") }, }));
    const __VLS_14 = __VLS_13({ to: ("/color"), ...{ class: ("feature-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: ("/color"), ...{ class: ("feature-item") }, }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_nonNullable(__VLS_17.slots).default;
    // @ts-ignore
    const __VLS_18 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/temperature"), ...{ class: ("feature-item") }, }));
    const __VLS_20 = __VLS_19({ to: ("/temperature"), ...{ class: ("feature-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ to: ("/temperature"), ...{ class: ("feature-item") }, }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_nonNullable(__VLS_23.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['home'];
        __VLS_styleScopedClasses['feature-grid'];
        __VLS_styleScopedClasses['feature-item'];
        __VLS_styleScopedClasses['feature-item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        Login,
    };
    const __VLS_name = 'Home';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Home.vue.js.map