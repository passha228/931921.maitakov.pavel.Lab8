function addElem() {
    let elem = document.getElementById("template").cloneNode(1);
    let table = document.getElementsByTagName("tbody").item(0);
    elem.removeAttribute("id");
    elem.style.display = "table-row";
    table.appendChild(elem);
}

//-------------------------------------------------------------
function deleteElem() {
    let deletingRow = document.activeElement.parentElement.parentElement;
    let tbody = deletingRow.parentElement;
    
    tbody.removeChild(deletingRow);
}

//-------------------------------------------------------------
function swapUp() {
    let row1 = document.activeElement.parentElement.parentElement;
    let row2 = row1.previousElementSibling;
    if (row2 != null) swapElements(row1, row2);
}

function swapDown() {
    let row1 = document.activeElement.parentElement.parentElement;
    let row2 = row1.nextElementSibling;
    if (row2 != null) swapElements(row1, row2);
}

//-------------------------------------------------------------
function swapElements(obj1, obj2) {
    // save the location of obj2
    var parent2 = obj2.parentNode;
    var next2 = obj2.nextSibling;
    // special case for obj1 is the next sibling of obj2
    if (next2 === obj1) {
        // just put obj1 before obj2
        parent2.insertBefore(obj1, obj2);
    } else {
        // insert obj2 right before obj1
        obj1.parentNode.insertBefore(obj2, obj1);

        // now insert obj1 where obj2 was
        if (next2) {
            // if there was an element after obj2, then insert obj1 right before that
            parent2.insertBefore(obj1, next2);
        } else {
            // otherwise, just append as last child
            parent2.appendChild(obj1);
        }
    }
}

function save() {
    //table = document.getElementsByTagName("tr");
    str = "{";
    var t = document.getElementById('table');
    var tra = t.children;
    var trs = tra[0].children;
    var tds = null;
    var sum = 0;

    for (var i=0; i<trs.length; i++)  {
        if(trs[i].getAttribute("id") != "template"){
            tds = trs[i].children;
                str += '"' + tds[0].children[0].value + '" : ' + '"' + tds[1].children[0].value + '", ';
                //console.log(tds[n].children[0].value);
        }
    }
    
    str += "}";
    p = document.createElement("p");
    p.textContent = str;
    document.body.appendChild(p);    
}