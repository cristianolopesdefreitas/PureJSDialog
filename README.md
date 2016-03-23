## PureJSDialog

Custom alert, confirm and prompt with javaScript.

### Possible Configurations

The Dialog type

```bash

PureJSDialog.factory.createDialog( 'alert' ); // The first parameter is the type of dialog, there are three: 'alert', 'confirm' or 'prompt'.

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

- **title** => Not required, but is empty without you do not put anything.
- **message** => Required you would not make a dialogue if he had nothing to say is not it?
- **acceptButtonText** => Not required, default 'OK'.
- **cancelButtonText** => Not required, default 'Cancelar', only for the dialog type 'prompt' and 'confirm'.
- **closeDialogID** => Required for the bind is done.
- **onClose** => Required, it's a function.
- **acceptButtonID** => Required.
- **acceptButtonColor** => Not required, default 'gray'.
- **onAccept** => Required, it's a function.
- **cancelButtonID** => Required for the bind is done, only for the dialog type 'prompt' and 'confirm'.
- **cancelButtonColor** => Not required, default 'gray', only for the dialog type 'prompt' and 'confirm'.
- **onCancel** => Required, it's a function, only for the dialog type 'prompt' and 'confirm'.
- **placeholderField** => Not required, default void, only for the dialog type 'prompt'.
- **fieldID** => Required at all as you will retrieve the text entered here? Only for the dialog type 'prompt'.

### Possible colors for buttons

Green, red, yellow, blue and gray(default).

### Cross-browser

Modern browsers and Internet Explorer 8.

### Licence

(The MIT Licence)

2016 - Cristiano Lopes de Freitas
