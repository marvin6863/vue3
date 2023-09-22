import AssignmentList from "./AssignmentList.js";

export default {
    name: 'Assignments',

    components: { AssignmentList },

    template: `
        <assignment-list :assignments="filters.incomplete" title="In Progress"></assignment-list>
        
        <assignment-list :assignments="filters.complete" title="Completed"></assignment-list>

        <form @submit.prevent="add">
            <input v-model="newAssignment" placeholder="New Assignment" class="text-black rounded p-2" />
            <button type="submit" class="bg-lime-400 hover:bg-green-600 p-2 rounded ml-2">Add</button>
        </form>
    `,

    data() {
        return {
            assignments: [{
                id: 1,
                name: 'Wake Up',
                complete: false
                },
            {
                id: 2,
                name: 'Brush teeth',
                complete: true
                },
            {
                id: 3,
                name: 'Call Amalia',
                complete: true
                }
            ],
            
            newAssignment: ''
         }
    },

    computed: {

        filters() {
            return {
                incomplete: this.assignments.filter(a => ! a.complete),
                complete: this.assignments.filter(a => a.complete),
            }
        }
    },

    methods: {
        add() {
            
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    },
}