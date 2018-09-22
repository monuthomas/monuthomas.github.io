var editor; // use a global for the submit and return data rendering in the examples
var userEditor;

$(document).ready(function () {
    //alert("Here");
    editor = new $.fn.dataTable.Editor({
        //"ajax": "https://mysterious-beyond-85009.herokuapp.com/customers",
        "ajax": "http://localhost:5050" + "/customers",
        "table": "#table_id",
        "idSrc": "_id",
        "fields": [{
            "label": "Name:",
            "name": "name"
        }, {
            "label": "Address:",
            "name": "address"
        }
        ]
    });

    //$('#table_id').DataTable( {
    //    dom: "Bfrtip",
    //    //ajax: "https://mysterious-beyond-85009.herokuapp.com/customers",
    //    "ajax": "http://localhost:5050" + "/customers",
    //    "sAjaxDataProp": "data",
    //    columns: [
    //        { data: "name" },
    //        { data: "address" },        
    //    ],
    //    select: true,
    //    buttons: [
    //        { extend: "create", editor: editor },
    //        { extend: "edit",   editor: editor },
    //        { extend: "remove", editor: editor }
    //    ]
    //} );

    $('#table_id').DataTable({
        dom: "Bfrtip",
        //"ajax": "https://mysterious-beyond-85009.herokuapp.com/customers",
        "ajax": {
            "url": "http://localhost:5050" + "/customers",
            //"url": "https://mysterious-beyond-85009.herokuapp.com/customers",
            "dataSrc": ""
        },
        columns: [
            { data: "name" },
            { data: "address" },
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit", editor: editor },
            { extend: "remove", editor: editor }
        ]
    });

    userEditor = new $.fn.dataTable.Editor({
        //"ajax": "https://mysterious-beyond-85009.herokuapp.com/users_details",
        "ajax": "http://localhost:5050" + "/users_details",
        "table": "#table_users",
        "idSrc": "_id",
        "fields": [{
                "label": "First Name:",
                "name": "first_name"
            }, {
                "label": "Last Name:",
                "name": "last_name"
            }, {
                "label": "Email:",
                "name": "email"
            }, {
                "label": "Diet Plan:",
                "name": "diet_plan"
            }
        ]
    });

    $('#table_users').DataTable({
        dom: "Bfrtip",
        //ajax: "https://mysterious-beyond-85009.herokuapp.com/users",
        "ajax": {
            "url": "http://localhost:5050" + "/users_details",
            //"url":"https://mysterious-beyond-85009.herokuapp.com/users_details",
            "dataSrc": ""
        },
        columns: [
                  {
                   data: null, render: function (data, type, row) {
                    // Combine the first and last names into a single table field
                    return data.first_name + ' ' + data.last_name;
                }},
            //{ data: "email" },
            {
                "data": "email", // can be null or undefined
                "defaultContent": "<i>Not set</i>"
            },
            //{ data: "diet_plan" },
            {
                "data": "diet_plan", // can be null or undefined
                "defaultContent": "<i>Not set</i>"
            }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: userEditor },
            { extend: "edit", editor: userEditor },
            { extend: "remove", editor: userEditor }
        ]
    });

});

//var NoteEditor;

//$(document).ready(function() {

//    NoteEditor = new $.fn.dataTable.Editor( {
//        ajax: {
//            create: {
//                url: "/perl/applnotecreate.pl",
//                type: "POST",
//                dataType: "json"
//            },
//            remove: {
//                url: "/perl/applnoteremove.pl",
//                type: "POST",
//                dataType: "json"
//            }
//        },
//        table: "#tablenote",
//        fields: [
//          { label: "Date:", name: "updated_gmt_ts", type: "hidden" },
//          { label: "User:", name: "created_user", type: "hidden" },
//          { label: "Note:", name: "note_txt", type: "textarea", attr: { maxlength: 3900, placeholder: "required"} },
//          { label: "Application ID:", name: "application_id", type: "hidden" },
//          { label: "Application Note ID:", name: "application_note_id", type: "hidden" },
//          { label: "Session ID:", name: "session_id", type: "hidden" },
//          { label: "Language Code:", name: "language_cd", type: "hidden" }
//        ]
//    } );

//    NoteEditor.on( "preSubmit", function ( e, o, action ) {
//        o.data.session_id = "<TMPL_VAR NAME=APACHE_SESSION_ID>";
//        o.data.language_cd = "<TMPL_VAR NAME=LANG_CD>";
//        o.data.application_id = "<TMPL_VAR NAME=APPLICATION_ID>";
//        if ( action !== "remove" ) {
//            if ( o.data.note_txt === "" )
//            {
//                this.error( "note_txt", "Note cannot be blank." );
//                return false;
//            }
//        }
//    } );

//    $("#tablenote").DataTable( {
//        dom: "T<'clear'>rtip",
//        ajax: {
//            url: "/perl/applnoteload.pl?session_id=<TMPL_VAR NAME=APACHE_SESSION_ID>&language_cd=<TMPL_VAR NAME=LANG_CD>&application_id=<TMPL_VAR NAME=APPLICATION_ID>",
//            type: "GET",
//            dataType: "json"
//        },
//        columns: [
//          { "data": "updated_gmt_ts" },
//          { "data": "created_user" },
//          { "data": "note_txt" },
//          { "data": "application_id" },
//          { "data": "application_note_id" },
//          { "data": "session_id" },
//          { "data": "language_cd" }
//        ],
//        columnDefs: [
//          { "targets": [0], "width": "15%" },
//          { "targets": [1], "width": "20%" },
//          { "targets": [3], "visible": false, "searchable": false },
//          { "targets": [4], "visible": false, "searchable": false },
//          { "targets": [5], "visible": false, "searchable": false },
//          { "targets": [6], "visible": false, "searchable": false }
//        ],
//        order: [[0,"desc"]],
//        lengthMenu: [<TMPL_VAR NAME=ROWS_PER_PAGE>],
//        lengthChange: false,
//        tableTools: {
//            sRowSelect: "single"
//      <TMPL_IF NAME=ROLE_CHANGEAPPL>
//         , aButtons: [
//            { sExtends: "editor_create", editor: NoteEditor },
//            { sExtends: "editor_remove", editor: NoteEditor }
//         ]
//    </TMPL_IF>
//    }
//    } );
