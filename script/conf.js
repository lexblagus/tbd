var lotus_petroleo = '{ "Colors" : [ '+
	'{ "SECTOR_ID":"1", "RGB":"#FF00CC", "PANTONE":"XXXX","TISSUE":"XYZ 00" },'+
	'{ "SECTOR_ID":"2", "RGB":"#00CCFF", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
	'{ "SECTOR_ID":"3", "RGB":"#0CF1F6", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
	'{ "SECTOR_ID":"4", "RGB":"#F1CCFF", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
	'{ "SECTOR_ID":"5", "RGB":"#CCCCFF", "PANTONE":"XZZX","TISSUE":"XYZ 02" } ]}';

var lotus_xpto = '{ "Colors" : [ '+
	'{ "SECTOR_ID":"1", "RGB":"#FF00OO", "PANTONE":"XXXX","TISSUE":"XYZ 00" },'+
	'{ "SECTOR_ID":"2", "RGB":"#0999DD", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
	'{ "SECTOR_ID":"3", "RGB":"#0FFABB", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
	'{ "SECTOR_ID":"4", "RGB":"#0111FF", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
	'{ "SECTOR_ID":"5", "RGB":"#AAABFF", "PANTONE":"XZZX","TISSUE":"XYZ 02" } ]}';

var lotus_xpto2 = '{ "Colors" : [ '+
	'{ "SECTOR_ID":"1", "RGB":"#FFFFOO", "PANTONE":"XXXX","TISSUE":"XYZ 10" },'+
	'{ "SECTOR_ID":"2", "RGB":"#09AADD", "PANTONE":"XXYY","TISSUE":"XYZ 21" },'+
	'{ "SECTOR_ID":"3", "RGB":"#090A2B", "PANTONE":"XXYY","TISSUE":"XYZ 31" },'+
	'{ "SECTOR_ID":"4", "RGB":"#0A91FF", "PANTONE":"XXYY","TISSUE":"XYZ 41" },'+
	'{ "SECTOR_ID":"5", "RGB":"#AF2BFF", "PANTONE":"XZZX","TISSUE":"XYZ 52" } ]}';

function sa(info){
	alert(info);
}

/** Set one SVG Color by SVG Não esta pronta */
function setSVGColorBySVG(idFrame, idSector, ColorValue){
	var frame = parent.$(idFrame);
    $($(frame).contents().find("#sector"+idSector).find("path")).each(function(index){
        path = this;
        obj =$(this).parent().get(0);
        if($(obj).attr("id")=="sector"+idSector){ $(path).attr("fill", ColorValue); }
    });	
}

/** Set one SVG Color */
function setSVGColor(idFrame, idSector, ColorValue){
	var frame = $(idFrame);
    $($(frame).contents().find("#sector"+idSector).find("path")).each(function(index){
        path = this;
        obj =$(this).parent().get(0);
        if($(obj).attr("id")=="sector"+idSector){ $(path).attr("fill", ColorValue); }
    });	
    
    /**
    if(objLayer==3){
    	actColorValUS = colorValue;
    	
    	if(UnderLayerColor){
    		changeSvgColor(4,colorValue);
    	}else{
    		changeSvgColor(4,"#ffffff");
    		$("#underSameColor").attr('checked', false);
    	}
    	
    	checkUnderSail(colorValue);
    }
    */
    
}


/** Set SVG Colors */
function setSVGStdColors(idFrame, sectorPrefix, Colors){
	conf = JSON.parse(eval(Colors));
	var frame = $(idFrame);
	
	for (var x=0; x < conf.Colors.length; x++){
	    $($(frame).contents().find('#'+sectorPrefix+conf.Colors[x].SECTOR_ID).find("path")).each(function(index){
	        path = this;
	        obj =$(this).parent().get(0);
	        if($(obj).attr("id")==sectorPrefix+conf.Colors[x].SECTOR_ID){ $(path).attr("fill", conf.Colors[x].RGB); }
	    });
	}
}








