(function( PureJSDialog ) {
    'use strict';

    function openAlert() {
        PureJSDialog.factory.createDialog( 'alert', {
            title: 'Mensagem do Sistema',
            message: 'Sua mensagem aqui!!!',
            acceptButtonText: 'OK',
            acceptButtonColor: 'green',
            closeDialogID: 'close-dialog-test',
            onClose: PureJSDialog.factory.removeDialog,
            acceptButtonID: 'comfirm-accept-test',
            onAccept: PureJSDialog.factory.removeDialog
        });
    }

    function openConfirm() {
        PureJSDialog.factory.createDialog( 'comfirm', {
            title: 'Mensagem do Sistema',
            message: 'Sua mensagem aqui!!!',
            acceptButtonText: 'OK',
            acceptButtonColor: 'blue',
            cancelButtonText: 'Cancelar',
            closeDialogID: 'close-dialog-test',
            onClose: PureJSDialog.factory.removeDialog,
            acceptButtonID: 'comfirm-accept-test',
            onAccept: PureJSDialog.factory.removeDialog,
            cancelButtonID: 'cancel-test',
            onCancel: PureJSDialog.factory.removeDialog
        });
    }

    function openPrompt() {
        PureJSDialog.factory.createDialog( 'prompt', {
            title: 'Mensagem do Sistema',
            message: 'Sua mensagem aqui!!!',
            acceptButtonText: 'OK',
            cancelButtonText: 'Cancelar',
            closeDialogID: 'close-dialog-test',
            onClose: PureJSDialog.factory.removeDialog,
            acceptButtonID: 'comfirm-accept-test',
            acceptButtonColor: 'green',
            onAccept: PureJSDialog.factory.removeDialog,
            cancelButtonID: 'cancel-test',
            cancelButtonColor: 'red',
            onCancel: PureJSDialog.factory.removeDialog,
            placeholderField: 'Digite seu texto aqui...',
            fieldID: 'field-dialog'
        });
    }

    function addEvent( event, element, fn ) {
        var documentBody = document.body,
            eventListener = documentBody.addEventListener ? 'addEventListener' : 'attachEvent',
            prefix = documentBody.addEventListener ? '' : 'on';

        element[ eventListener ]( prefix + event, function( eventTarget ) {
            fn();
        });
    }

    function init() {
        var buttonAlert = document.getElementById( 'button-alert' ),
            buttonComfirm = document.getElementById( 'button-comfirm' ),
            buttonPrompt = document.getElementById( 'button-prompt' );

        addEvent( 'click', buttonAlert, openAlert );
        addEvent( 'click', buttonComfirm, openConfirm );
        addEvent( 'click', buttonPrompt, openPrompt );
    }

    window.onload = function() {
        init();
    }

}( window.PureJSDialog ));
