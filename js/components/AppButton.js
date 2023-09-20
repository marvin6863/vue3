export default {
    template: `
    <button class="bg-lime-300 p-2 rounded-md disabled:bg-red-500" :disabled="processing">
        <slot />
    </button>
    `,
    data() {
        return {
                processing: true
        };
    }
}