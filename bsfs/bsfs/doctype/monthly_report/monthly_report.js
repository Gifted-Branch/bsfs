// Copyright (c) 2023, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on('Monthly Report', {
	//Get monthly report Template items
    monthly_goals: function (frm) {
        if (frm.doc.monthly_goals) {
            frm.clear_table('monthly_report_detail');
            frappe.model.with_doc('Monthly Report Template', frm.doc.monthly_goals, function () {
                let source_doc = frappe.model.get_doc('Monthly Report Template', frm.doc.monthly_goals);
                $.each(source_doc.monthly_report_template_detail, function (index, source_row) {
					const target_row = frm.add_child('monthly_report_detail');
                    target_row.goals_for_the_month = source_row.goals_month;
                    frm.refresh_field('monthly_report_detail');
                });
            });
        }
    },
});
