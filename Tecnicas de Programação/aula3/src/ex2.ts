class X {
    um(): void {
        console.log("um");
    }
};

class Y extends X {
    dois(): void {
        super.um();
        console.log("dois");
    }
}

class Z extends Y {
    tres(): void {
        super.dois();
        console.log("tres");
    }
}

const z = new Z();
z.tres();