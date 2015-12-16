var lotus_petroleo = '{ "colours" : [ '+
	'{ "SECTOR_ID":"1", "RGB":"#FF00CC", "PANTONE":"XXXX","TISSUE":"XYZ 00" },'+
	'{ "SECTOR_ID":"2", "RGB":"#00CCFF", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
	'{ "SECTOR_ID":"3", "RGB":"#CCCCFF", "PANTONE":"XZZX","TISSUE":"XYZ 02" } ]}';

var lotus_xpto = '{ "colours" : [ '+
'{ "SECTOR_ID":"1", "RGB":"#FF00OO", "PANTONE":"XXXX","TISSUE":"XYZ 00" },'+
'{ "SECTOR_ID":"2", "RGB":"#0000FF", "PANTONE":"XXYY","TISSUE":"XYZ 01" },'+
'{ "SECTOR_ID":"3", "RGB":"#AAABFF", "PANTONE":"XZZX","TISSUE":"XYZ 02" } ]}';




/** Set one SVG Colour by SVG */
function setSVGColourBySVG(id, svgLayer, colourValue){
	var frame = parent.$(id);
    $($(frame).contents().find("#Ebene_"+svgLayer).find("path")).each(function(index){
        path = this;
        obj =$(this).parent().get(0);
        if($(obj).attr("id")=="Ebene_"+svgLayer){ $(path).attr("fill", colourValue); }
    });	
}

/** Set one SVG Colour */
function setSVGColour(id, svgLayer, colourValue){
	var frame = $(id);
    $($(frame).contents().find("#Ebene_"+svgLayer).find("path")).each(function(index){
        path = this;
        obj =$(this).parent().get(0);
        if($(obj).attr("id")=="Ebene_"+svgLayer){ $(path).attr("fill", colourValue); }
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


/** Set SVG colours */
function setSVGStdColours(frameId, svgPrefix, colours){
	conf = JSON.parse(eval(colours));
	alert(frameId);
	var frame = $(frameId);
	
	for (var x=0; x < conf.colours.length; x++){
	    $($(frame).contents().find('#'+svgPrefix+conf.colours[x].SECTOR_ID).find("path")).each(function(index){
	        path = this;
	        obj =$(this).parent().get(0);
	        if($(obj).attr("id")==svgPrefix+conf.colours[x].SECTOR_ID){ $(path).attr("fill", conf.colours[x].RGB); }
	    });
	}
}



function sa(){
	alert("teste");
}