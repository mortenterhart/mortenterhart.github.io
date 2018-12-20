---
title: Zusammenfassung Datenbanken 2
permalink: Semester_5/Datenbanken_2/2018-12-19_zusammenfassung_md
layout: default

---

# Zusammenfassung Datenbanken 2

_geschrieben am 19.12.2018 von Morten Terhart_

---

## Datenmanagement und Modellierung
* **Daten**: Informationen, die gut zu bewegen und verarbeiten sind
* **Information**: ein Impuls, der eine Bedeutung in einem Kontext für den Empfänger hat

### Historische Datenmodellierung
* 1970: Edgar F. Codd führt mit SQLv1.0 das relationale Datenmodell ein
* 1976: Peter Chen führt das Entity-Relationship-Modell ein

### Datenmanagement
Definition nach DAMA-DMBOK: Data Management Body of Knowledge (Edition 2):
&gt; **Datenmanagement** ist die Entwicklung, Ausführung und Überwachung von Plänen, Richtlinien, Programmen und Techniken, die den Wert der Daten und die Informationen innerhalb ihres Lebenszyklus liefern, kontrollieren, schützen und verbessern.

Kurze Definition:
&gt; **Datenmanagement** liefert, kontrolliert, schützt und verbessert den Wert von Daten.

### Prinzipien des Datenmanagement
* Daten haben einmalige Eigenschaften
* Datenmanagement bedeutet das Management von Datenqualität
* Datenmanagement ist übergreifend funktional (es braucht spezielle Fähigkeiten und Fachwissen)

### Body of Knowledge
* Knowledge Areas beschreiben den Umfang und den Kontext von Datenmanagementaktivitäten
* die Knowledge Areas beinhalten fundamentale Ziele und Prinzipien des Datenmanagement

#### Data Governance
* gibt einen Überblick über Datenmanagement durch Erstellung eines Systems aus Entscheidungsrechten

#### Wieviel sind Daten wert?
* ungenutzte Daten sind wertlos und kosten Geld
* Wert der Daten kann gemessen werden an
	* Marktwert
	* Ersetzungskosten
	* erkannte Möglichkeiten
	* Verkauf von Daten
	* Risikokosten

#### Data Architecture
* definiert den Entwurf für Datenmanagement durch Anlehnung an organisatorische Strategien
* besteht aus drei Ebenen:
	* **Konzeptionelles Modell**
	* **Logisches Modell**
	* **Physikalisches Modell**

#### Modelling and Design
* der Prozess der Entdeckung, Analyse und Repräsentation in einer spezifischen Form, einem _Datenmodell_

#### Data Storage and Operations
* beinhaltet das Design, die Implementation und die Unterstützung gespeicherter Daten, um ihren Wert zu erhöhen

#### Database Processing
* ACID (**A**tomicity, **C**onsistency, **I**solation, **D**urability)
* BASE (**B**asically **A**vailable, **S**oft State, **E**ventual Consistency)
* CAP-Theorem (**C**onsistency, **A**vailability, **P**artition Tolerance)

#### Data Security
* gewährleistet die Vertraulichkeit und Geheimhaltung von Daten

#### Data Integration and Interoperability
* beinhaltet Prozesse zur Übertragung und Konsolidierung von Daten zwischen Datenspeichern, Anwendungen und Organisationen

#### Document and Content Management
* beinhaltet die Planung, Implementation und Kontrolltätigkeiten zur Verwaltung des Lebenszyklus der Daten

#### Reference and Master Data
* beinhaltet die fortlaufende Abstimmung und Instandhaltung von kritischen Kerndaten

#### Data Warehouse and Business Intelligence
* beinhaltet die Planung, Implementation und Kontrollprozesse zur Verwaltung von Daten, die zur Entscheidungsfindung genutzt werden

#### Metadata
* beinhaltet die Planung, Implementation und Kontrolltätigkeiten zum autorisierten Zugriff auf Daten hoher Qualität

#### Data Quality
* beinhaltet die Planung und Implementation von Techniken zur Messung und Verbesserung der Datenqualität

