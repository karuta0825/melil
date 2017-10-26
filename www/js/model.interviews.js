
var melil = melil || {};
melil.class = melil.class || {};
melil.class.Interview = class Interview {

  constructor( department ) {
    this.department;
    this.data = {};
  }

  set( key, value ) {
    this.data[key] = value;
  }

}

melil.class.InternalInterView = class Internal extends melil.class.Interview {
  constructor ( department ) {
    super(department);
  }
}
