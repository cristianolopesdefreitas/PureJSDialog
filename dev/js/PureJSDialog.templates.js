(function( PureJSDialog ){
    'use strict';

    PureJSDialog.templates = {
        alert: '<div id="pure-js-dialog">' +
                    '<div id="pure-js-dialog-header">' +
                        '<h3>[[ title ]]</h3>' +
                        '<span id="[[ closeDialogID ]]" class="pure-js-dialog-close">x</span>' +
                    '</div>' +
                    '<div id="pure-js-dialog-body">' +
                        '<p>[[ message ]]</p>' +
                    '</div>' +
                    '<div id="pure-js-dialog-footer">' +
                        '<button type="button" id="[[ acceptButtonID ]]" class="pure-js-dialog-button pure-js-dialog-accept-button">[[ textAcceptButton ]]</button>' +
                    '</div>' +
                '</div>',
        comfirm: '<div id="pure-js-dialog">' +
                        '<div id="pure-js-dialog-header">' +
                            '<h3>[[ title ]]</h3>' +
                            '<span id="[[ closeDialogID ]]" class="pure-js-dialog-close">x</span>' +
                        '</div>' +
                        '<div id="pure-js-dialog-body">' +
                            '<p>[[ message ]]</p>' +
                        '</div>' +
                        '<div id="pure-js-dialog-footer">' +
                            '<button type="button" id="[[ cancelButtonID ]]" class="pure-js-dialog-button pure-js-dialog-cancel-button">[[ textCancelButton ]]</button>' +
                            '<button type="button" id="[[ acceptButtonID ]]" class="pure-js-dialog-button pure-js-dialog-accept-button">[[ textAcceptButton ]]</button>' +
                        '</div>' +
                    '</div>',
        prompt: '<div id="pure-js-dialog">' +
                        '<div id="pure-js-dialog-header">' +
                            '<h3>[[ title ]]</h3>' +
                            '<span id="[[ closeDialogID ]]" class="pure-js-dialog-close">x</span>' +
                        '</div>' +
                        '<div id="pure-js-dialog-body">' +
                            '<p>[[ message ]]</p>' +
                            '<div>' +
                                '<input type="text" name="promptField" class="pure-js-dialog-field" placeholder="[[ placeholder ]]">' +
                            '</div>' +
                        '</div>' +
                        '<div id="pure-js-dialog-footer">' +
                            '<button type="button" id="[[ cancelButtonID ]]" class="pure-js-dialog-button pure-js-dialog-cancel-button">[[ textCancelButton ]]</button>' +
                            '<button type="button" id="[[ acceptButtonID ]]" class="pure-js-dialog-button pure-js-dialog-accept-button">[[ textAcceptButton ]]</button>' +
                        '</div>' +
                    '</div>'
    };

}( window.PureJSDialog ));