### Data Modelling
* in der Praxis muss eine Modellierung immer zu einem Ergebnis führen

#### Überblick über die 3 Ebenen der Datenmodellierung
&#x60;&#x60;&#x60;mermaid
graph TD
  A(&quot;Konzeptionell&quot;) &#x3D;&#x3D;&gt; B(&quot;Logisch&quot;)
  B &#x3D;&#x3D;&gt; C(&quot;Physikalisch&quot;)
&#x60;&#x60;&#x60;

1. **Konzeptionell**: technologieunabhängige Spezifikation der Daten in der Datenbank
2. **Logisch**: Umwandlung des konzeptionellen Modells in Strukturen, die durch ein DBMS implementiert werden können
3. **Physikalisch**: fasst alle Änderungen zusammen, die für die erwünschte Performance nötig sind

#### Verantwortlichkeiten Data Modelling
![Data Modelling Responsibilities](https://i.imgur.com/NvjgMD9.png)
#### Wie sieht ein gutes Datenmodell aus?
Faktoren für ein gutes Datenmodell:
* Vollständigkeit
* Durchsetzung von Unternehmensregelungen
* Flexibilität
* Stabilität
* Wiederverwendbarkeit
* Konforme Standards
* Eleganz
* Anwendbarkeit
* keine Redundanz

#### Praktischer Datenmodellierungsansatz
* nur zwei Stufen der Datenmodellierung

![Praktischer Datenmodellierungsansatz](https://i.imgur.com/PfBUa7t.png)
* erster Schritt: Anforderungen des Unternehmens in Form eines Statement of Requirements sammeln
	* ein ausgeschriebenes Anforderungsdokument anfertigen
	* der Modellierer kann die Anforderungen nur in einem Modell aufgreifen oder die Detailtiefe erhöhen
* ein konzeptionelles Datenmodell kann das Statement of Requirements nicht ersetzen
* Anforderungen können in ein logisches Datenmodell (_Logical Data Model_) transformiert werden
	* Entity-Relationship-Modell (ERM) oft eingesetzt und Konvention
	* Normalisierung der Datenbank zur Organisierung der Daten in Diagrammen

## Relationale Modellierung

### 12 Regeln von Edgar F. Codd
1. **Informationsregel**: Daten in einer Datenbank müssen Werte in einer Tabellenzelle sein
2. **Regel des garantierten Zugriffs**: jedes Datenelement muss erreichbar sein
3. **Behandlung von &#x60;NULL&#x60;-Werten**: &#x60;NULL&#x60; kann bedeuten: Daten fehlen, Daten sind nicht bekannt oder Daten sind nicht erreichbar
4. **Aktiver Online-Katalog**: Die Strukturbeschreibung einer Datenbank muss in einem Online-Katalog, dem _Data Dictionary_, gespeichert sein
5. **Daten-Subsprache**: Zugriff auf Daten über eine Sprache, die Datendefinition, Datenmanipulation und Transaktionsmanagement unterstützt
6. **Aktualisierung von Ansichten**: Alle Ansichten der Datenbank müssen aktualisiert werden können
7. **High-Level Insert, Update und Delete**: muss einzelne Zeilen, Vereinigungen, Schnittmengen und andere Operationen unterstützen
8. **Unabhängigkeit der physikalischen Daten**: Daten in der Datenbank müssen unabhängig von den zugreifenden Anwendungen sein
9. **Unabhängigkeit der logischen Daten**: logische Daten in der Datenbank müssen unabhängig von der Benutzeransicht sein
10. **Unabhängigkeit der Integrität**: alle Integritätsbedingungen müssen unabhängig voneinander modifiziert werden können
11. **Unahbängigkeit der Verteilung**: Der Endanwender darf nicht sehen können, dass die Daten über mehrere Standorte verteilt werden
12. **Non-Subversion-Regel**: ein System mit einer Schnittstelle nach außen darf nicht Sicherheits- und Integritätsvereinbarungen umgehen

### Normalisierung
* ein formaler Prozess, um Änderungsanomalien und redundante Daten zu vermeiden

#### Zero Normal Form
* die Trennung der logischen Struktur vom physikalischen Inhalt

#### Erste Normalform
* jeder Wert in einer Spalte hat seine eigene Zeile, keine Mengen an Werten innerhalb einer Zeile

#### Zweite Normalform
* alle Nicht-Schlüsselattribute dürfen nur vom primären Schlüssel abhängen

#### Dritte Normalform
* alle Nicht-Schlüsselattribute müssen direkt vom primären Schlüssel abhängen

### Design-Elemente eines ERM-Diagramms
* **Entität**: eine Person, ein Gegenstand oder ein Ort, über den viele Instanzen von Daten gesammelt werden
* **Beziehung**: eine Assoziation zwischen zwei Entitäten
* **Kardinalität**: die maximale Anzahl, die eine Entität mit einer anderen Entität assoziiert werden kann
* **Modalität**: die minimale Anzahl, die eine Entität mit einer anderen Entität assoziiert werden kann

### Physikalisches Datenmodell
* der Schritt vom logischen zum physikalischen Datenmodell ist die Transformation von ERM-Diagramm zu einem Datenbankmodell

## Dimensionierte Modellierung

### Definition
&gt; **Dimensionerte Modellierung** ist eine logische Design-Technik, die die Daten in einem intuitiven standardmäßigen Bezugssystem präsentiert, welches einen sehr schnellen Zugriff erlaubt.

## Data Vault

### Definition
&gt; **Data Vault** ist ein detailliertes Nachverfolgen historischer Daten und besteht aus verknüpften normalisierten Tabellen, die eine oder mehrere funktionale Geschäftsbereiche unterstützen.

* ein hybrider Ansatz, der die Vorzüge der dritten Normalform und des Sternschemas (_Star Schema_) vereint
* flexibles Design
* skalierbar
* konsistent
* an Bedürfnisse des Unternehmens anpassbar

### Bestandteile
Data Vault besteht aus drei Hauptkomponente:
1. **Hubs**: _Business Keys_
2. **Links**: Assoziationen zwischen Hubs
3. **Satellites**: enthalten Details zu Hubs und Links und bieten somit wichtigen Kontext

### Trennung der Komponenten
* die drei Komponenten werden strikt voneinander getrennt
![Trennung der Data-Vault-Komponenten](https://i.imgur.com/dtzGeyO.png)
### Vorteile der Trennung
* jede Komponente kann ohne eine Wirkung auf andere Komponenten verwaltet und modifiziert werden
* Änderungen der Entitätsbeziehungen wirken sich nicht auf den Data Vault aus
* alle Komponenten sind für Erweiterungen entkoppelt
* Lademechanismus ist für alle Komponenten einheitlich

### Wann wird welche Technik eingesetzt?
![Wann wird welche Technik eingesetzt?](https://i.imgur.com/P2QYGCc.png)
* **OLTP**: Online Transaction Processing (Operational System)
* **OLAP**: Online Analytical Processing (Data Warehouse)

**OLTP vs. OLAP**
![OLTP vs OLAP](https://i.imgur.com/iuG1eRm.png)
## Data Flow and Preparation

### ETL (Extract, Transform, Load)
* **Extraktion**: der Prozess der Zusammenführung von Daten aus mehreren Quellen und Vorbereitung für die nächste Phase auf einer angehobenen Ebene
* **Transformation**: eine kritische Funktion, die Daten von einer Form in eine andere Form überträgt (z.B. Neuformatierung, Konvertierung von Einheiten etc.)
* **Loading**: erfolgreiches Einfügen der Daten in eine Zieldatenbank, ein Data Warehouse oder ein Datenspeicher

![ETL](https://i.imgur.com/AIc6Ptu.png)
### Data Wrangling
* der Prozess der Transformation von Rohdaten in ein anderes Format, sodass sie angemessener und wertvoller für Auswertungsprozesse wie Analytics sind

### Data Prep
* Behandlung von chaotischen, inkosistenten und nicht standardisierten Datenformaten
* Versuch der Kombination von Daten aus mehreren Datenquellen

### Lean Startup
![Lean Startup](https://i.imgur.com/3JRysnC.png)
## Data Visualization

### Ästhetik
Arten der Informationen in einem Diagramm:
* unterschiedliche Position (z.B. x- und y-Koordinate)
* unterschiedliche Form
* unterschiedliche Größe
* unterschiedliche Farbe
* unterschiedliche Linienstärke
* unterschiedlicher Linientyp

### Arten der Visualisierung
#### Balkendiagramme
![Balkendiagramme](https://i.imgur.com/UWxDHfK.png)
#### Histogramme
![Histogramme](https://i.imgur.com/hnTM1QP.png)
#### Liniendiagramme
![Liniendiagramme](https://i.imgur.com/3XACTGw.png)
#### Flächendiagramme
![Flächendiagramme](https://i.imgur.com/knPpTyQ.png)
#### Streudiagramme
![Streudiagramme](https://i.imgur.com/3dC4pJF.jpg)
#### Kartendiagramme
![Kartendiagramme](https://i.imgur.com/Io9jd0Z.png)
#### Andere Diagrammarten
![Andere Diagrammarten](https://i.imgur.com/MKzzjwL.png)
### Problem des Overplotting
![Problem des Overplotting](https://i.imgur.com/Fy7agJB.png)
### 4 Prinzipien für ein gutes Dashboard
1. Die 5-Sekunden-Regel: Das Dashboard sollte alle relevanten Informationen in 5 Sekunden liefern
2. Logisches Layout: Signifikante Analysen nach oben, Trends in die Mitte und Details nach unten ins Dashboard (invertierte Pyramide)
3. Minimalismus: Weniger ist mehr, nicht mehr als 5 bis 9 Visualisierungen
4. Die richtigen Visualisierungen auswählen

## Data Quality
&gt; Data is the new oil.

### Definition
nach ISO1:
&gt; das Maß, nach dem Daten den Benutzeranforderungen entsprechen

### Cluster der Datenqualität
* Exaktheit: Korrektheit
* Vollständigkeit: alle relevanten Aspekte
* Redundanz: minimalst, Kompaktheit
* Lesbarkeit: Verständlichkeit
* Zugänglichkeit: Verfügbarkeit, Zugriff
* Konsistenz: Kohäsion, Kohärenz
* Nützlichkeit: Vorteile für Benutzer
* Vertrauen: Zuverlässigkeit

### Dimensionen und Metriken
* verschiedene Metriken für eine Dimension definierbar
* schwierigste Aufgabe ist die präzise Definition einer Dimension

### Vereinbarung von Vor- und Nachteilen (Trade-Offs)
* Exaktheit, Vollständigkeit und Konsistenz vs. Aktualität
* Konsistenz vs. Vollständigkeit

### Data Quality Management
**Definition**: koordinierte Aktivitäten zur Steuerung einer Organisation mit Bezug zu Datenqualität

### Klassischer Ansatz zum Data Quality Management
![Klassischer Ansatz Data Quality Management](https://i.imgur.com/dRhZrZN.png)
### Strategien zur Verbesserung der Datenqualität
* prozessorientierte Strategien (proaktiv): Fokus auf der Verbesserung der Datenproduktion
	* _Prozesskontrolle_: Verbesserung der Datenproduktion durch Anreicherung mit Kontrollprozeduren
	* _Prozess-Redesign_: Datenproduktion neu entwerfen, um Gründe für schlechte Qualität zu eliminieren
* datenorientierte Strategien (reaktiv): Hauptaufgabe ist Datenbereinigung
	* Datenbereinigung aller Art
	* keine tiefe Analyse der Gründe für schlechte Qualität

## Machine Learning

### Aktuelle Lösung im ML
**ML Expertise** + **Daten** + **Verarbeitung**

### Standardprozess für Data Mining
![Data Mining Prozess](https://i.imgur.com/PVOT1uO.png)
### Arten der künstlichen Intelligenz
![Arten von künstlicher Intelligenz](https://i.imgur.com/4duMiMG.png)
* Machine Learning erfordert kein Programmieren eigener Algorithmen zum Lernen von Strukturen und Mustern
* Machine Learning ist eine statistische Methode (entweder überwacht, nicht überwacht oder teilweise überwacht)

### Beispiele für Machine Learning
* Klassisches Machine Learning
* Deep Learning
* NLP
* Recommendation Engines
* Association
* Process Mining
* Social Network Analysis
* Time Series Analysis

### Konzept des Machine Learning
* entweder **Training** oder **Vorhersage** (Prediction) je nach Gegebenheit der Variablen

![Machine Learning Konzept](https://i.imgur.com/OS4rzIy.png)
### Komponenten des Machine Learning
* Data
* Model
* System
* Cost
* Optimizer

![Komponenten des Machine Learning](https://i.imgur.com/lP8nPM3.png)
### Learning &#x3D; Representation + Evaluation + Optimization
**Repräsentation**
* wie die Eingangsdaten zu repräsentieren sind
* erfordert eine formale Beschreibung der Daten (z.B. lineare Gleichung oder if-then-else-Regeln)

**Evaluation**
* Objekt, Scoring und Kostenfunktion bestimmen, wie gut ein Lernalgorithmus ist
* interne Evaluation kann von äußerer Evaluation abweichen

**Optimierung**
* Methode zur Suche des besten Learners aus allen Algorithmen
* Optimizer hat eine Abwägung zwischen Performance und bestem Ergebnis
* gute Optimizer probieren nicht jeden Learner aus

### ML Learner Übersicht
![ML Learner Übersicht](https://i.imgur.com/CDoetdn.png)
* Generalisierung ist sehr wichtig

### Overfitting
* nicht genügend Daten für eine vollständige Beschreibung des Problems
* Learner lernt zu viel
* niedriger Trainingserror, aber hoher Testerror

### Underfitting
* nicht genügend Modellkomplexität für eine umfassende Beschreibung des Problems
* Learner lernt zu wenig
* hoher Trainings- und Testerror

### Bias und Varianz
![Bias vs. Varianz](https://i.imgur.com/EQqB3DM.png)
### Grundlegende Mathematik
* Mean
* Standardabweichung
* Kovarianz
* Pearson-Korrelation
* Korrelation

### Überwachte ML-Algorithmen
* Unterscheidung von Verfahren der Klassifizierung (Ausgabevariable wird einer Gruppe zugeordnet) und der Regression (Ausgabevariable nimmt kontinuierliche Werte an)
* Decision Tree
* Ordinary Least Square Regression
* Logistic Regression
* Naive Bayes Classification
* Support Vector Machines
* Random Forest Classification
* Gradient Boosted Trees
* Neural Networks (Deep Learning)

### Nicht überwachte ML-Algorithmen
* Suche nach vorher unbekannten Mustern in den Daten
* Cluster-Algorithmen (K-Means, DBScan)
* Principle Component Analysis / Multidimensionales Skalieren
* Apriori (Basket Analysis)
* PageRank (Network Analysis)

### Informationsgewinnung
* Informationsgewinn über die Anzahl der Informationen, die über eine zufällige Variable gewonnen wurden durch die Beobachtung einer anderen zufälligen Variablen
* **Entropie**: die Durchschnittsrate, ab der Informationen über eine Variable geschaffen wird
	* niedrige Entropie bedeutet viel Wissen

### Feature Engineering
* ein Feature ist ein individuell messbares Merkmal eines Phänomens
* bessere Features resultieren in einfacheren robusteren Modellen

## Data Warehouse
* ein Computersystem zur Speicherung und Analyse von Trends, Mustern, Korrelationen und Erkenntnissen

## Data Lake
* ein System zur Katalogisierung und Speicherung von Daten, um schnelle iterative Analysen zu ermöglichen

