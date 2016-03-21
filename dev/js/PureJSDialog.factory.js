(function( PureJSDialog ) {
    'use strict';

    var documentBody = document.body,
        defaults = {
            title: '',
            textAcceptButton: 'Aceitar',
            textCancelButton: 'Cancelar'
        };

    PureJSDialog.factory = {
        // cria um novo modal no body
        createDialog: function( type, settings ) {
            var dialogWrapper = document.createElement( 'div' );

            settings = PureJSDialog.utils.mergeObject( defaults, settings );

            if ( settings.onClose && settings.closeDialogID ) {
                PureJSDialog.listenerControl.addListener( 'click', settings.closeDialogID, settings.onClose );
            }

            if ( settings.onAccept && settings.acceptButtonID ) {
                PureJSDialog.listenerControl.addListener( 'click', settings.acceptButtonID, settings.onAccept );
            }

            if ( settings.onCancel && settings.cancelButtonID ) {
                PureJSDialog.listenerControl.addListener( 'click', settings.cancelButtonID, settings.onCancel );
            }

            if ( PureJSDialog.utils.getById( 'pure-js-dialog-wrapper' ) ) {
                this.removeModal();
            }

            dialogWrapper.setAttribute( 'id', 'pure-js-dialog-wrapper' );
            dialogWrapper.innerHTML = PureJSDialog.utils.templateParser( settings, PureJSDialog.templates[ type ] );
            documentBody.appendChild( dialogWrapper );

            this.resizeDialog();
            this.showDialog();
        },
        // remove o modal body
        removeDialog: function() {
            documentBody.removeChild( PureJSDialog.utils.getById( 'pure-js-dialog-wrapper' ) );
        },
        // ajusta o tamanho do modal
        resizeDialog: function() {
            var dialogMessage = PureJSDialog.utils.getById( 'pure-js-dialog-body' ),
                dialogContainer = PureJSDialog.utils.getById( 'pure-js-dialog' ),
                screenHeight = this.getScreenHeight() - 100,
                dialogContainerHeight = this.getElementHeight( dialogMessage ) + 100;

            if ( dialogContainerHeight > screenHeight ) {
                dialogContainerHeight = screenHeight;
            }

            this.setElementHeight( dialogMessage, dialogContainerHeight - 100 );
            this.setElementHeight( dialogContainer, dialogContainerHeight );
        },
        // retorna a altura do browser disponível
        getScreenHeight: function() {
            return window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
        },
        // retorna a altura do elemento
        getElementHeight: function( element ) {
            return element.offsetHeight;
        },
        // seta uma nova altura em um elemento
        setElementHeight: function( element, height ) {
            element.style.height = height + 'px';
        },
        // exibe o modal na tela
        showDialog: function() {
            PureJSDialog.utils.getById( 'pure-js-dialog-wrapper' ).style.visibility = 'visible';
        }
    };

}( window.PureJSDialog ));
