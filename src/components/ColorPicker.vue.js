import { defineComponent } from 'vue';
import { setLedColor, getDHT11Data } from '@/services/esp32Service';
export default defineComponent({
    name: 'ColorPicker',
    data() {
        return {
            selectedColor: '#ff0000',
            intensity: 100,
            displayColor: '#ff0000',
            connected: false,
            error: false,
            loading: true
        };
    },
    methods: {
        updateColor() {
            const rgb = this.hexToRgb(this.selectedColor);
            if (rgb) {
                const adjustedRgb = this.adjustIntensity(rgb, this.intensity);
                this.displayColor = this.rgbToHex(adjustedRgb);
            }
        },
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
            ] : null;
        },
        rgbToHex(rgb) {
            return "#" + rgb.map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }).join('');
        },
        adjustIntensity(rgb, intensity) {
            const factor = intensity / 100;
            return rgb.map(channel => Math.round(channel * factor));
        },
        async sendColor() {
            this.loading = true;
            this.error = false;
            try {
                await setLedColor(this.displayColor);
                this.connected = true;
                console.log('Color set successfully');
            }
            catch (error) {
                console.error('Error setting color:', error);
                this.error = true;
            }
            finally {
                this.loading = false;
            }
        },
        async checkConnection() {
            this.loading = true;
            this.error = false;
            try {
                const data = await getDHT11Data();
                this.connected = true;
                console.log('ESP32 is connected');
            }
            catch (error) {
                console.error('ESP32 is not connected:', error);
                this.error = true;
                this.connected = false;
            }
            finally {
                this.loading = false;
            }
        },
        refreshData() {
            this.error = false;
            this.loading = true;
            this.connected = false;
            this.updateColor();
            this.checkConnection(); // Check connection when refreshing data
        }
    },
    mounted() {
        this.updateColor(); // Initialize display color based on selectedColor and intensity
        this.checkConnection(); // Check connection when component is mounted
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("color-picker") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    if (__VLS_ctx.connected) {
        // @ts-ignore
        const __VLS_0 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((['fas', 'check'])), ...{ class: ("connected-icon") }, }));
        const __VLS_2 = __VLS_1({ icon: ((['fas', 'check'])), ...{ class: ("connected-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ icon: ((['fas', 'check'])), ...{ class: ("connected-icon") }, }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        // @ts-ignore
        [connected,];
    }
    else {
        // @ts-ignore
        const __VLS_6 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((['fas', 'xmark'])), ...{ class: ("disconnected-icon") }, }));
        const __VLS_8 = __VLS_7({ icon: ((['fas', 'xmark'])), ...{ class: ("disconnected-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ icon: ((['fas', 'xmark'])), ...{ class: ("disconnected-icon") }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("color-display") }, ...{ style: (({ backgroundColor: __VLS_ctx.displayColor })) }, ...{ class: (({ 'disabled-color-input': !__VLS_ctx.connected })) }, });
    __VLS_styleScopedClasses = ({ 'disabled-color-input': !connected });
    // @ts-ignore
    [connected, displayColor,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.updateColor) }, type: ("color"), ...{ class: ("color-input") }, disabled: ((!__VLS_ctx.connected)), ...{ class: (({ 'disabled-color-input': !__VLS_ctx.connected })) }, });
    (__VLS_ctx.selectedColor);
    __VLS_styleScopedClasses = ({ 'disabled-color-input': !connected });
    // @ts-ignore
    [connected, connected, updateColor, selectedColor,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("intensity-control") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("intensity"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.updateColor) }, type: ("range"), id: ("intensity"), min: ("0"), max: ("100"), ...{ class: ("intensity-slider") }, disabled: ((!__VLS_ctx.connected)), ...{ class: (({ 'disabled-color-input': !__VLS_ctx.connected })) }, });
    (__VLS_ctx.intensity);
    __VLS_styleScopedClasses = ({ 'disabled-color-input': !connected });
    // @ts-ignore
    [connected, connected, updateColor, intensity,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.intensity);
    // @ts-ignore
    [intensity,];
    if (__VLS_ctx.error) {
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
        [error, refreshData,];
    }
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ disabled: (true), ...{ class: ("loading-button") }, });
        // @ts-ignore
        const __VLS_18 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ((['fas', 'spinner'])), spin: (true), }));
        const __VLS_20 = __VLS_19({ icon: ((['fas', 'spinner'])), spin: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ icon: ((['fas', 'spinner'])), spin: (true), }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        // @ts-ignore
        [loading,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.sendColor) }, ...{ class: ("apply-button") }, disabled: ((!__VLS_ctx.connected)), });
        // @ts-ignore
        [connected, sendColor,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['color-picker'];
        __VLS_styleScopedClasses['connected-icon'];
        __VLS_styleScopedClasses['disconnected-icon'];
        __VLS_styleScopedClasses['color-display'];
        __VLS_styleScopedClasses['color-input'];
        __VLS_styleScopedClasses['intensity-control'];
        __VLS_styleScopedClasses['intensity-slider'];
        __VLS_styleScopedClasses['refresh-button'];
        __VLS_styleScopedClasses['loading-button'];
        __VLS_styleScopedClasses['apply-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ColorPicker';
    let __VLS_internalComponent;
}
//# sourceMappingURL=ColorPicker.vue.js.map