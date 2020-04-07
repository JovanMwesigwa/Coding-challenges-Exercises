
class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static equals(a, b){
        return a.width * a.height === b.width * b.height
    }
}

let Square1 = new Square(20);
let Square2  = new Square(20);


