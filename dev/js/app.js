(function( PureJSDialog ) {
    'use strict';

    function init() {
        // PureJSDialog.factory.createDialog( 'alert', {
        //     title: 'Mensagem do Sistema',
        //     message: 'Sua mensagem aqui!!!',
        //     textAcceptButton: 'OK',
        //     closeDialogID: 'close-dialog-test',
        //     onClose: PureJSDialog.factory.removeDialog,
        //     acceptButtonID: 'comfirm-accept-test',
        //     onAccept: PureJSDialog.factory.removeDialog
        // });

        // PureJSDialog.factory.createDialog( 'comfirm', {
        //     title: 'Mensagem do Sistema',
        //     message: 'Sua mensagem aqui!!!',
        //     textAcceptButton: 'OK',
        //     textCancelButton: 'Cancelar',
        //     closeDialogID: 'close-dialog-test',
        //     onClose: PureJSDialog.factory.removeDialog,
        //     acceptButtonID: 'comfirm-accept-test',
        //     onAccept: PureJSDialog.factory.removeDialog,
        //     cancelButtonID: 'cancel-test',
        //     onCancel: PureJSDialog.factory.removeDialog
        // });

        PureJSDialog.factory.createDialog( 'prompt', {
            title: 'Mensagem do Sistema',
            message: 'Sua mensagem aqui!!!',
            textAcceptButton: 'OK',
            textCancelButton: 'Cancelar',
            closeDialogID: 'close-dialog-test',
            onClose: PureJSDialog.factory.removeDialog,
            acceptButtonID: 'comfirm-accept-test',
            onAccept: PureJSDialog.factory.removeDialog,
            cancelButtonID: 'cancel-test',
            onCancel: PureJSDialog.factory.removeDialog,
            placeholderField: 'Digite seu texto aqui...',
            fieldID: 'field-dialog'
        });
    }

    window.onload = function() {
        init();
    };

}( window.PureJSDialog ));
