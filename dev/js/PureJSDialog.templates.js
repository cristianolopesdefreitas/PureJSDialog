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
                        '<button type="button" id="[[ acceptButtonID ]]" class="pure-js-dialog-button pure-js-dialog-button-[[ acceptButtonColor ]] pure-js-dialog-button-accept">[[ acceptButtonText ]]</button>' +
                    '</div>' +
                '</div>',
        confirm: '<div id="pure-js-dialog">' +
                        '<div id="pure-js-dialog-header">' +
                            '<h3>[[ title ]]</h3>' +
                            '<span id="[[ closeDialogID ]]" class="pure-js-dialog-close">x</span>' +
                        '</div>' +
                        '<div id="pure-js-dialog-body">' +
                            '<p>[[ message ]]</p>' +
                        '</div>' +
                        '<div id="pure-js-dialog-footer">' +
                            '<button type="button" id="[[ cancelButtonID ]]" class="pure-js-dialog-button pure-js-dialog-button-[[ cancelButtonColor ]]">[[ cancelButtonText ]]</button>' +
                            '<button type="button" id="[[ acceptButtonID ]]" class="pure-js-dialog-button pure-js-dialog-button-[[ acceptButtonColor ]] pure-js-dialog-button-accept">[[ acceptButtonText ]]</button>' +
                        '</div>' +
                    '</div>',
        prompt: '<div id="pure-js-dialog">' +
                        '<div id="pure-js-dialog-header">' +
                            '<h3>[[ title ]]</h3>' +
                            '<span id="[[ closeDialogID ]]" class="pure-js-dialog-close">x</span>' +
                        '</div>' +
                        '<div id="pure-js-dialog-body">' +
                            '<p>[[ message ]]</p>' +
                            '<p>' +
                                '<input type="text" name="promptField" id="[[ fieldID ]]" class="pure-js-dialog-field" placeholder="[[ placeholderField ]]" autofocus>' +
                            '</p>' +
                        '</div>' +
                        '<div id="pure-js-dialog-footer">' +
                            '<button type="button" id="[[ cancelButtonID ]]" class="pure-js-dialog-button pure-js-dialog-button-[[ cancelButtonColor ]]">[[ cancelButtonText ]]</button>' +
                            '<button type="button" id="[[ acceptButtonID ]]" class="pure-js-dialog-button pure-js-dialog-button-[[ acceptButtonColor ]] pure-js-dialog-button-accept">[[ acceptButtonText ]]</button>' +
                        '</div>' +
                    '</div>'
    };

}( window.PureJSDialog ));
