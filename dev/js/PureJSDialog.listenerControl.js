(function( PureJSDialog ){
    'use strict';

    var listeners = {};

    PureJSDialog.listenerControl = {
        // adiciona um evento ao body para funcionamento de elementos dinâmicos / fallback para suporte ao ie8
        addEvent: function( event ) {
            var documentBody = document.body,
                eventListener = documentBody.addEventListener ? 'addEventListener' : 'attachEvent',
                prefix = documentBody.addEventListener ? '' : 'on';

            documentBody[ eventListener ]( prefix + event, function( eventTarget ) {
                PureJSDialog.listenerControl.dispatch( eventTarget );
            });
        },
        addListener: function( event, target, fn ) {
            listeners[ target ] = {
                type: event,
                fn: fn
            };
        },
        dispatch: function( eventTarget ) {
            var target = PureJSDialog.utils.getTargetIdByEvent( eventTarget );

            if ( listeners[ target ] && listeners[ target ].type === eventTarget.type ) {
                listeners[ target ].fn();
            }
        }
    };

    PureJSDialog.listenerControl.addEvent( 'click' );

}( window.PureJSDialog ));
