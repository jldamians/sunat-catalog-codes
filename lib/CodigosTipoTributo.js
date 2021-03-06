"use strict";

const Catalogo = require('./Catalogo');

class CodigosTipoTributo extends Catalogo {
  constructor(codigo) {
    const datos = {
      '1000': {
        descripcion: 'IGV Impuesto General a las Ventas',
        nombre: 'IGV',
        categoria: 'S',
        codigo: 'VAT',
      },
      '1016': {
        descripcion: 'Impuesto a la Venta Arroz Pilado',
        nombre: 'IVAP',
        categoria: 'S',
        codigo: 'VAT',
      },
      '2000': {
        descripcion: 'ISC Impuesto Selectivo al Consumo',
        nombre: 'ISC',
        categoria: 'S',
        codigo: 'EXC',
      },
      '7152': {
        descripcion: 'Impuesto al Consumo de las bolsas de plástico',
        nombre: 'ICBPER',
        categoria: 'S',
        codigo: 'OTH',
      },
      '9995': {
        descripcion: 'Exportación',
        nombre: 'EXP',
        categoria: 'G',
        codigo: 'FRE',
      },
      '9996': {
        descripcion: 'Gratuito',
        nombre: 'GRA',
        categoria: 'Z',
        codigo: 'FRE',
      },
      '9997': {
        descripcion: 'Exonerado',
        nombre: 'EXO',
        categoria: 'E',
        codigo: 'VAT',
      },
      '9998': {
        descripcion: 'Inafecto',
        nombre: 'INA',
        categoria: 'O',
        codigo: 'FRE',
      },
      '9999': {
        descripcion: 'Otros tributos',
        nombre: 'OTROS',
        categoria: 'S',
        codigo: 'OTH',
      },
    };

    super(datos, codigo);
  }

  static get IGV() {
    return "1000";
  }
  static get IVAP() {
    return "1016";
  }
  static get ISC() {
    return "2000";
  }
  static get ICBPER() {
    return "7152";
  }
  static get EXP() {
    return "9995";
  }
  static get GRA() {
    return "9996";
  }
  static get EXO() {
    return "9997";
  }
  static get INA() {
    return "9998";
  }
  static get OTROS() {
    return "9999";
  }

  /**
   * Obtener el número del catálogo
   */
  static get numeroCat() {
    return "05";
  }

  /**
   * Obtener el título del catálogo
   */
  static get tituloCat() {
    return "Código de tipos de tributos y otros conceptos";
  }

  /**
   * Obtener el nombre del catálogo
   */
  static get nombreCat() {
    return "Codigo de tributos";
  }

  /**
   * Obtener la agencia del catálogo
   */
  static get agenciaCat() {
    return "PE:SUNAT";
  }

  /**
   * Obtener el nombre relacionado a un código
   */
  nombre() {
    return super.informacion('nombre');
  }

  /**
   * Obtener la categoria relacionado a un código
   */
  categoria() {
    return super.informacion('categoria');
  }

  /**
   * Obtener código internacional relacionado a un código
   */
  codigo() {
    return super.informacion('codigo');
  }
}

module.exports = CodigosTipoTributo;
