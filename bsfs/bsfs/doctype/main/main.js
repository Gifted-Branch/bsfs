// Copyright (c) 2025, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on('Main', {
    refresh: function(frm) {
        calculate_totals(frm);
    },
    child_table_name_on_form: function(frm) {
        calculate_totals(frm);
    },
    child_table_name_remove: function(frm) {
        calculate_totals(frm);
    }
});

function calculate_totals(frm) {
    let total_1 = 0;
    let total_2 = 0;

    // Loop through the child table rows
    frm.doc.child_table_name.forEach(function(row) {
        total_1 += row.data_1 || 0;
        total_2 += row.data_2 || 0;
    });

    // Set the totals on the parent fields 'total_1' and 'total_2'
    frm.set_value('total_1', total_1);
    frm.set_value('total_2', total_2);
    
    // Refresh the fields to display the calculated totals
    frm.refresh_field('total_1');
    frm.refresh_field('total_2');
}
