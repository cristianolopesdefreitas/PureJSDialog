(function( PureJSDialog ){
    'use strict';

    PureJSDialog.templates = {
        alert: '<div id="pure-js-dialog">' +
                    '<div id="pure-js-dialog-header">' +
                        '<h3>[[ title ]]</h3>' +
                        '<span id="pure-js-dialog-close">x</span>' +
                    '</div>' +
                    '<div id="pure-js-dialog-body">' +
                        '<p>[[ message ]]</p>' +
                    '</div>' +
                    '<div id="pure-js-dialog-footer">' +
                        '<button type="button" class="pure-js-dialog-accept-button">[[ textButton ]]</button>' +
                    '</div>' +
                '</div>',
        comfirm: '<div id="pure-js-dialog">' +
                        '<div id="pure-js-dialog-header">' +
                            '<h3>[[ title ]]</h3>' +
                            '<span id="pure-js-dialog-close">x</span>' +
                        '</div>' +
                        '<div id="pure-js-dialog-body">' +
                            '<p>[[ message ]]</p>' +
                        '</div>' +
                        '<div id="pure-js-dialog-footer">' +
                            '<button type="button" class="pure-js-dialog-cancel-button">[[ textButton ]]</button>' +
                            '<button type="button" class="pure-js-dialog-accept-button">[[ textButton ]]</button>' +
                        '</div>' +
                    '</div>',
        prompt: '<div id="pure-js-dialog">' +
                        '<div id="pure-js-dialog-header">' +
                            '<h3>[[ title ]]</h3>' +
                            '<span id="pure-js-dialog-close">x</span>' +
                        '</div>' +
                        '<div id="pure-js-dialog-body">' +
                            '<p>[[ message ]]</p>' +
                            '<div>' +
                                '<input type="text" name="promptField" class="pure-js-dialog-field" placeholder="[[ placeholder ]]">' +
                            '</div>' +
                        '</div>' +
                        '<div id="pure-js-dialog-footer">' +
                            '<button type="button" class="pure-js-dialog-cancel-button">[[ textButton ]]</button>' +
                            '<button type="button" class="pure-js-dialog-accept-button">[[ textButton ]]</button>' +
                        '</div>' +
                    '</div>'
    };

}( window.PureJSDialog ));
