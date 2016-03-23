## PureJSDialog

Custom alert, confirm and prompt with javaScript.

### Possible Configurations

```bash

PureJSDialog.factory.createDialog( 'alert' ); // The first parameter is the type of dialog, there are three: 'alert', 'confirm' ou 'prompt'.

PureJSDialog.factory.createDialog( dialog {
    title: 'Dialog title', // It's not mandatory, but is empty without you do not put anything.
    message: 'Your message!', // It is required you would not make a dialogue if he had nothing to say is not it?
    acceptButtonText: 'OK', // It's not mandatory, default 'OK'.
    cancelButtonText: 'Cancel', // It's not mandatory, default 'Cancelar', only for the dialog type 'prompt' and 'confirm'.
    closeDialogID: 'close-dialog-test', // It is required for the bind is done.
    onClose: PureJSDialog.factory.removeDialog, // It's required, it's a function.
    acceptButtonID: 'confirm-accept-test', // It's required.
    acceptButtonColor: 'green', // It's not mandatory, default 'gray'.
    onAccept: getPromptText, // It's required, it's a function.
    cancelButtonID: 'cancel-test', // It is required for the bind is done, only for the dialog type 'prompt' and 'confirm'.
    cancelButtonColor: 'red', // It's not mandatory, default 'gray', only for the dialog type 'prompt' and 'confirm'.
    onCancel: PureJSDialog.factory.removeDialog, // It's required, it's a function, only for the dialog type 'prompt' and 'confirm'.
    placeholderField: 'placeholder...', // It's not mandatory, default void, only for the dialog type 'prompt'.
    fieldID: 'field-dialog' // It is required for the bind is done, only for the dialog type 'prompt'.
});

});

```

### Licence

(The MIT Licence)

2016 - Cristiano Lopes de Freitas
