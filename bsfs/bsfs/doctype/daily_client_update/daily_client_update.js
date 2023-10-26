// Copyright (c) 2023, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on('Daily Client Update', {
	//Get Shift Template items
    shift_type: function (frm) {
        if (frm.doc.shift_type) {
            frm.clear_table('am_shift');
            frappe.model.with_doc('Shift Template', frm.doc.shift_type, function () {
                let source_doc = frappe.model.get_doc('Shift Template', frm.doc.shift_type);
                $.each(source_doc.shift_overview, function (index, source_row) {
					const target_row = frm.add_child('am_shift');
                    target_row.overview = source_row.overview;
                    frm.refresh_field('am_shift');
                });
            });
        }
    },
	//Get Shift Template items
    shift_type1: function (frm) {
        if (frm.doc.shift_type1) {
            frm.clear_table('pm_shift');
            frappe.model.with_doc('Shift Template', frm.doc.shift_type1, function () {
                let source_doc = frappe.model.get_doc('Shift Template', frm.doc.shift_type1);
                $.each(source_doc.shift_overview, function (index, source_row) {
					const target_row = frm.add_child('pm_shift');
                    target_row.overview = source_row.overview;
                    frm.refresh_field('pm_shift');
                });
            });
        }
    },
	//Get Shift Template items
    shift_type2: function (frm) {
        if (frm.doc.shift_type2) {
            frm.clear_table('night_shift');
            frappe.model.with_doc('Shift Template', frm.doc.shift_type2, function () {
                let source_doc = frappe.model.get_doc('Shift Template', frm.doc.shift_type2);
                $.each(source_doc.shift_overview, function (index, source_row) {
					const target_row = frm.add_child('night_shift');
                    target_row.overview = source_row.overview;
                    frm.refresh_field('night_shift');
                });
            });
        }
    },
});