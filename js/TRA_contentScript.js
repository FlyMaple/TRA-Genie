function QuickSearch() {
    var fromcity 		= "";	//  起站-地區
	var fromcity_cht 	= "";	//  起站-地區-文字
    var tocity			= "";	//  到站-地區
    var tocity_cht		= "";	//  到站-地區-文字
    var fromstation		= "";	//  起站-站點
    var fromstation_cht	= "";	//  起站-站點-文字
    var tostation		= "";	//  到站-站點
    var tostation_cht	= "";	//  到站-站點-文字
    var pathstr 		= "";
    var language 		= "";

	//  輸入車站名
	if($("#FromStationInput").val() == '') {
		//  選擇車站radio btuuon 不等於 "其他"
		if ($("input[name='FromStationName']:checked").val() != '0') {
			fromstation = $("input[name='FromStationName']:checked").val();
			fromstation_cht = $("input[name='FromStationName']:checked").next().text();
		} else {
			fromcity		= $("#FromCity").val();
			fromcity_cht	= $("#FromCity option:checked").text();
			fromstation 	= $("#FromStation").val();
			fromstation_cht = $("#FromStation option:checked").text();
		}   
	} else {
		//中文版
		if (window.location.href.indexOf("nglish") == -1) {
			fromcity = getStationCodeByName($("#FromStationInput").val().replace("台","臺"));
		} else {
			fromcity = getStationCodeByEName($("#FromStationInput").val());
		}
		fromcity_cht = fromcity;
		
		fromstation		= fromcity.split(",")[1];
		fromstation_cht	= fromcity.split(",")[1];
		fromcity 		= fromcity.split(",")[0];
		fromcity_cht 	= fromcity.split(",")[0];
	}
    
    
    if($("#ToStationInput").val() == '') {
        if ($("input[name='ToStationName']:checked").val() != '0')  {
            tostation = $("input[name='ToStationName']:checked").val();
            tostation_cht = $("input[name='ToStationName']:checked").next().text();
        } else  {
            tocity 			= $("#ToCity").val();
            tocity_cht 		= $("#ToCity option:checked").text();
            tostation 		= $("#ToStation").val();
            tostation_cht	= $("#ToStation option:checked").text();
        }
    } else {
		 //中文版
         if (window.location.href.indexOf("nglish") == -1) {
            tocity = getStationCodeByName($("#ToStationInput").val().replace("台","臺"));
         } else {
            tocity = getStationCodeByEName($("#ToStationInput").val());
         }
		 tocity_cht = tocity;
         
        tostation		= tocity.split(",")[1];
        tostation_cht	= tocity.split(",")[1];
        tocity 			= tocity.split(",")[0];
        tocity_cht		= tocity.split(",")[0];
    }
    

    if (fromstation == null) {
        alert("請選擇起程站!");
        return;
    } 
    if (tostation == null) {
        alert("請選擇終點站!");
        return;    
    }


    var trainclass = $("input[name='TrainClass']:checked").val();
	var trainclass_cht = $("input[name='TrainClass']:checked").next().text();

    var searchdate = $("#txtSelectedDate").val();
	
	//中文版
    if (window.location.href.indexOf("nglish") == -1) {
        searchdate = (parseInt(searchdate.substring(0, searchdate.indexOf("/"))) + 1911) + "/" + searchdate.substring(searchdate.indexOf("/") + 1, searchdate.length);
    } else {
        pathstr = "../";
        language = "&language=eng";
    }
    var fromtime 		= $("#FromTimeSelect").val();
    var fromtime_cht 	= $("#FromTimeSelect option:checked").text();
    var endtime 		= $("#ToTimeSelect").val();
    var endtime_cht 	= $("#ToTimeSelect option:checked").text();


    var timetype = $("input[name='Timetype']:checked").val();

    createCookie("searchdate", searchdate, 0.0069);
    createCookie("fromcity", fromcity, 0.0069);
    createCookie("fromstation", fromstation, 0.0069);
    createCookie("tocity", tocity, 0.0069);
    createCookie("tostation", tostation, 0.0069);
    createCookie("fromtime", fromtime, 0.0069);
    createCookie("totime", endtime, 0.0069);

	//中文版
	var href = '';
    if (window.location.href.indexOf("nglish") == -1) {
        if ($("#Traincode").val() === undefined) {
            href = pathstr + "SearchResult.aspx?searchtype=0&searchdate=" + searchdate + "&fromcity=" + fromcity + "&tocity=" + tocity + "&fromstation=" + fromstation + "&tostation=" + tostation + "&trainclass=" + trainclass + "&timetype=" + timetype + "&fromtime=" + fromtime + "&totime=" + endtime + language;
        } else {
            href = pathstr + "SearchResultContent.aspx?searchdate=" + searchdate + "&traincode=" + $("#Traincode").val() + "&trainclass=&mainviaroad=&fromstation=" + fromstation + "&tostation=" + tostation + "&language=";
        }
    }  else {
        href = pathstr + "SearchResult.aspx?searchtype=0&searchdate=" + searchdate + "&fromcity=" + fromcity + "&tocity=" + tocity + "&fromstation=" + fromstation + "&tostation=" + tostation + "&trainclass=" + trainclass + "&timetype=" + timetype + "&fromtime=" + fromtime + "&totime=" + endtime + language;
    }
    location.href = href;
	
    createCookie("TRA_searchIsEnable", 'true', 0.0069);
    createCookie("TRA_searchDate", searchdate, 0.0069);
    createCookie("TRA_fromCityCht", fromcity_cht, 0.0069);
    createCookie("TRA_toCityCht", tocity_cht, 0.0069);
    createCookie("TRA_fromStationCht", fromstation_cht, 0.0069);
    createCookie("TRA_toStationCht", tostation_cht, 0.0069);
    createCookie("TRA_trainClassCht", trainclass_cht, 0.0069);
    createCookie("TRA_fromTime", fromtime_cht, 0.0069);
    createCookie("TRA_toTime", endtime_cht, 0.0069);
}