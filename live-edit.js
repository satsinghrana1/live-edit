/**
 * Dev : Sat Singh Rana
 * Created : 05/12/2019
 * Updated : 05/12/2019
 * Description : This script will alow the user to edit there webpages without login to cpanels or FTP's
 */


// Self called function to prevent any confliction with other libraries.
(function () {    

    // use strict is used to maintain the code standard
    'user strict';   

    // object based javascript class
    var live_edit = {
        _scope  : null,
        _holder : $('body'), 
        init : function (params) {
            this._scope = window;
            this.create_element();
        },
        create_element: function (params) { 
            console.log('Scope : ', this._scope);


            var scope_holder_html = '<div class="live-edit-holder">';
                    scope_holder_html += '<div class="live-edit-main">'
                    // operation buttons will be here.
                    scope_holder_html += '</div>'
                scope_holder_html += '</div>'
                

            _holder.append(scope_holder_html);            
        }
    };

    //  var elm; this will be the element we need to use to show the live edit view
        var elm = 'any element';
    
    // Initiating the object of the class
    $(elm).click(function (params) {

        console.log(' Live edit initiated... ');

        live_edit.init();        
    });

});