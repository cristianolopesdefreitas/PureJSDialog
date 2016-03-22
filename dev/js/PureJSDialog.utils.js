(function( PureJSDialog ) {
    'use strict';

    var documentBody = document.body;

    function getAddEventMode() {
        return documentBody.addEventListener ? 'addEventListener' : 'attachEvent';
    }

    function getRemoveEventMode() {
        return documentBody.removeEventListener ? 'removeEventListener' : 'detachEvent';
    }

    function getEventPrefix() {
        return documentBody.addEventListener ? '' : 'on';
    }

    PureJSDialog.utils = {
        // adiciona listeners / fallback para suporte ao ie8
        addEvent: function( event, element, fn ) {
            element[ getAddEventMode() ]( getEventPrefix() + event, fn );
        },
        removeEvent: function( event, element, fn ) {
            element[ getRemoveEventMode() ]( getEventPrefix() + event, fn );
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
		},
        // faz o merge de dois objetos
        mergeObject: function( defaults, custom ) {
            var merged = {},
                index = null;

            for ( index in defaults ) {
                merged[ index ] = defaults[ index ];
            }

            for ( index in custom ) {
                merged[ index ] = custom[ index ];
            }

            return merged;
        },
        clickTriggerPressingEnter: function( eventTarget, button ) {
            var charCode = eventTarget.which || eventTarget.keyCode;

            if ( charCode === 13 ) {
                button.click();
            }
        },
        elementFocus: function( element ) {
            element.focus();
        }
    };

}( window.PureJSDialog ));
