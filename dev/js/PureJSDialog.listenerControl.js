(function( PureJSDialog ){
    'use strict';

    var listeners = {};

    PureJSDialog.listenerControl = {
        // adiciona o target o evento e a função que será executada em uma coleção para aguardar o bind no body
        addListener: function( event, target, fn ) {
            listeners[ target ] = {
                type: event,
                fn: fn
            };
        },
        // executa uma função caso haja o target e o evento sejam os mesmos que foram armazenados
        dispatch: function( eventTarget ) {
            var target = PureJSDialog.utils.getTargetIdByEvent( eventTarget );

            if ( listeners[ target ] && listeners[ target ].type === eventTarget.type ) {
                listeners[ target ].fn();
            }
        }
    };

    // adiciona o bind para o evento 'click' diretamento no body
    PureJSDialog.utils.addEvent( 'click', document.body, PureJSDialog.listenerControl.dispatch );

}( window.PureJSDialog ));
