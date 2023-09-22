export default {
    name: 'Assignment',

    template: `
    <li>
    {{ assignment.name }}
    <input type="checkbox" v-model="assignment.complete">
</li>
    `,

    props: {
        assignment: {
            type: Object
        }
    }
}