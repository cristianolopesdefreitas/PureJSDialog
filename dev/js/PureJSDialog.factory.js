(function( PureJSDialog ) {
    'use strict';

    PureJSDialog.factory = function() {
        var documentBody = document.body;

        // listener para o botão (x) que por padrão serve para fechar o modal
        function defaultListenerToCloseDialog( event ) {
            if ( PureJSDialog.utils.getTargetIdByEvent( event ) === 'pure-js-dialog-close' ) {
                PureJSDialog.factory.removeModal();
            }
        }

        PureJSDialog.utils.addEvent( 'click', defaultListenerToCloseDialog );

        return {
            // cria um novo modal no body
            createModal: function( map, template ) {
                var dialogWrapper = document.createElement( 'div' );

                if ( PureJSDialog.utils.getById( 'pure-js-dialog-wrapper' ) ) {
                    this.removeModal();
                }

                dialogWrapper.setAttribute( 'id', 'pure-js-dialog-wrapper' );
                dialogWrapper.innerHTML = PureJSDialog.utils.templateParser( map, template );
                documentBody.appendChild( dialogWrapper );

                this.resizeModal();
                this.showModal();
            },
            // remove o modal body
            removeModal: function() {
                documentBody.removeChild( PureJSDialog.utils.getById( 'pure-js-dialog-wrapper' ) );
            },
            // ajusta o tamanho do modal
            resizeModal: function() {
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
            showModal: function() {
                PureJSDialog.utils.getById( 'pure-js-dialog-wrapper' ).style.visibility = 'visible';
            }
        };

    };

}( window.PureJSDialog ));
