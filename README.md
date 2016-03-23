## PureJSDialog

Custom alert, confirm and prompt with javaScript.

### Possible Configurations

The Dialog type

```bash

PureJSDialog.factory.createDialog( 'alert' ); // The first parameter is the type of dialog, there are three: 'alert', 'confirm' ou 'prompt'.

```

All possibilities

```bash

PureJSDialog.factory.createDialog( dialog {
    title: 'Dialog title',
    message: 'Your message!',
    acceptButtonText: 'OK',
    cancelButtonText: 'Cancel',
    closeDialogID: 'close-dialog-test',
    onClose: PureJSDialog.factory.removeDialog,
    acceptButtonID: 'confirm-accept-test',
    acceptButtonColor: 'green',
    onAccept: getPromptText,
    cancelButtonID: 'cancel-test',
    cancelButtonColor: 'red',
    onCancel: PureJSDialog.factory.removeDialog,
    placeholderField: 'placeholder...',
    fieldID: 'field-dialog'
});

```

### Detailed parameters

- **title** => It's not mandatory, but is empty without you do not put anything.
- **message** => It is required you would not make a dialogue if he had nothing to say is not it?
- **acceptButtonText** => It's not mandatory, default 'OK'.
- **cancelButtonText** => It's not mandatory, default 'Cancelar', only for the dialog type 'prompt' and 'confirm'.
- **closeDialogID** => It is required for the bind is done.
- **onClose** => It's required, it's a function.
- **acceptButtonID** => It's required.
- **acceptButtonColor** => It's not mandatory, default 'gray'.
- **onAccept** => It's required, it's a function.
- **cancelButtonID** => It is required for the bind is done, only for the dialog type 'prompt' and 'confirm'.
- **cancelButtonColor** => It's not mandatory, default 'gray', only for the dialog type 'prompt' and 'confirm'.
- **onCancel** => It's required, it's a function, only for the dialog type 'prompt' and 'confirm'.
- **placeholderField** => It's not mandatory, default void, only for the dialog type 'prompt'.
- **fieldID** => It is required at all as you will retrieve the text entered here? Only for the dialog type 'prompt'.

### Licence

(The MIT Licence)

2016 - Cristiano Lopes de Freitas
