(function( PureJSDialog ) {
    'use strict';

    PureJSDialog.utils = function() {
        return {
            // adiciona um evento ao body para funcionamento de elementos dinâmicos / fallback para suporte ao ie8
            addEvent: function( event, fn ) {
                var documentBody = document.body,
                    eventListener = documentBody.addEventListener ? 'addEventListener' : 'attachEvent',
                    prefix = documentBody.addEventListener ? '' : 'on';

                documentBody[ eventListener ]( prefix + event, function( eventTarget ) {
                    fn( eventTarget );
                });
            },
            // retorna a referência para o elemento pelo atributo id
            getById: function( id ) {
                return document.getElementById( id );
            },
            // retorna o valor corrente referente à propriedade css / fallback para suporte ao ie8
            getStyleValue: function( element, property ) {
                if ( window.getComputedStyle !== undefined ) {
                    return getComputedStyle( element, null ).getPropertyValue( property );
                } else {
                    return element.currentStyle[ property ];
                }
            },
            // retorna o atributo id do alvo de um evento disparado
            getTargetIdByEvent: function( eventTarget ) {
                var element = eventTarget.srcElement ? eventTarget.srcElement : eventTarget.target;

                return element.getAttribute( 'id' );
            },
            // faz o parser dos placeholders nos templates html
            templateParser: function( map, template ) {
    			var find = '',
                    i = 0;

    			for ( var index in map ) {
    				find = '[[ ' + index + ' ]]';
    				i = template.indexOf( find );

    				while ( i > -1 ) {
    					template = template.replace( '[[ ' + index + ' ]]', map[ index ] );
    					i = template.indexOf( find );
    				}
    			}

    			return template;
    		}
        };
    };
    
}( window.PureJSDialog ));
