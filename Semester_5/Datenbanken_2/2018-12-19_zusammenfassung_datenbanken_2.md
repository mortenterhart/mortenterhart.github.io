---
title: Zusammenfassung Datenbanken 2
permalink: Semester_5/Datenbanken_2/2018-12-19_zusammenfassung
layout: default

---

<h1 id="zusammenfassung-datenbanken-2">Zusammenfassung Datenbanken 2</h1>
<p><em>geschrieben am 19.12.2018 von Morten Terhart</em></p>
<hr>
<h2 id="datenmanagement-und-modellierung">Datenmanagement und Modellierung</h2>
<ul>
<li><strong>Daten</strong>: Informationen, die gut zu bewegen und verarbeiten sind</li>
<li><strong>Information</strong>: ein Impuls, der eine Bedeutung in einem Kontext für den Empfänger hat</li>
</ul>
<h3 id="historische-datenmodellierung">Historische Datenmodellierung</h3>
<ul>
<li>1970: Edgar F. Codd führt mit SQLv1.0 das relationale Datenmodell ein</li>
<li>1976: Peter Chen führt das Entity-Relationship-Modell ein</li>
</ul>
<h3 id="datenmanagement">Datenmanagement</h3>
<p>Definition nach DAMA-DMBOK: Data Management Body of Knowledge (Edition 2):</p>
<blockquote>
<p><strong>Datenmanagement</strong> ist die Entwicklung, Ausführung und Überwachung von Plänen, Richtlinien, Programmen und Techniken, die den Wert der Daten und die Informationen innerhalb ihres Lebenszyklus liefern, kontrollieren, schützen und verbessern.</p>
</blockquote>
<p>Kurze Definition:</p>
<blockquote>
<p><strong>Datenmanagement</strong> liefert, kontrolliert, schützt und verbessert den Wert von Daten.</p>
</blockquote>
<h3 id="prinzipien-des-datenmanagement">Prinzipien des Datenmanagement</h3>
<ul>
<li>Daten haben einmalige Eigenschaften</li>
<li>Datenmanagement bedeutet das Management von Datenqualität</li>
<li>Datenmanagement ist übergreifend funktional (es braucht spezielle Fähigkeiten und Fachwissen)</li>
</ul>
<h3 id="body-of-knowledge">Body of Knowledge</h3>
<ul>
<li>Knowledge Areas beschreiben den Umfang und den Kontext von Datenmanagementaktivitäten</li>
<li>die Knowledge Areas beinhalten fundamentale Ziele und Prinzipien des Datenmanagement</li>
</ul>
<h4 id="data-governance">Data Governance</h4>
<ul>
<li>gibt einen Überblick über Datenmanagement durch Erstellung eines Systems aus Entscheidungsrechten</li>
</ul>
<h4 id="wieviel-sind-daten-wert">Wieviel sind Daten wert?</h4>
<ul>
<li>ungenutzte Daten sind wertlos und kosten Geld</li>
<li>Wert der Daten kann gemessen werden an
<ul>
<li>Marktwert</li>
<li>Ersetzungskosten</li>
<li>erkannte Möglichkeiten</li>
<li>Verkauf von Daten</li>
<li>Risikokosten</li>
</ul>
</li>
</ul>
<h4 id="data-architecture">Data Architecture</h4>
<ul>
<li>definiert den Entwurf für Datenmanagement durch Anlehnung an organisatorische Strategien</li>
<li>besteht aus drei Ebenen:
<ul>
<li><strong>Konzeptionelles Modell</strong></li>
<li><strong>Logisches Modell</strong></li>
<li><strong>Physikalisches Modell</strong></li>
</ul>
</li>
</ul>
<h4 id="modelling-and-design">Modelling and Design</h4>
<ul>
<li>der Prozess der Entdeckung, Analyse und Repräsentation in einer spezifischen Form, einem <em>Datenmodell</em></li>
</ul>
<h4 id="data-storage-and-operations">Data Storage and Operations</h4>
<ul>
<li>beinhaltet das Design, die Implementation und die Unterstützung gespeicherter Daten, um ihren Wert zu erhöhen</li>
</ul>
<h4 id="database-processing">Database Processing</h4>
<ul>
<li>ACID (<strong>A</strong>tomicity, <strong>C</strong>onsistency, <strong>I</strong>solation, <strong>D</strong>urability)</li>
<li>BASE (<strong>B</strong>asically <strong>A</strong>vailable, <strong>S</strong>oft State, <strong>E</strong>ventual Consistency)</li>
<li>CAP-Theorem (<strong>C</strong>onsistency, <strong>A</strong>vailability, <strong>P</strong>artition Tolerance)</li>
</ul>
<h4 id="data-security">Data Security</h4>
<ul>
<li>gewährleistet die Vertraulichkeit und Geheimhaltung von Daten</li>
</ul>
<h4 id="data-integration-and-interoperability">Data Integration and Interoperability</h4>
<ul>
<li>beinhaltet Prozesse zur Übertragung und Konsolidierung von Daten zwischen Datenspeichern, Anwendungen und Organisationen</li>
</ul>
<h4 id="document-and-content-management">Document and Content Management</h4>
<ul>
<li>beinhaltet die Planung, Implementation und Kontrolltätigkeiten zur Verwaltung des Lebenszyklus der Daten</li>
</ul>
<h4 id="reference-and-master-data">Reference and Master Data</h4>
<ul>
<li>beinhaltet die fortlaufende Abstimmung und Instandhaltung von kritischen Kerndaten</li>
</ul>
<h4 id="data-warehouse-and-business-intelligence">Data Warehouse and Business Intelligence</h4>
<ul>
<li>beinhaltet die Planung, Implementation und Kontrollprozesse zur Verwaltung von Daten, die zur Entscheidungsfindung genutzt werden</li>
</ul>
<h4 id="metadata">Metadata</h4>
<ul>
<li>beinhaltet die Planung, Implementation und Kontrolltätigkeiten zum autorisierten Zugriff auf Daten hoher Qualität</li>
</ul>
<h4 id="data-quality">Data Quality</h4>
<ul>
<li>beinhaltet die Planung und Implementation von Techniken zur Messung und Verbesserung der Datenqualität</li>
</ul>
<h3 id="data-modelling">Data Modelling</h3>
<ul>
<li>in der Praxis muss eine Modellierung immer zu einem Ergebnis führen</li>
</ul>
<h4 id="überblick-über-die-3-ebenen-der-datenmodellierung">Überblick über die 3 Ebenen der Datenmodellierung</h4>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-aqdZ48VfoPA0AaBL" width="100%" style="max-width: 132.26666259765625px;" viewBox="0 0 132.26666259765625 256.1499786376953"><g transform="translate(-12, -12)"><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath" style="opacity: 1;"><path class="path" d="M78.13333129882812,66.71665954589844L78.13333129882812,91.71665954589844L78.13333129882812,116.71665954589844" marker-end="url(#arrowhead504)" style="stroke: #333; stroke-width: 3.5px;fill:none"></path><defs><marker id="arrowhead504" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M78.13333129882812,163.43331909179688L78.13333129882812,188.43331909179688L78.13333129882812,213.43331909179688" marker-end="url(#arrowhead505)" style="stroke: #333; stroke-width: 3.5px;fill:none"></path><defs><marker id="arrowhead505" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node" style="opacity: 1;" id="A" transform="translate(78.13333129882812,43.35832977294922)"><rect rx="5" ry="5" x="-58.133331298828125" y="-23.35832977294922" width="116.26666259765625" height="46.71665954589844"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-48.133331298828125,-13.358329772949219)"><foreignObject width="96.26666259765625" height="26.716659545898438"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Konzeptionell</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="B" transform="translate(78.13333129882812,140.07498931884766)"><rect rx="5" ry="5" x="-36.15833282470703" y="-23.35832977294922" width="72.31666564941406" height="46.71665954589844"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-26.15833282470703,-13.358329772949219)"><foreignObject width="52.31666564941406" height="26.716659545898438"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Logisch</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="C" transform="translate(78.13333129882812,236.7916488647461)"><rect rx="5" ry="5" x="-52.18333435058594" y="-23.35832977294922" width="104.36666870117188" height="46.71665954589844"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-42.18333435058594,-13.358329772949219)"><foreignObject width="84.36666870117188" height="26.716659545898438"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Physikalisch</div></foreignObject></g></g></g></g></g></g></svg></div>
<ol>
<li><strong>Konzeptionell</strong>: technologieunabhängige Spezifikation der Daten in der Datenbank</li>
<li><strong>Logisch</strong>: Umwandlung des konzeptionellen Modells in Strukturen, die durch ein DBMS implementiert werden können</li>
<li><strong>Physikalisch</strong>: fasst alle Änderungen zusammen, die für die erwünschte Performance nötig sind</li>
</ol>
<h4 id="verantwortlichkeiten-data-modelling">Verantwortlichkeiten Data Modelling</h4>
<p><img src="https://i.imgur.com/NvjgMD9.png" alt="Data Modelling Responsibilities"></p>
<h4 id="wie-sieht-ein-gutes-datenmodell-aus">Wie sieht ein gutes Datenmodell aus?</h4>
<p>Faktoren für ein gutes Datenmodell:</p>
<ul>
<li>Vollständigkeit</li>
<li>Durchsetzung von Unternehmensregelungen</li>
<li>Flexibilität</li>
<li>Stabilität</li>
<li>Wiederverwendbarkeit</li>
<li>Konforme Standards</li>
<li>Eleganz</li>
<li>Anwendbarkeit</li>
<li>keine Redundanz</li>
</ul>
<h4 id="praktischer-datenmodellierungsansatz">Praktischer Datenmodellierungsansatz</h4>
<ul>
<li>nur zwei Stufen der Datenmodellierung</li>
</ul>
<p><img src="https://i.imgur.com/PfBUa7t.png" alt="Praktischer Datenmodellierungsansatz"></p>
<ul>
<li>erster Schritt: Anforderungen des Unternehmens in Form eines Statement of Requirements sammeln
<ul>
<li>ein ausgeschriebenes Anforderungsdokument anfertigen</li>
<li>der Modellierer kann die Anforderungen nur in einem Modell aufgreifen oder die Detailtiefe erhöhen</li>
</ul>
</li>
<li>ein konzeptionelles Datenmodell kann das Statement of Requirements nicht ersetzen</li>
<li>Anforderungen können in ein logisches Datenmodell (<em>Logical Data Model</em>) transformiert werden
<ul>
<li>Entity-Relationship-Modell (ERM) oft eingesetzt und Konvention</li>
<li>Normalisierung der Datenbank zur Organisierung der Daten in Diagrammen</li>
</ul>
</li>
</ul>
<h2 id="relationale-modellierung">Relationale Modellierung</h2>
<h3 id="regeln-von-edgar-f.-codd">12 Regeln von Edgar F. Codd</h3>
<ol>
<li><strong>Informationsregel</strong>: Daten in einer Datenbank müssen Werte in einer Tabellenzelle sein</li>
<li><strong>Regel des garantierten Zugriffs</strong>: jedes Datenelement muss erreichbar sein</li>
<li><strong>Behandlung von <code>NULL</code>-Werten</strong>: <code>NULL</code> kann bedeuten: Daten fehlen, Daten sind nicht bekannt oder Daten sind nicht erreichbar</li>
<li><strong>Aktiver Online-Katalog</strong>: Die Strukturbeschreibung einer Datenbank muss in einem Online-Katalog, dem <em>Data Dictionary</em>, gespeichert sein</li>
<li><strong>Daten-Subsprache</strong>: Zugriff auf Daten über eine Sprache, die Datendefinition, Datenmanipulation und Transaktionsmanagement unterstützt</li>
<li><strong>Aktualisierung von Ansichten</strong>: Alle Ansichten der Datenbank müssen aktualisiert werden können</li>
<li><strong>High-Level Insert, Update und Delete</strong>: muss einzelne Zeilen, Vereinigungen, Schnittmengen und andere Operationen unterstützen</li>
<li><strong>Unabhängigkeit der physikalischen Daten</strong>: Daten in der Datenbank müssen unabhängig von den zugreifenden Anwendungen sein</li>
<li><strong>Unabhängigkeit der logischen Daten</strong>: logische Daten in der Datenbank müssen unabhängig von der Benutzeransicht sein</li>
<li><strong>Unabhängigkeit der Integrität</strong>: alle Integritätsbedingungen müssen unabhängig voneinander modifiziert werden können</li>
<li><strong>Unahbängigkeit der Verteilung</strong>: Der Endanwender darf nicht sehen können, dass die Daten über mehrere Standorte verteilt werden</li>
<li><strong>Non-Subversion-Regel</strong>: ein System mit einer Schnittstelle nach außen darf nicht Sicherheits- und Integritätsvereinbarungen umgehen</li>
</ol>
<h3 id="normalisierung">Normalisierung</h3>
<ul>
<li>ein formaler Prozess, um Änderungsanomalien und redundante Daten zu vermeiden</li>
</ul>
<h4 id="zero-normal-form">Zero Normal Form</h4>
<ul>
<li>die Trennung der logischen Struktur vom physikalischen Inhalt</li>
</ul>
<h4 id="erste-normalform">Erste Normalform</h4>
<ul>
<li>jeder Wert in einer Spalte hat seine eigene Zeile, keine Mengen an Werten innerhalb einer Zeile</li>
</ul>
<h4 id="zweite-normalform">Zweite Normalform</h4>
<ul>
<li>alle Nicht-Schlüsselattribute dürfen nur vom primären Schlüssel abhängen</li>
</ul>
<h4 id="dritte-normalform">Dritte Normalform</h4>
<ul>
<li>alle Nicht-Schlüsselattribute müssen direkt vom primären Schlüssel abhängen</li>
</ul>
<h3 id="design-elemente-eines-erm-diagramms">Design-Elemente eines ERM-Diagramms</h3>
<ul>
<li><strong>Entität</strong>: eine Person, ein Gegenstand oder ein Ort, über den viele Instanzen von Daten gesammelt werden</li>
<li><strong>Beziehung</strong>: eine Assoziation zwischen zwei Entitäten</li>
<li><strong>Kardinalität</strong>: die maximale Anzahl, die eine Entität mit einer anderen Entität assoziiert werden kann</li>
<li><strong>Modalität</strong>: die minimale Anzahl, die eine Entität mit einer anderen Entität assoziiert werden kann</li>
</ul>
<h3 id="physikalisches-datenmodell">Physikalisches Datenmodell</h3>
<ul>
<li>der Schritt vom logischen zum physikalischen Datenmodell ist die Transformation von ERM-Diagramm zu einem Datenbankmodell</li>
</ul>
<h2 id="dimensionierte-modellierung">Dimensionierte Modellierung</h2>
<h3 id="definition">Definition</h3>
<blockquote>
<p><strong>Dimensionerte Modellierung</strong> ist eine logische Design-Technik, die die Daten in einem intuitiven standardmäßigen Bezugssystem präsentiert, welches einen sehr schnellen Zugriff erlaubt.</p>
</blockquote>
<h2 id="data-vault">Data Vault</h2>
<h3 id="definition-1">Definition</h3>
<blockquote>
<p><strong>Data Vault</strong> ist ein detailliertes Nachverfolgen historischer Daten und besteht aus verknüpften normalisierten Tabellen, die eine oder mehrere funktionale Geschäftsbereiche unterstützen.</p>
</blockquote>
<ul>
<li>ein hybrider Ansatz, der die Vorzüge der dritten Normalform und des Sternschemas (<em>Star Schema</em>) vereint</li>
<li>flexibles Design</li>
<li>skalierbar</li>
<li>konsistent</li>
<li>an Bedürfnisse des Unternehmens anpassbar</li>
</ul>
<h3 id="bestandteile">Bestandteile</h3>
<p>Data Vault besteht aus drei Hauptkomponente:</p>
<ol>
<li><strong>Hubs</strong>: <em>Business Keys</em></li>
<li><strong>Links</strong>: Assoziationen zwischen Hubs</li>
<li><strong>Satellites</strong>: enthalten Details zu Hubs und Links und bieten somit wichtigen Kontext</li>
</ol>
<h3 id="trennung-der-komponenten">Trennung der Komponenten</h3>
<ul>
<li>die drei Komponenten werden strikt voneinander getrennt<br>
<img src="https://i.imgur.com/dtzGeyO.png" alt="Trennung der Data-Vault-Komponenten"></li>
</ul>
<h3 id="vorteile-der-trennung">Vorteile der Trennung</h3>
<ul>
<li>jede Komponente kann ohne eine Wirkung auf andere Komponenten verwaltet und modifiziert werden</li>
<li>Änderungen der Entitätsbeziehungen wirken sich nicht auf den Data Vault aus</li>
<li>alle Komponenten sind für Erweiterungen entkoppelt</li>
<li>Lademechanismus ist für alle Komponenten einheitlich</li>
</ul>
<h3 id="wann-wird-welche-technik-eingesetzt">Wann wird welche Technik eingesetzt?</h3>
<p><img src="https://i.imgur.com/P2QYGCc.png" alt="Wann wird welche Technik eingesetzt?"></p>
<ul>
<li><strong>OLTP</strong>: Online Transaction Processing (Operational System)</li>
<li><strong>OLAP</strong>: Online Analytical Processing (Data Warehouse)</li>
</ul>
<p><strong>OLTP vs. OLAP</strong><br>
<img src="https://i.imgur.com/iuG1eRm.png" alt="OLTP vs OLAP"></p>
<h2 id="data-flow-and-preparation">Data Flow and Preparation</h2>
<h3 id="etl-extract-transform-load">ETL (Extract, Transform, Load)</h3>
<ul>
<li><strong>Extraktion</strong>: der Prozess der Zusammenführung von Daten aus mehreren Quellen und Vorbereitung für die nächste Phase auf einer angehobenen Ebene</li>
<li><strong>Transformation</strong>: eine kritische Funktion, die Daten von einer Form in eine andere Form überträgt (z.B. Neuformatierung, Konvertierung von Einheiten etc.)</li>
<li><strong>Loading</strong>: erfolgreiches Einfügen der Daten in eine Zieldatenbank, ein Data Warehouse oder ein Datenspeicher</li>
</ul>
<p><img src="https://i.imgur.com/AIc6Ptu.png" alt="ETL"></p>
<h3 id="data-wrangling">Data Wrangling</h3>
<ul>
<li>der Prozess der Transformation von Rohdaten in ein anderes Format, sodass sie angemessener und wertvoller für Auswertungsprozesse wie Analytics sind</li>
</ul>
<h3 id="data-prep">Data Prep</h3>
<ul>
<li>Behandlung von chaotischen, inkosistenten und nicht standardisierten Datenformaten</li>
<li>Versuch der Kombination von Daten aus mehreren Datenquellen</li>
</ul>
<h3 id="lean-startup">Lean Startup</h3>
<p><img src="https://i.imgur.com/3JRysnC.png" alt="Lean Startup"></p>
<h2 id="data-visualization">Data Visualization</h2>
<h3 id="ästhetik">Ästhetik</h3>
<p>Arten der Informationen in einem Diagramm:</p>
<ul>
<li>unterschiedliche Position (z.B. x- und y-Koordinate)</li>
<li>unterschiedliche Form</li>
<li>unterschiedliche Größe</li>
<li>unterschiedliche Farbe</li>
<li>unterschiedliche Linienstärke</li>
<li>unterschiedlicher Linientyp</li>
</ul>
<h3 id="arten-der-visualisierung">Arten der Visualisierung</h3>
<h4 id="balkendiagramme">Balkendiagramme</h4>
<p><img src="https://i.imgur.com/UWxDHfK.png" alt="Balkendiagramme"></p>
<h4 id="histogramme">Histogramme</h4>
<p><img src="https://i.imgur.com/hnTM1QP.png" alt="Histogramme"></p>
<h4 id="liniendiagramme">Liniendiagramme</h4>
<p><img src="https://i.imgur.com/3XACTGw.png" alt="Liniendiagramme"></p>
<h4 id="flächendiagramme">Flächendiagramme</h4>
<p><img src="https://i.imgur.com/knPpTyQ.png" alt="Flächendiagramme"></p>
<h4 id="streudiagramme">Streudiagramme</h4>
<p><img src="https://i.imgur.com/3dC4pJF.jpg" alt="Streudiagramme"></p>
<h4 id="kartendiagramme">Kartendiagramme</h4>
<p><img src="https://i.imgur.com/Io9jd0Z.png" alt="Kartendiagramme"></p>
<h4 id="andere-diagrammarten">Andere Diagrammarten</h4>
<p><img src="https://i.imgur.com/MKzzjwL.png" alt="Andere Diagrammarten"></p>
<h3 id="problem-des-overplotting">Problem des Overplotting</h3>
<p><img src="https://i.imgur.com/Fy7agJB.png" alt="Problem des Overplotting"></p>
<h3 id="prinzipien-für-ein-gutes-dashboard">4 Prinzipien für ein gutes Dashboard</h3>
<ol>
<li>Die 5-Sekunden-Regel: Das Dashboard sollte alle relevanten Informationen in 5 Sekunden liefern</li>
<li>Logisches Layout: Signifikante Analysen nach oben, Trends in die Mitte und Details nach unten ins Dashboard (invertierte Pyramide)</li>
<li>Minimalismus: Weniger ist mehr, nicht mehr als 5 bis 9 Visualisierungen</li>
<li>Die richtigen Visualisierungen auswählen</li>
</ol>
<h2 id="data-quality-1">Data Quality</h2>
<blockquote>
<p>Data is the new oil.</p>
</blockquote>
<h3 id="definition-2">Definition</h3>
<p>nach ISO1:</p>
<blockquote>
<p>das Maß, nach dem Daten den Benutzeranforderungen entsprechen</p>
</blockquote>
<h3 id="cluster-der-datenqualität">Cluster der Datenqualität</h3>
<ul>
<li>Exaktheit: Korrektheit</li>
<li>Vollständigkeit: alle relevanten Aspekte</li>
<li>Redundanz: minimalst, Kompaktheit</li>
<li>Lesbarkeit: Verständlichkeit</li>
<li>Zugänglichkeit: Verfügbarkeit, Zugriff</li>
<li>Konsistenz: Kohäsion, Kohärenz</li>
<li>Nützlichkeit: Vorteile für Benutzer</li>
<li>Vertrauen: Zuverlässigkeit</li>
</ul>
<h3 id="dimensionen-und-metriken">Dimensionen und Metriken</h3>
<ul>
<li>verschiedene Metriken für eine Dimension definierbar</li>
<li>schwierigste Aufgabe ist die präzise Definition einer Dimension</li>
</ul>
<h3 id="vereinbarung-von-vor--und-nachteilen-trade-offs">Vereinbarung von Vor- und Nachteilen (Trade-Offs)</h3>
<ul>
<li>Exaktheit, Vollständigkeit und Konsistenz vs. Aktualität</li>
<li>Konsistenz vs. Vollständigkeit</li>
</ul>
<h3 id="data-quality-management">Data Quality Management</h3>
<p><strong>Definition</strong>: koordinierte Aktivitäten zur Steuerung einer Organisation mit Bezug zu Datenqualität</p>
<h3 id="klassischer-ansatz-zum-data-quality-management">Klassischer Ansatz zum Data Quality Management</h3>
<p><img src="https://i.imgur.com/dRhZrZN.png" alt="Klassischer Ansatz Data Quality Management"></p>
<h3 id="strategien-zur-verbesserung-der-datenqualität">Strategien zur Verbesserung der Datenqualität</h3>
<ul>
<li>prozessorientierte Strategien (proaktiv): Fokus auf der Verbesserung der Datenproduktion
<ul>
<li><em>Prozesskontrolle</em>: Verbesserung der Datenproduktion durch Anreicherung mit Kontrollprozeduren</li>
<li><em>Prozess-Redesign</em>: Datenproduktion neu entwerfen, um Gründe für schlechte Qualität zu eliminieren</li>
</ul>
</li>
<li>datenorientierte Strategien (reaktiv): Hauptaufgabe ist Datenbereinigung
<ul>
<li>Datenbereinigung aller Art</li>
<li>keine tiefe Analyse der Gründe für schlechte Qualität</li>
</ul>
</li>
</ul>
<h2 id="machine-learning">Machine Learning</h2>
<h3 id="aktuelle-lösung-im-ml">Aktuelle Lösung im ML</h3>
<p><strong>ML Expertise</strong> + <strong>Daten</strong> + <strong>Verarbeitung</strong></p>
<h3 id="standardprozess-für-data-mining">Standardprozess für Data Mining</h3>
<p><img src="https://i.imgur.com/PVOT1uO.png" alt="Data Mining Prozess"></p>
<h3 id="arten-der-künstlichen-intelligenz">Arten der künstlichen Intelligenz</h3>
<p><img src="https://i.imgur.com/4duMiMG.png" alt="Arten von künstlicher Intelligenz"></p>
<ul>
<li>Machine Learning erfordert kein Programmieren eigener Algorithmen zum Lernen von Strukturen und Mustern</li>
<li>Machine Learning ist eine statistische Methode (entweder überwacht, nicht überwacht oder teilweise überwacht)</li>
</ul>
<h3 id="beispiele-für-machine-learning">Beispiele für Machine Learning</h3>
<ul>
<li>Klassisches Machine Learning</li>
<li>Deep Learning</li>
<li>NLP</li>
<li>Recommendation Engines</li>
<li>Association</li>
<li>Process Mining</li>
<li>Social Network Analysis</li>
<li>Time Series Analysis</li>
</ul>
<h3 id="konzept-des-machine-learning">Konzept des Machine Learning</h3>
<ul>
<li>entweder <strong>Training</strong> oder <strong>Vorhersage</strong> (Prediction) je nach Gegebenheit der Variablen</li>
</ul>
<p><img src="https://i.imgur.com/OS4rzIy.png" alt="Machine Learning Konzept"></p>
<h3 id="komponenten-des-machine-learning">Komponenten des Machine Learning</h3>
<ul>
<li>Data</li>
<li>Model</li>
<li>System</li>
<li>Cost</li>
<li>Optimizer</li>
</ul>
<p><img src="https://i.imgur.com/lP8nPM3.png" alt="Komponenten des Machine Learning"></p>
<h3 id="learning--representation--evaluation--optimization">Learning = Representation + Evaluation + Optimization</h3>
<p><strong>Repräsentation</strong></p>
<ul>
<li>wie die Eingangsdaten zu repräsentieren sind</li>
<li>erfordert eine formale Beschreibung der Daten (z.B. lineare Gleichung oder if-then-else-Regeln)</li>
</ul>
<p><strong>Evaluation</strong></p>
<ul>
<li>Objekt, Scoring und Kostenfunktion bestimmen, wie gut ein Lernalgorithmus ist</li>
<li>interne Evaluation kann von äußerer Evaluation abweichen</li>
</ul>
<p><strong>Optimierung</strong></p>
<ul>
<li>Methode zur Suche des besten Learners aus allen Algorithmen</li>
<li>Optimizer hat eine Abwägung zwischen Performance und bestem Ergebnis</li>
<li>gute Optimizer probieren nicht jeden Learner aus</li>
</ul>
<h3 id="ml-learner-übersicht">ML Learner Übersicht</h3>
<p><img src="https://i.imgur.com/CDoetdn.png" alt="ML Learner Übersicht"></p>
<ul>
<li>Generalisierung ist sehr wichtig</li>
</ul>
<h3 id="overfitting">Overfitting</h3>
<ul>
<li>nicht genügend Daten für eine vollständige Beschreibung des Problems</li>
<li>Learner lernt zu viel</li>
<li>niedriger Trainingserror, aber hoher Testerror</li>
</ul>
<h3 id="underfitting">Underfitting</h3>
<ul>
<li>nicht genügend Modellkomplexität für eine umfassende Beschreibung des Problems</li>
<li>Learner lernt zu wenig</li>
<li>hoher Trainings- und Testerror</li>
</ul>
<h3 id="bias-und-varianz">Bias und Varianz</h3>
<p><img src="https://i.imgur.com/EQqB3DM.png" alt="Bias vs. Varianz"></p>
<h3 id="grundlegende-mathematik">Grundlegende Mathematik</h3>
<ul>
<li>Mean</li>
<li>Standardabweichung</li>
<li>Kovarianz</li>
<li>Pearson-Korrelation</li>
<li>Korrelation</li>
</ul>
<h3 id="überwachte-ml-algorithmen">Überwachte ML-Algorithmen</h3>
<ul>
<li>Unterscheidung von Verfahren der Klassifizierung (Ausgabevariable wird einer Gruppe zugeordnet) und der Regression (Ausgabevariable nimmt kontinuierliche Werte an)</li>
<li>Decision Tree</li>
<li>Ordinary Least Square Regression</li>
<li>Logistic Regression</li>
<li>Naive Bayes Classification</li>
<li>Support Vector Machines</li>
<li>Random Forest Classification</li>
<li>Gradient Boosted Trees</li>
<li>Neural Networks (Deep Learning)</li>
</ul>
<h3 id="nicht-überwachte-ml-algorithmen">Nicht überwachte ML-Algorithmen</h3>
<ul>
<li>Suche nach vorher unbekannten Mustern in den Daten</li>
<li>Cluster-Algorithmen (K-Means, DBScan)</li>
<li>Principle Component Analysis / Multidimensionales Skalieren</li>
<li>Apriori (Basket Analysis)</li>
<li>PageRank (Network Analysis)</li>
</ul>
<h3 id="informationsgewinnung">Informationsgewinnung</h3>
<ul>
<li>Informationsgewinn über die Anzahl der Informationen, die über eine zufällige Variable gewonnen wurden durch die Beobachtung einer anderen zufälligen Variablen</li>
<li><strong>Entropie</strong>: die Durchschnittsrate, ab der Informationen über eine Variable geschaffen wird
<ul>
<li>niedrige Entropie bedeutet viel Wissen</li>
</ul>
</li>
</ul>
<h3 id="feature-engineering">Feature Engineering</h3>
<ul>
<li>ein Feature ist ein individuell messbares Merkmal eines Phänomens</li>
<li>bessere Features resultieren in einfacheren robusteren Modellen</li>
</ul>
<h2 id="data-warehouse">Data Warehouse</h2>
<ul>
<li>ein Computersystem zur Speicherung und Analyse von Trends, Mustern, Korrelationen und Erkenntnissen</li>
</ul>
<h2 id="data-lake">Data Lake</h2>
<ul>
<li>ein System zur Katalogisierung und Speicherung von Daten, um schnelle iterative Analysen zu ermöglichen</li>
</ul>

