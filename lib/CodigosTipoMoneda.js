"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoMoneda extends Catalogo{
  constructor(codigo) {
    const datos = {
      'PEN': {
        descripcion: 'Sol',
      },
      'USD': {
        descripcion: 'US Dollar',
      },
      'EUR': {
        descripcion: 'Euro',
      },
    };

    super(datos, codigo);
  }

  static get SOL() {
    return "PEN";
  }
  static get DOLAR() {
    return "USD";
  }
  static get EURO() {
    return "EUR";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "02";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de tipo de monedas";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Currency";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "United Nations Economic Commission for Europe";
  }

  /**
   * Obtener el identificador del catálogo
   * @return {String}
   */
  static get idCat() {
    return "ISO 4217 Alpha";
  }
}

module.exports = CodigosTipoMoneda;
