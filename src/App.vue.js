import { defineComponent, ref, onMounted } from 'vue';
import { useUserStore } from '@/store/userStore';
import router from "@/router";
export default defineComponent({
    name: 'App',
    setup() {
        const currentDateTime = ref(new Date().toLocaleString());
        const userStore = useUserStore();
        userStore.setDefaultColor('#bb86fc');
        const logout = async () => {
            try {
                await userStore.logout();
                router.push('/login'); // Redirection vers la page de connexion après la déconnexion
            }
            catch (error) {
                console.error('Logout error:', error);
            }
        };
        const updateCurrentDateTime = () => {
            currentDateTime.value = new Date().toLocaleString();
        };
        onMounted(() => {
            const interval = setInterval(updateCurrentDateTime, 1000);
            return () => clearInterval(interval);
        });
        return {
            currentDateTime,
            logout,
            userStore,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), ...{ style: (({ '--default-color': __VLS_ctx.userStore.userColor })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    // @ts-ignore
    const __VLS_0 = {}
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/home"), ...{ class: ("nav-item") }, }));
    const __VLS_2 = __VLS_1({ to: ("/home"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/home"), ...{ class: ("nav-item") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [userStore,];
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/color"), ...{ class: ("nav-item") }, }));
    const __VLS_8 = __VLS_7({ to: ("/color"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("/color"), ...{ class: ("nav-item") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_nonNullable(__VLS_11.slots).default;
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/temperature"), ...{ class: ("nav-item") }, }));
    const __VLS_14 = __VLS_13({ to: ("/temperature"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: ("/temperature"), ...{ class: ("nav-item") }, }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/Allcomponents"), ...{ class: ("nav-item") }, }));
    const __VLS_20 = __VLS_19({ to: ("/Allcomponents"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ to: ("/Allcomponents"), ...{ class: ("nav-item") }, }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_nonNullable(__VLS_23.slots).default;
    // @ts-ignore
    const __VLS_24 = {}
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/settings"), ...{ class: ("nav-item") }, }));
    const __VLS_26 = __VLS_25({ to: ("/settings"), ...{ class: ("nav-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ to: ("/settings"), ...{ class: ("nav-item") }, }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    __VLS_nonNullable(__VLS_29.slots).default;
    if (!__VLS_ctx.userStore.isLoggedIn) {
        // @ts-ignore
        const __VLS_30 = {}
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
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ to: ("/login"), ...{ class: ("nav-item right-item") }, }));
        const __VLS_32 = __VLS_31({ to: ("/login"), ...{ class: ("nav-item right-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ to: ("/login"), ...{ class: ("nav-item right-item") }, }));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
        // @ts-ignore
        [userStore,];
        __VLS_nonNullable(__VLS_35.slots).default;
    }
    if (__VLS_ctx.userStore.isLoggedIn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.logout) }, ...{ class: ("nav-item right-item") }, });
        // @ts-ignore
        [userStore, logout,];
    }
    // @ts-ignore
    const __VLS_36 = {}
        .RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.currentDateTime);
    // @ts-ignore
    [currentDateTime,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['right-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['right-item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'App';
    let __VLS_internalComponent;
}
//# sourceMappingURL=App.vue.js.map