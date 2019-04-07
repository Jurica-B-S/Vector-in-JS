class Vector{
  constructor(x,y){
    this._x = x;
    this._y = y; 
  }
  get length(){
    return (Math.sqrt(Math.sqr(this._x) + Math.sqr(this._y)));
  }

  plus(b){
    return new Vector(this._x + b._x, this._y + b._y)
  }
  minus(b){

  }
  toString(){
    return `(${this._x},${this._y})`;
  }
}
