import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
export default defineComponent({
    name: 'Login',
    setup() {
        const username = ref('');
        const password = ref('');
        const error = ref('');
        const userStore = useUserStore();
        const router = useRouter();
        const login = async () => {
            try {
                await userStore.login({ email: username.value, password: password.value });
                router.push('/home');
            }
            catch (error) {
                console.error('Login error:', error);
            }
        };
        return {
            username,
            password,
            error,
            login,
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
    if (!__VLS_ctx.userStore.isLoggedIn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-login") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        // @ts-ignore
        [userStore,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.username)), placeholder: ("Username"), });
        // @ts-ignore
        [username,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), placeholder: ("Password"), });
        (__VLS_ctx.password);
        // @ts-ignore
        [password,];
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
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/signup"), }));
        const __VLS_2 = __VLS_1({ to: ("/signup"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: ("/signup"), }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("create-account") }, });
        __VLS_nonNullable(__VLS_5.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.login) }, ...{ class: ("button-login") }, });
        // @ts-ignore
        [login,];
        if (__VLS_ctx.error) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("error-message") }, });
            (__VLS_ctx.error);
            // @ts-ignore
            [error, error,];
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-return") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
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
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/home"), ...{ class: ("return") }, }));
        const __VLS_8 = __VLS_7({ to: ("/home"), ...{ class: ("return") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ to: ("/home"), ...{ class: ("return") }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("button-home") }, });
        __VLS_nonNullable(__VLS_11.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container-login'];
        __VLS_styleScopedClasses['create-account'];
        __VLS_styleScopedClasses['button-login'];
        __VLS_styleScopedClasses['error-message'];
        __VLS_styleScopedClasses['container-return'];
        __VLS_styleScopedClasses['return'];
        __VLS_styleScopedClasses['button-home'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Login';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Login.vue.js.map