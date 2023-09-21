export default {
    name: 'Submit',
    template: `
        <button :class="{
            'p-2 rounded disabled:cursor-not-allowed': true,
            'bg-lime-400 hover:bg-green-600': type === 'success',
            'bg-blue-600 hover:bg-blue-800': type === 'primary',
            'bg-red-600 hover:bg-red-500': type === 'danger',
            'is-loading': processing
        }" :disabled="processing">
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'success'
        },

        processing: {
            type: Boolean,
            default: false
        }
    }


}