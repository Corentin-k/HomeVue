import { defineComponent } from 'vue';
import { getDHT11Data } from '@/services/esp32Service';
export default defineComponent({
    name: 'DHT11Display',
    data() {
        return {
            temperature: '',
            humidity: '',
            loading: true,
            error: false
        };
    },
    methods: {
        async refreshData() {
            this.loading = true;
            this.error = false;
            try {
                console.log('Fetching DHT11 data...');
                const data = await getDHT11Data();
                console.log('Received data:', data);
                if (data.temperature !== undefined && data.humidity !== undefined) {
                    this.temperature = `${data.temperature.toFixed(1)}°C`;
                    this.humidity = `${data.humidity.toFixed(1)}%`;
                }
                else {
                    throw new Error('Invalid data format');
                }
            }
            catch (error) {
                console.error('Error fetching DHT11 data:', error);
                this.error = true;
            }
            finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        this.refreshData();
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dht11-display") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error-message") }, });
        // @ts-ignore
        [error,];
    }
    else if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loading-message") }, });
        // @ts-ignore
        [loading,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sensor-data") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("data-item") }, });
        // @ts-ignore
        const __VLS_0 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((['fas', 'thermometer-half'])), }));
        const __VLS_2 = __VLS_1({ icon: ((['fas', 'thermometer-half'])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ icon: ((['fas', 'thermometer-half'])), }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("data-value") }, });
        (__VLS_ctx.temperature);
        // @ts-ignore
        [temperature,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("data-label") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("data-item") }, });
        // @ts-ignore
        const __VLS_6 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((['fas', 'tint'])), }));
        const __VLS_8 = __VLS_7({ icon: ((['fas', 'tint'])), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ icon: ((['fas', 'tint'])), }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("data-value") }, });
        (__VLS_ctx.humidity);
        // @ts-ignore
        [humidity,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("data-label") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.refreshData) }, ...{ class: ("refresh-button") }, });
    // @ts-ignore
    const __VLS_12 = {}
        .FontAwesomeIcon;
    ({}.FontAwesomeIcon);
    __VLS_components.FontAwesomeIcon;
    __VLS_components.fontAwesomeIcon;
    // @ts-ignore
    [FontAwesomeIcon,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ((['fas', 'sync-alt'])), }));
    const __VLS_14 = __VLS_13({ icon: ((['fas', 'sync-alt'])), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ icon: ((['fas', 'sync-alt'])), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    [refreshData,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['dht11-display'];
        __VLS_styleScopedClasses['error-message'];
        __VLS_styleScopedClasses['loading-message'];
        __VLS_styleScopedClasses['sensor-data'];
        __VLS_styleScopedClasses['data-item'];
        __VLS_styleScopedClasses['data-value'];
        __VLS_styleScopedClasses['data-label'];
        __VLS_styleScopedClasses['data-item'];
        __VLS_styleScopedClasses['data-value'];
        __VLS_styleScopedClasses['data-label'];
        __VLS_styleScopedClasses['refresh-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'DHT11Display';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Temperature.vue.js.map