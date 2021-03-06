"use strict";

const Catalogo = require('./Catalogo');

class CodigosEstadoItem extends Catalogo{
  constructor(codigo) {
    const datos = {
      '1': {
        descripcion: 'Adicionar',
      },
      '2': {
        descripcion: 'Modificar',
      },
      '3': {
        descripcion: 'Anulado',
      },
    };

    super(datos, codigo);
  }

  static get ADICIONAR() {
    return "1";
  }
  static get MODIFICAR() {
    return "2";
  }
  static get ANULADO() {
    return "3";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "19";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de estado del ítem (resumen diario)";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Código de Estado del Ítem";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }
}

module.exports = CodigosEstadoItem;
