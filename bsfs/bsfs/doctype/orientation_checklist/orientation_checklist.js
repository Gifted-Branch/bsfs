// Copyright (c) 2023, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on('Orientation Checklist', {
    //Get Orientation Checklist Template items
    select_template: function (frm) {
        if (frm.doc.select_template) {
            frm.clear_table('orientation_checklist_detail');
            frappe.model.with_doc('Orientation Checklist Template', frm.doc.select_template, function () {
                let source_doc = frappe.model.get_doc('Orientation Checklist Template', frm.doc.select_template);
                $.each(source_doc.orientation_area, function (index, source_row) {
					const target_row = frm.add_child('orientation_checklist_detail');
                    target_row.area_of_orientation = source_row.area_of_orientation;
                    frm.refresh_field('orientation_checklist_detail');
                });
            });
        }
    },
})