 function leftpanel(){
document.write(" <div data-role=\"panel\" data-position-fixed=\"true\" data-display=\"overlay\" data-theme=\"a\" id=\"leftpanel\">");
document.write("    <ul data-role=\"listview\">");
document.write("        <li data-filtertext=\"Hauptmenü\">");
document.write("            <a href=\"#\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\"> <i class='fa icon-Back fa-normal fa-fw'><\/i>  &nbsp;&nbsp; Hauptmenü<\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"Home\">");
document.write("            <a href=\"#index\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\">  <i class='fa icon-Home fa-normal fa-fw'><\/i> Home<\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\" Zugang zum Katalog\">");
document.write("            <a href=\"#\" onclick=\"window.open('https:\/\/bsz.ibs-bw.de\/aDISWeb\/app;jsessionid=B89479D836C962CF258C9451375F6928?service=direct\/1\/POOLM21PBSZPROD@_44276700_2F4FC480\/$Tree.treeNodes&amp;sp=SBK&amp;requestCount=0', '_system');\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\">  <i class='fa icon-Open-Book fa-normal fa-fw'><\/i> Zugang zum Katalog <\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"Zugang zum Benutzerkonto\">");
document.write("            <a href=\"#\" onclick=\"window.open('https:\/\/bsz.ibs-bw.de\/aDISWeb\/app;jsessionid=B89479D836C962CF258C9451375F6928?service=direct\/1\/POOLM21PBSZPROD@_44276700_2F4FC480\/$Tree.treeNodes&amp;sp=SBK&amp;requestCount=0', '_system');\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\"> <i class='fa icon-User fa-normal fa-fw'><\/i>  Zugang zum Benutzerkonto <\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"Medien\">");
document.write("            <a href=\"#Medien\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\"> <i class='fa  icon-Books-2 fa-normal fa-fw '><\/i>  Medien<\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"Lern- und Arbeitszonen\"> <a href=\"#Arbeitszonen\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\"> <i class='fa icon-Pen-2 fa-normal fa-fw'><\/i>  Lern- und Arbeitszonen<\/a> <\/li>");
document.write("        <li data-filtertext=\"Services\">");
document.write("            <a href=\"#Services\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\">  <i class='fa icon-Speach-Bubbles fa-normal fa-fw'><\/i>  Services<\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"Unsere Öffnungszeiten\">");
document.write("            <a href=\"calendar.html\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\"> <i class='fa icon-Watch fa-normal fa-fw'><\/i>  Unsere Öffnungszeiten<\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"Standort Deiner Bibliothek\">");
document.write("            <a href=\"#Standort\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\">  <i class='fa icon-Geo2 fa-normal fa-fw'><\/i>  Standort Deiner Bibliothek<\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"News Deiner Bibliothek\">");
document.write("            <a href=\"#\" onclick=\"window.open('https:\/\/www.hdm-stuttgart.de\/bibliothek\/startseite', '_system');\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\">  <i class='fa icon-Newspaper-2 fa-normal fa-fw'><\/i> News Deiner Bibliothek<\/a>");
document.write("        <\/li>");
document.write("        <li data-filtertext=\"Impressum\">");
document.write("            <a href=\"#Impressum\" data-ajax=\"false\" data-role=\"button\" data-corners=\"false\">  <i class='fa icon-Information fa-normal fa-fw'><\/i>Impressum<\/a>");
document.write("        <\/li>");
document.write("    <\/ul>");
document.write("<\/div>  ");
}  