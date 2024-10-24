const NOWHTMLParser = function(){
    this.parseFromString = function(string){
        return new NOWXMLDocShim(string);
    }
}

const NOWXMLDocShim = function(string){
    const XMLDoc = new XMLDocument2();
    XMLDoc.parseXML(string);

    this.childnodes = [];
    this.getElementById = function(id){

    }
}

export default NOWHTMLParser;