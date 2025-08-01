// Copyright (c) 2025, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on("BSFS Timesheet", {
    validate: function (frm) {
        let total_awake = 0;
        let total_sleep = 0;

        (frm.doc.bsfs_timesheet_details || []).forEach(row => {
            total_awake += flt(row.awake_hrs);
            total_sleep += flt(row.sleep_hrs);
        });

        frm.set_value("total_awake_hrs", total_awake);
        frm.set_value("total_sleep_hrs", total_sleep);
        frm.set_value("total_hrs", total_awake + total_sleep);

        update_total_hours_from_sign_in_out(frm);
        update_total_rates(frm);
    }
});

frappe.ui.form.on("BSFS Timesheet Details", {
    awake_hrs: function (frm, cdt, cdn) {
        calculate_totals(frm);
    },
    sleep_hrs: function (frm, cdt, cdn) {
        calculate_totals(frm);
    },
    bsfs_timesheet_details_add: function(frm) {
        calculate_totals(frm);
    },
    bsfs_timesheet_details_remove: function(frm) {
        calculate_totals(frm);
    }
});

function calculate_totals(frm) {
    let total_awake = 0;
    let total_sleep = 0;

    (frm.doc.bsfs_timesheet_details || []).forEach(row => {
        total_awake += flt(row.awake_hrs);
        total_sleep += flt(row.sleep_hrs);
    });

    frm.set_value("total_awake_hrs", total_awake);
    frm.set_value("total_sleep_hrs", total_sleep);
    frm.set_value("total_hrs", total_awake + total_sleep);
}


function update_total_hours_from_sign_in_out(frm) {
    var staff = frm.doc.staff_name;
    var pay_from = frm.doc.pay_period_from;
    var pay_to = frm.doc.pay_period_to;

    if (staff && pay_from && pay_to) {
        frappe.db.get_list('Sign in and Sign out form', {
            filters: {
                staff_name: staff,
                date: ['between', [pay_from, pay_to]],
            },
            fields: ['name', 'total_hours']
        }).then(records => {
            if (records.length > 0) {
                var total_hours = records.reduce((acc, doc) => acc + doc.total_hours, 0);
                frm.set_value('total_check_in_and_out_hours', total_hours);
            } else {
                frm.set_value('total_check_in_and_out_hours', 0);
            }
        });
    }
}

function update_total_rates(frm) {
    var staff = frm.doc.staff_name;

    if (staff) {
        frappe.db.get_list('Staff Hourly Rate', {
            filters: {
                staff_name: staff,
                disabled: 0
            },
            fields: ['name', 'awake_rate', 'sleep_rate']
        }).then(records => {
            if (records.length > 0) {
                // Calculate total dollars based on awake and sleep rates
                var total_awake_rate = frm.doc.total_awake_hrs * records[0].awake_rate;
                var total_sleep_rate = frm.doc.total_sleep_hrs * records[0].sleep_rate;

                frm.set_value('awake_hrs_dollars', total_awake_rate);
                frm.set_value('sleep_hrs_dollars', total_sleep_rate);
                frm.set_value('total_dollars', total_awake_rate + total_sleep_rate);
            } else {
                frm.set_value('awake_hrs_dollars', 0);
                frm.set_value('sleep_hrs_dollars', 0);
                frm.set_value('total_dollars', 0);
            }
        });
    }
}