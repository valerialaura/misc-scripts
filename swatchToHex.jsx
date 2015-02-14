/*
swatchToHex.jsx
------------------------------------ 
 Colors to Hex array
 Get all swatch colors selected in the swatch palette as comma separated hex values.
------------------------------------ 
Why? I needed to get my illus colors into processing and got tired of copy pasting
Who? twitter:@_valerialaura // github: valerialaura // valerialaura.com.ar
What else? convertion functions copied from http://www.javascripter.net/faq/rgbtohex.htm
*/

// we need some variables in here
doc = activeDocument;
selSwatches = doc.swatches.getSelected();
len = selSwatches.length;
rgbColor=null;
strOut = "[";
directory = null;
filename = "color-swatches";

if (len<= 0) {
    alert('Please, select some swatches first');
} else {
    // get all those colors!
    for(var c=0;c<len;c++)
    {
        rgbColor = selSwatches[c].color;
        strOut += "#"+rgbToHex(rgbColor.red,rgbColor.green,rgbColor.blue);
        if(c<(len-1)) strOut += ", ";
    }
    // close the array syntax
    strOut += "];";

    // where to put the file?
    filename = prompt("How should we call the file?","color-swatches","Custom filename perhaps?");
    directory = Folder.selectDialog( 'Where should we put '+ filename+'.txt?', '~' );
    if (directory != null) {
        var outFile = new File(directory +'/'+ filename +'.txt');
        outFile.open('w');
        outFile.writeln(strOut);
        alert ('All done! Have fun!');
    }else{
        alert ('We need a directory pleeeeeease.');
    }
}

function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
   n = parseInt(n,10);
   if (isNaN(n)) return "00";
   n = Math.max(0,Math.min(n,255));
   return "0123456789ABCDEF".charAt((n-n%16)/16)
   + "0123456789ABCDEF".charAt(n%16);
}
