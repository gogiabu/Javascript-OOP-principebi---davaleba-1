class myclass {
    name = " ";

    set_name() {
        this.name = "gogi";
    }
    get_name() {
        console.log(this.name);
    }

    lastname = " ";

    set_lastname() {
        this.lastname = "abuselidze";
    }
    get_lastname() {
        console.log(this.lastname);
    }

    age = " ";

    set_age() {
        this.age = "33";
    }
    get_name() {
        console.log(this.age);
    }
}

var object = new myclass();
object.set_name();
object.set_lastname();
object.set_age();
document.write(object.name + ("<br>"));
document.write(object.lastname + ("<br>"));
document.write(object.age);

