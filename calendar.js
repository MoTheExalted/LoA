"use strict";

var thisDay=new Date();

document.getElementById("calendar").innerHTML=createCalendar(thisDay);

function createCalendar(calDate){
   var calendarHTML="<table id='calendar_table'>";
   
   calendarHTML+=calCaption(calDate);
   calendarHTML+=calWeekDayRow(calDate);
   calendarHTML+=calDays(calDate);
   calendarHTML+="</table>";
   
   return calendarHTML;

}

function calCaption (calDate){
   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var thisMonth=calDate.getMonth();
   var thisYear=calDate.getFullYear();
   return "<caption>" +monthName[thisMonth]+" "+thisYear+"</caption>";
}


function calWeekDayRow(){
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML="<tr>";

   for (var i=0;i<dayName.length;i++){
      rowHTML+="<th class='calendar_weekdays'>"+dayName[i]+"</th>";
   }
   rowHTML+="</tr>";

   return rowHTML;

}

function daysInMonth(calDate){
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
   var thisYear=calDate.getFullYear();
   var thisMonth=calDate.getMonth()+1;

   if (thisYear%4===0){
      if ((thisYear%100!=0) || (thisYear%400===0))
      dayCount[1]=29;
   }

   return dayCount[thisMonth];

}

function calDays(calDate){
   var day=new Date(calDate.getFullYear(), calDate.getMonth(),1);

   var weekDay=day.getDay();

   var htmlCode="<tr>";

   

   for(var i=0;i<weekDay;i++){
      htmlCode+="<td></td>";
   }

   var totalDays=daysInMonth(calDate);

   var highlightDay=calDate.getDate();

   var eventTracker=0;

   for (var i=1; i<=totalDays;i++){
      day.setDate(i);
      weekDay=day.getDay();

      //Make only weekdays have events
      if (weekDay===0)
         htmlCode+="<tr>"+"<td class='calendar_dates'>" + i + "</td>";

      if ((i===highlightDay && (weekDay!=0) && (weekDay!=6))){
         htmlCode+="<td class='calendar_dates' id='calendar_today'>"+i+dayEvent[eventTracker]+"</td>";
         eventTracker++;
      }else if ((weekDay!=0) && (weekDay!=6)){
         htmlCode+="<td class='calendar_dates'>" + i + dayEvent[eventTracker]+ "</td>";
         eventTracker++
      }


      if (weekDay===6)
         htmlCode+="<td class='calendar_dates'>" + i + "</td>"+"</tr>";

   }

   htmlCode+="</tr>";

   return htmlCode;
}
 
 
 