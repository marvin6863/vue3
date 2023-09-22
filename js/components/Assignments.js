import AssignmentList from "./AssignmentList.js";

export default {
    name: 'Assignments',

    components: { AssignmentList },

    template: `
        <assignment-list :assignments="filters.incomplete" title="In Progress"></assignment-list>
        
        <assignment-list :assignments="filters.complete" title="Completed"></assignment-list>

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
            ]       
         }
    },

    computed: {

        filters() {
            return {
                incomplete: this.assignments.filter(a => ! a.complete),
                complete: this.assignments.filter(a => a.complete),
            }
        }
    }
}