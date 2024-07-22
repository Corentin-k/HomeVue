import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
export default defineComponent({
    name: 'Signup',
    setup() {
        const username = ref('');
        const email = ref('');
        const password = ref('');
        const error = ref('');
        const userStore = useUserStore();
        const router = useRouter();
        const signup = async () => {
            try {
                await userStore.register({ username: username.value, email: email.value, password: password.value });
                router.push('/login');
            }
            catch (err) {
                error.value = 'Signup failed';
                console.error('Signup error:', err);
            }
        };
        return {
            username,
            email,
            password,
            error,
            signup,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container-signup") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.username)), placeholder: ("Username"), });
    // @ts-ignore
    [username,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), placeholder: ("Email"), });
    (__VLS_ctx.email);
    // @ts-ignore
    [email,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), placeholder: ("Password"), });
    (__VLS_ctx.password);
    // @ts-ignore
    [password,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.signup) }, ...{ class: ("button-signup") }, });
    // @ts-ignore
    [signup,];
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("error-message") }, });
        (__VLS_ctx.error);
        // @ts-ignore
        [error, error,];
    }
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/login"), }));
    const __VLS_2 = __VLS_1({ to: ("/login"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/login"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("button-login") }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container-signup'];
        __VLS_styleScopedClasses['button-signup'];
        __VLS_styleScopedClasses['error-message'];
        __VLS_styleScopedClasses['button-login'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Signup';
    let __VLS_internalComponent;
}
//# sourceMappingURL=SignUp.vue.js.map