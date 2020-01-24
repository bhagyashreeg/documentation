class square{
    constructor(height,width){
        this.h=height;
        this.w=width;
    }
    test(){
        console.log("The height is" + this.h)
        console.log("The width is" + this.w)
    }
}

sqobj = new square(10,20);
sqobj.test();