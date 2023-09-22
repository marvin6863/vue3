import Assignment from "./Assignment.js"

export default {
    name: 'AssignmentList',

    components: { Assignment },

    template: `
        <section v-show="assignments.length" class="mb-4">
            <h2 class="font-bold">{{ title }}</h2>

            <ul class="border border-gray-500 rounded divide-y">
                <assignment :assignment="assignment" v-for="assignment in assignments" :key="assignment.id"></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}