---
title: Zusammenfassung Software Engineering II
permalink: Semester_5/Software_Engineering_2/2018-12-18_zusammenfassung_md
layout: default

---

# Zusammenfassung Software Engineering II

_geschrieben am 18.12.2018 von Morten Terhart_

---

## 2 Qualitätssicherung

### 2.1 Warum testen wir?
**Ziele des Testens**
* Aufdecken von Fehlern
* Erzeugen von Vertrauen bezüglich des Qualitätsniveaus des Systems
* Liefern von Informationen zur Entscheidungsfindung
* Vorbeugen von Fehlern

**Hinweis**
&gt; _Testen erhöht nicht die Qualität der Software, sondern kann die Qualität nur messen. Die Qualität kann nur durch die Beseitigung von Fehlern erhöht werden._

### 2.2 Auswirkung
Fehlerhafte Software kann zu Schäden wie **Geld-, Zeit- oder Imageverlust** und **Personenschäden** wie Verletzung oder Tod führen.

### 2.4 Arten der Qualitätssicherung
**Qualitätssicherung**: jede geplante und systematische Maßnahme zur Erfüllung der Qualitätsanforderungen

![Qualitätssicherungsarten](https://i.imgur.com/vZ6Fz5S.jpg)_Abbildung 1: Arten der Qualitätssicherung_

konstruktive Qualitätssicherung:
* sorgt dafür, dassSoftware im Vorfeld bestimmte Eigenschaften hat
* Prinzip der maximalen konstruktiven Qualitätssicherung: Vorbeugen besser als Beheben und nicht gemachte Fehler müssen nicht behoben werden

analytische Qualitätssicherung:
* misst das existierende Qualitätsniveau der Software
* Unterscheidung von dynamischen und statischen Methoden

### 2.5 Early Error Detection
**Ziel**: Fehler in frühen Entwicklungsstufen finden

* typischerweise entstehen Fehler in einer frühen Projektphase und werden erst in einer der letzten Projektphasen, der Testphase, gefunden
* Folge: hohe Behebungskosten
* ein Fehler, der am Anfang gefunden wird, verursacht geringe Kosten
* ein Fehler, der nach dem Produktivgang gefunden wird, verursacht mehr Kosten und bewirkt, dass die Phasen davor nochmal durchlaufen werden müssen

## 3 Requirements Engineering

### 3.1 Warum erstellen wir Anforderungen?
Anforderungen an das System müssen bekannt und gut dokumentiert sein.

#### Definition der Anforderung
1. Bedingung oder Fähigkeit, die von einem Benutzer zur Lösung eines Problems oder zur Erreichung eines Ziels benötigt wird.
2. Bedingung oder Fähigkeit, die das System erfüllen muss, um vorgegebene Spezifikationen (Vertrag, Norm, Dokumente) zu erfüllen
3. dokumentierte Repräsentation einer Bedingung oder Fähigkeit nach 1. und 2.

#### Quellen für Anforderungen
* Stakeholder des Projektes (wichtigste Quelle)
* bestehende Systeme/Konzepte
* vorgegebene Spezifikationen (Dokumente, Normen, Gesetzestexte)

#### Requirements Engineering
**Definition**:
1. systematischer und disziplinierter Ansatz zur Spezifikation und zum Management von Anforderungen. Folgende Ziele:
2. relevante Anforderungen kennen, Konsens unter den Stakeholdern über die Anforderungen herstellen, Anforderungen konform zu Standards dokumentieren und zu managen
3. Wünsche und Bedürfnisse von Stakeholdern verstehen und dokumentieren, Anforderungen spezifizieren und verwalten
	* Ziel: Risiko minimieren, dass das System nicht den Wünschen und Bedürfnissen der Stakeholder entspricht

**Aufgaben**:
* Anforderungen **ermitteln**
* Anforderungen **dokumentieren**
* Anforderungen **prüfen** und **abstimmen**
* Anforderungen **verwalten**

### 3.2 Arten von Anforderungen

#### Funktionale Anforderungen
* legen die Funktionalität der Software fest
* Unterteilung in Funktions-, Verhaltens- und Strukturanforderungen

#### Qualitätsanforderungen / Nicht-funktionale Anforderungen
* legen die gewünschte Qualität des Systems fest
* meistens größerer Einfluss auf die Systemarchitektur als die funktionalen Anforderungen
* beziehen sich typischerweise auf Performance, Verfügbarkeit, Zuverlässigkeit, Skalierbarkeit und Portabilität

#### Rand- / Rahmenbedingungen
* können von Projektbeteiligten nicht beeinflusst werden
* können sich auf das System und den Entwicklungsprozess beziehen
* werden nicht umgesetzt, sondern schränken Lösungsmöglichkeiten ein

### 3.3 System und Systemkontext abgrenzen
**Systemkontext**: der Teil der Systemumgebung, der für die Definition und das Verständnis des Systems relevant sind

Zwei Abgrenzungsprozesse zur Abgrenzung des Systemkontextes:
1. **Systemabgrenzung**: Bestimmung der Systemgrenze zur Abdeckung der Teile und Aspekte des geplanten Systems
2. **Kontextabgrenzung**: Grenze des Systemkontextes zur irrelevanten Umgebung

### 3.4 Anforderungen ermitteln

#### 3.4.1 Anforderungsquellen
1. **Stakeholder**
	* eine Person oder Organisation, die direkt oder indirekt Einfluss auf das Projekt und die Anforderungen hat
	* Identifizierung relevanter Stakeholder ist zentrale Aufgabe des Requirements Engineering
	* Ausgangsbasis hierzu sind meist Vorschläge vom Management oder von Fachexperten
	* Risiken bei unvollständiger Liste an Stakeholdern
		* bestimmte Aspekte des Systems bleiben unbeachtet
		* das Projektziel wird verfehlt
		* spätere Anpassungen verursachen Mehrkosten
2. **Dokumente**
	* Informationen aus bestehenden Dokumenten für Anforderungen
	* Beispiele:
		* Normen/Standards
		* Gesetzestexte
		* branchenspezifische Dokumente
		* Fehlerberichte des Altsystems
3. **Systeme in Betrieb**
	* Alt- und Vorgängersysteme, aber auch Konkurrenzsysteme
	* Stakeholder können Altsystem ausprobieren und Erweiterungen des neuen Systems vorschlagen

#### 3.4.2 Anforderungskategorisierung nach dem Kano-Modell
Kano-Modell unterteilt Zufriedenheit der Stakeholder bezüglich der Anforderungen in drei Kategorien:
1. **Basisfaktoren**: selbstverständlich vorausgesetzte Systemmerkmale
2. **Leistungsfaktoren**: explizit geforderte Systemmerkmale
3. **Begeisterungsfaktoren**: Systemmerkmale, welche die Stakeholder nicht kennen und positiv überraschen (als nützlich erachten)

| **Kategorien** | **Wissensart** | **Ermittlungstechniken** |
|:--------------:|:--------------:|:------------------------:|
| Basisfaktoren | Unterbewusste Anforderung | Beobachtungstechniken, dokumentenzentrierte Techniken |
| Leistungsfaktoren | Bewusste Anforderung | Befragungstechniken |
| Begeisterungsfaktoren | Unbewusste Anforderung | Kreativitätstechniken |

#### 3.4.3 Ermittlungstechniken
**Ziel**: Unterstützung bei der Ermittlung von Wissen und Anforderungen der Stakeholder

1. **Beobachtungstechniken**:
	* Beobachtung der Stakeholder bei der Arbeit
	* Dokumentierung der Arbeitsschritte
	* Ermittlung potentieller Fehler, Risiken und Fragen
	* Ermittlungstechniken:
		* _Feldbeobachtung_: der Beobachter ist vor Ort bei den Anwendern des Systems und dokumentiert die unmittelbaren Arbeitsabläufe
		* _Apprenticing_: der Beobachter erlernt die Tätigkeit des Stakeholders/des Anwenders selbst
2. **Dokumentenzentrierte Techniken**:
	* verwenden Lösungen und Erfahrungen bestehender Systeme
	* bei Ablösung eines Altsystems kann gesamte Funktionalität des Altsystems identifiziert werden
	* Unterteilung in
		* _Systemarchäologie_: Informationen aus Dokumentation und Implementierung eines Altsystems ziehen
		* _Perspektivenbasiertes Lesen_: ein Dokument aus einer vorbestimmten Perspektive lesen (z.B. aus der des Testers oder Realisierers)
		* _Wiederverwendung_: einmal erarbeitete qualitative Anforderungen werden für das neue System übernommen
3. **Befragungstechniken**:
	* Informationen und Aussagen über die Anforderungen direkt von den Stakeholdern erhalten
	* entweder in Form von _Interviews_ oder _Fragebögen_ möglich
		* _Interview_: Stellen und Protokollieren von vorgegebenen Fragen in einem Gespräch, zusätzlich unbewusste Anforderungen durch geschicktes Hinterfragen aufdecken
		* _Fragebogen_: Aushändigung von offenen oder geschlossenen Fragen, die bis zu einem bestimmten Zeitpunkt zu beantworten sind
4. **Kreativitätstechniken**:
	* innovative Anforderungen entwickeln
	* erste Vision des neuen Systems festlegen
	* Begeisterungsfaktoren ermitteln
	* Unterteilung in
		* _Brainstorming_: Sammeln von Ideen in einer Gruppe und Protokollierung der Ideen ohne Kommentierung
		* _Brainstorming paradox_: Erweiterung des _Brainstorming_: Sammeln von Ergebnissen, die nicht erreicht werden sollen
		* _Perspektivenwechsel_: jeder Teilnehmer nimmt eine andere Perspektive ein (Sechs-Hut-Methode)
		* _Analogietechnik_: ähnliche Problemstellungen und Lösungen werden anhand analoger Strukturen gesucht

### 3.5 Anforderungen dokumentieren

#### 3.5.1 Arten der Dokumentation
Die Anforderungen an ein System können in drei unterschiedlichen Perspektiven dokumentiert werden:
1. **Strukturperspektive**: die statische Perspektive auf die Anforderungen an das System wird eingenommen
2. **Funktionsperspektive**: Dokumentierung der Funktionen, die Daten aus dem Systemkontext manipulieren
3. **Verhaltensperspektive**: Dokumentierung des Systems und dessen Einbettung in den Systemkontext

**Anforderungen in natürlicher Sprache**:
* die in der Praxis am häufigsten genutzte Dokumentationsform für Anforderungen
* Vorteil: Stakeholder können Anforderungen einfach lesen und Sprache ist vielseitig nutzbar
* Nachteil: Anforderungen können mehrdeutig verstanden werden

**Anforderungen durch konzeptuelle Modelle**:
* stellen die dokumentierten Anforderungen kompakter dar als natürliche Sprache
* Nachteil: nicht so universell einsetzbar
* konzeptuelle Modelle:
	* Use-Case-Diagramm
	* Klassendiagramm
	* Aktivitätsdiagramm
	* Zustandsdiagrammm

#### 3.5.2 Inhalte von Anforderungsdokumenten
* Zweck
* Systemumfang
* Stakeholder
* Referenzen
* Nutzer und Zielgruppen
* Architekturbeschreibung
* Randbedingungen

### 3.6 Anforderungen verwalten
* Anforderungen werden mit Attributen belegt, um diese zu priorisieren, Änderungen nachzuhalten und Verantwortlichkeiten zu definieren
* Anforderungen können mithilfe von Schablonen mit den Attributen dokumentiert werden

## 4 Grundlagen des Softwaretestens

### 4.1 Fehlerbegriff
**Fehler**:
* Nicht anforderungskonformes Verhalten des Systems
* Abweichung zwischen Ist- und Soll-Verhalten

**Mangel**:
* Anforderung ist nicht angemessen erfüllt
* Beeinträchtigung der Verwendbarkeit bei gleichzeitiger Erfüllung der Funktionalität

Der Fehler zieht eine Abhängigkeitskette von Fehlhandlung, Fehlerzustand und Fehlerwirkung hinter sich her:

1. **Fehlhandlung**: der Zeitpunkt, zu welchem der Fehler entsteht (meistens während der Entwicklung des Quelltextes)
2. **Fehlerzustand**: Nach Abschluss des Quelltextes wird die Fehlhandlung zu einem Fehlerzustand (z.B. falsch programmierte oder vergessene Anweisung im Programm); wird auch als _Defekt_ oder _innerer Fehler_ bezeichnet
3. **Fehlerwirkung**: Wirkung der Fehlerzustände zeigt sich bei der Ausführung des Programmes in der _Fehlerwirkung_. Der Fehler wird im Betrieb für den Tester/Anwender sichtbar; wird auch als _Defekt_, _äußerer Fehler_ oder _Ausfall_ bezeichnet

**Maskierte Fehler**:
* ein Fehlerzustand überlagert einen anderen Fehlerzustand, wodurch die Fehlerwirkung zum ersten Fehler nicht ersichtlich ist
* Fehlerwirkung tritt erst auf, wenn der zweite Fehlerzustand behoben wurde

### 4.4 Qualitätsmerkmale
Die Norm ISO/IEC 9126 ist ein Modell, um Softwarequalität sicherzustellen. Sie bezieht sich mit ihren Kriterien ausschließlich auf die Qualität der Software als Produkt und unterscheidet 6 Merkmale:
![Qualitätsmerkmale nach ISO/IEC 9126](https://i.imgur.com/iPln0GS.jpg)_Abbildung 2: Qualitätsmerkmale nach ISO/IEC 9126_

**Funktionalität**: Vorhandensein von geforderten Funktionen mit festgelegten Eigenschaften

**Zuverlässigkeit**: Fähigkeit der Software, ihr Leistungsniveau unter festgelegten Bedingungen zu bewahren

**Benutzbarkeit**: Aufwand, der zur Benutzung erforderlich ist, und individuelle Beurteilung der Benutzung durch eine Benutzergruppe

**Effizienz**: Verhältnis zwischen dem Leistungsniveau der Software und dem Umfang der eingesetzten Betriebsmittel

**Wartbarkeit**: Aufwand zur Durchführung von Änderungen (Korrekturen, Verbesserungen, Anpassungen an Änderungen)

**Übertragbarkeit**: Eignung der Software zur Übertragung in eine andere Umgebung

### 4.5 Fundamentaler Testprozess
Der fundamentale Testprozess gliedert die Testaktivitäten in fünf Hauptaktivitäten:
&#x60;&#x60;&#x60;mermaid
graph TD
  s1(&quot;Testplanung und Steuerung&quot;) &#x3D;&#x3D;&gt; s2(&quot;Testanalyse und Testenwurf&quot;)
  s2 &#x3D;&#x3D;&gt; s3(&quot;Testrealisierung und Testdurchführung&quot;)
  s3 &#x3D;&#x3D;&gt; s4(&quot;Bewertung von Endekriterien und Bericht&quot;)
  s4 &#x3D;&#x3D;&gt; s5(&quot;Abschluss der Testaktivitäten&quot;)
&#x60;&#x60;&#x60;

### 4.5.1 Testplanung und Steuerung
Zur Testplanung gehören folgende zwei Aktivitäten:
* die Definition der Testziele / Nicht-Ziele
* die Festlegung der Testaktivitäten, die notwendig sind, um Aufgabenumfang und Testziele zu erreichen

#### Begrifflichkeiten
* **Teststeuerung**: die fortlaufende Aktivität, den aktuellen Testfortschritt mit dem Plan zu vergleichen und den Status samt Abweichungen zu berichten, gegebenenfalls Korrekturmaßnahmen einleiten
* **Testziel**: ein Grund für den Entwurf und die Ausführung eines Tests
* **Teststrategie**: abstrakte Beschreibung der vorgesehenen Teststufen und der Vorgehensweise

### 4.5.2 Testanalyse und Testentwurf
* Konkretisierung der allgemeinen Testziele zu Testbedingungen und Testfällen

#### Begrifflichkeiten
* **Testbasis**: Alle Dokumente, die zur Erstellung der Testfälle nützlich sind
* **Testobjekt**: Die Komponente oder das System, das getestet wird
* **Testdaten**: Daten, die vor der Ausführung eines Tests existieren und speziell für die Tests vorhanden sind

### 4.5.3 Testrealisierung und Testdurchführung
* Konfiguration der Testumgebung, in der die Tests ausgeführt werden
* Spezifizierung von Testabläufen und Testskripts

#### Begrifflichkeiten
* **Testskript**: bezeichnet eine Testablaufspezifikation (besonders automatisiert)
* **Testszenario**: ein Dokument, das eine Folge von Schritten zur Testausführung definiert
* **Testrahmen**: eine Testumgebung mit den benötigten Treibern und Platzhaltern
* **Testsuite**: Zusammenstellung mehrerer Testfälle für den Test einer Komponente
* **Fehlernachtest**: Wiederholung aller Testfälle, die vor der Fehlerkorrektur fehlgeschlagen sind; dient der Überprüfung der Fehlerkorrektur
* **Regressionstest**: erneutes Testen eines bereits getesteten Programmes oder einer Funktionalität nach einer Änderung

### 4.5.4 Bewertung von Endekriterien und Bericht
* Testaktivitäten werden auf ihre Ziele hin untersucht
* diese Phase sollte in jeder Teststufe abgehandelt werden

### 4.5.5 Abschluss der Testaktivitäten
* Daten von abgeschlossenen Testphasen werden gesammelt und ausgewertet (Erfahrungen, Testmittel, Fakten, Zahlen)
* Testabschlussaktivitäten sind Projektmeilensteine

## 5 Testen im Softwarelebenszyklus

### 5.1 V-Modell
![V-Modell](https://i.imgur.com/uzCyC1n.jpg)_Abbildung 3: Das V-Modell_

* jede Entwurfsphase hat eine gegenüberliegende Testphase
* soll zu einer höheren Testabdeckung führen

#### Unterscheidung von Verifikation und Validierung
* **Verifikation**: prüft gegenüber der nächsthöheren Stufe, ob das Produkt die davor definierten Standards erfüllt und konform zu den Spezifikationen ist
* **Validierung**: prüft, ob das System die Anforderungen in der Praxis erfüllt

### 5.2 Scrum
* Ansatz der iterativ-inkrementellen Modelle
* typische Eigenschaften:
	* kleinere Entwicklungszyklen
	* kurze Feedbackzyklen
	* Integrations- und Regressionstests haben einen hohen Stellenwert

![Scrum](https://i.imgur.com/I3lTMVr.jpg)_Abbildung 4: Scrum_

### 5.3 Testen innerhalb von Entwicklungszyklen
Jeder Entwicklungszyklus beinhaltet einige Charakteristika für gutes Testen:
* jede Entwicklungsaktivität hat eine zugehörige Testaktivität
* jede Teststufe hat Testziele, die spezifisch für diese Stufe sind
* Analyse und Entwurf der Tests für eine Teststufe sollten während der zugehörigen Entwicklungsaktivität beginnen

### 5.4 Teststufen

#### 5.4.1 Komponententests
* **Ziel**: separat zu testende Softwareteile (Module, Programme, Objekte, Klassen) prüfen und Fehler darin finden
* Isolation der Komponente vom Rest des Systems für Testzwecke
	* meist durch Platzhalter, Treiber und Simulatoren erreicht
* kann funktionale und nicht-funktionale Aspekte prüfen
* Testern stehen beim Komponententest der Quellcode sowie die Unterstützung der Entwicklungsabteilung zur Verfügung
	* gefundene Fehlerzustände können dann sofort korrigiert werden anstatt sie formell zu behandeln
* testgetriebene Entwicklung: Testfälle vor der Implementierung der Funktionalität schreiben

#### 5.4.2 Integrationstest
* prüft die Schnittstellen zwischen Komponenten und deren Interaktionen
* mehrere Integrationsstufen mit Testobjekten unterschiedlicher Größe möglich:
	1. _Komponentenintegrationstest_: prüft das Zusammenspiel der Softwarekomponenten (Durchführung nach Komponententest)
	2. _Systemintegrationstest_: prüft das Zusammenspiel verschiedener Softwaresysteme oder zwischen Hardware und Software (Durchführung nach Systemtest), Entwicklungsteam hat hierbei oft nur die eine Seite der Schnittstelle zum Test zur Verfügung
* Basis von Integrationsstrategien sind:
	* Systemarchitektur (z.B. Top-Down oder Bottom-Up)
	* funktionale Aufgaben
	* Transaktionsverarbeitungssequenzen
	* andere Aspekte des Systems und seiner Komponenten

---

**Top-Down-Strategie**:
* Test beginnt auf der **obersten** Ebene und wird komponentenweise nach unten zu einem System zusammengefasst
* nur _Platzhalter_ und mindestens ein Treiber notwendig

**Bottom-Up-Strategie**:
* Test beginnt auf der **untersten** Ebene und wird komponentenweise nach oben zu einem System zusammengefasst
* nur _Treiber_ und mindestens ein Platzhalter notwendig

---

* Tester  sollten Systemarchitektur verstehen und Einfluss auf die Integrationsplanung nehmen können

#### 5.4.3 Systemtest
* beschäftigt sich mit dem Verhalten eines Gesamtsystems
* Testziel soll deutlich im Testkonzept festgelegt sein
* Testumgebung sollte mit der finalen Produktivumgebung möglichst übereinstimmen, um das Risiko umgebungsspezifischer Fehler zu reduzieren
* Systemtests können Tests einschließen basierend auf
	* Risikoanalysen
	* Anforderungsspezifikationen
	* Geschäftsprozesse
	* Anwendungsfälle
	* Modelle des Systemverhaltens
	* Interaktionen mit dem Betriebssystem
* Systemtests sollen funktionale und nicht-funktionale Anforderungen und die Datenqualität untersuchen

##### Begrifflichkeiten
* **Testkonzept**: ein Dokument, das u.a. den Gültigkeitsbereich, die Vorgehensweise, die Ressourcen und die Zeitplanung der beabsichtigten Tests beschreibt

#### 5.4.4 Abnahmetest
* liegt im Verantwortlichkeitsbereich der Kunden und Benutzer des Systems
* andere Stakeholder können auch beteiligt sein
* **Ziel**: Vertrauen in das System gewinnen
* Abnahmetests prüfen die Reife des Systems für den Einsatz und die Nutzung

##### Ausprägungen des Abnahmetests
* **Anwender-Abnahmetest**:
	* prüft die Tauglichkeit eines Systems zum Gebrauch durch Anwender
* **Betrieblicher Abnahmetest**:
	* Abnahme durch den Systemadministrator
		* Erstellen und Wiedereinspielen von Sicherungskopien
		* Wiederherstellbarkeit nach Ausfällen
		* Wartungsarbeiten
		* Überprüfung nach Sicherheitslücken
* **Regulatorischer und vertraglicher Abnahmetest**:
	* kundenindividuelle Software wird explizit gegen die vertraglichen Abnahmekriterien geprüft
		* Abnahmekriterien werden beim Vertragsabschluss definiert
		* auch gegen Gesetze und Standards geprüft
* **Alpha- und Beta-Test (oder Feldtest)**
	* Erhalt von Feedback von bestehenden oder potenziellen Kunden vor Marktveröffentlichung der Software
	* Alpha-Test wird am Herstellerstandort durchgeführt
	* Beta-Test wird von den Kunden am Kundenstandort durchgeführt

### 5.5 Testarten
* Testaktivitäten sind darauf ausgerichtet, das Softwaresystem entweder aus einem bestimmten Grund oder mit einem bestimmten Testziel zu prüfen

#### 5.5.1 Funktionaler Test
* das von außen sichtbare Ein-/Ausgabeverhältnis eines Testobjektes wird geprüft
* funktionale Testfälle werden mithilfe von BlackBox-Verfahren erstellt und basieren auf funktionalen Anforderungen
* funktionale Anforderungen spezifizieren das Verhalten des Systems oder der Komponente
* Erstellung von funktionalen Anforderungen anhand der ISO/IEC 9126:
	* Angemessenheit
	* Richtigkeit
	* Interoperabilität
	* Sicherheit
	* Ordnungsmäßigkeit
	* Konformität

#### 5.5.2 Nicht-funktionaler Test
* nicht-funktionale Anforderungen beschreiben Eigenschaften des funktionalen Verhaltens
* nicht-funktionales Testen kann in allen Teststufen zur Anwendung kommen
* der nicht-funktionale Test bezeichnet Testarten, die zur Prüfung von Software- und Systemmerkmalen verwendet werden
* unterschiedliche Maßstäbe zur Quantifizierung der Merkmale (z.B. Antwortzeiten beim Performancetest)
* nicht-funktionale Tests betrachten das nach außen sichtbare Verhalten
* verwenden meistens BlackBox-Testentwurfsverfahren

#### 5.5.3 Strukturbasierter Test
* kann in allen Teststufen angewendet werden
* werden am besten nach den spezifikationsorientierten Testentwurfsverfahren eingesetzt
* Testüberdeckung: Maß für Überdeckung einer Struktur durch eine Testsuite (in prozentualem Anteil angegeben)

#### 5.5.4 Fehlernachtest und Regressionstest
* **Fehlernachtest**: nach Entdeckung und Korrektur eines Fehlerzustands wird die Software erneut getestet, um die erfolgreiche Entfernung des Fehlers zu bestätigen
* **Regressionstest**: das wiederholte Testen eines bereits getesteten Programmes nach einer Modifikation
	* Ziel: Nachweis, dass die Modifikation keine neuen Fehlerzustände eingebaut hat

## 6 Dynamischer Test

### 6.1 BlackBox- vs. WhiteBox-Testverfahren
* dynamische Testverfahren gehören zur analytischen Qualitätssicherung und dienen der Fehlerfindung
* dynamischer und statischer Test unterscheiden sich dadurch, dass ein dynamischer Test die Software ausführt und ein statischer Test nicht

#### BlackBox-Test
* Innenleben/Inhalt der Software ist nicht bekannt
* die Ein- und Ausgabe des Programmes wird auf Richtigkeit überprüft
* werden nicht vom Entwickler selbst ausgeführt, sondern durch unabhängige Testinstanzen

#### WhiteBox-Test
* Programmablauf und Innenleben der Software sind bekannt
* werden durch den Entwickler selbst ausgeführt

### 6.2 BlackBox-Verfahren

#### 6.2.1 Äquivalenzklassenanalyse
* Software wird in die möglichen Eingabewerte zerlegt
* jeder Eingabewert wird in gültige und ungültige Äquivalenzklassen zerlegt

**Beispiel**
| **Äquivalenzklasse** | **Ausprägung** | **Wirkung** |
|:--------------------:|:--------------:|:-----------:|
| Aktuelles Jahr - Geburtsjahr $\geq$ 18 und Aktuelles Jahr - Geburtsjahr $\leq$ 65 | Gültige Klasse | Konto wird eröffnet |
| Aktuelles Jahr - Geburtsjahr $&lt;$ 18 | Ungültige Klasse | Konto wird nicht eröffnet, zu jung |
| Aktuelles Jahr - Geburtsjahr $&gt;$ 65 | Ungültige Klasse | Konto wird nicht eröffnet, zu alt |
| $\neq$ vierstellige Zahl | Ungültige Klasse | falsche Eingabe |

* beim Testen sollte jede Äquivalenzklasse berücksichtigt werden

#### 6.2.2 Grenzwertanalyse
* basierend auf Äquivalenzklassenanalyse wird eine Grenzwertanalyse durchgeführt
* die Grenzwerte jeder Klasse werden untersucht, da hier mit erhöhter Wahrscheinlichkeit Fehler auftreten
* Grenzwerte sind der größte und der kleinste Wert der Äquivalenzklasse
* Entwurf von Tests für gültige und ungültige Grenzwerte, ein Test für jeden Grenzwert

**Beispiel**
| **Äquivalenzklasse** | **Grenzwerte** |
|:--------------------:|:--------------:|
| Aktuelles Jahr - Geburtsjahr $\geq$ 18 und Aktuelles Jahr - Geburtsjahr $\leq$ 65 | 17, 18, 65, 66 |
| Aktuelles Jahr - Geburtsjahr $&lt;$ 18 | 17, 18 |
| Aktuelles Jahr - Geburtsjahr $&gt;$ 65 | 65, 66 |
| $\neq$ vierstellige Zahl | A, B, C, D, E, ..., Z |

Für unsere erste Äquivalenzklasse sind die Grenzwerte 17, 18, 65 und 66. Da alle Grenzwerte dort bereits Bestandteil anderer Klassen sind, können diese für die Klassen gestrichen werden.

| **Äquivalenzklasse** | **Grenzwerte** |
|:--------------------:|:--------------:|
| Aktuelles Jahr - Geburtsjahr $\geq$ 18 und Aktuelles Jahr - Geburtsjahr $\leq$ 65 | ~~17~~, 18, 65, ~~66~~ |
| Aktuelles Jahr - Geburtsjahr $&lt;$ 18 | 17, ~~18~~ |
| Aktuelles Jahr - Geburtsjahr $&gt;$ 65 | ~~65~~, 66 |
| $\neq$ vierstellige Zahl | A, B, C, D, E, ..., Z |

* Grenzwertanalyse kann in allen Teststufen angewendet werden
* hohes Potenzial, Fehlerzustände aufzudecken

#### 6.2.3 Entscheidungstabellentest
* gute Möglichkeit, um komplexe Regeln in Geschäftsprozessen zu erfassen und zu testen
* innerhalb des Systems existieren mehrere Abhängigkeiten zwischen unabhängigen Werten
* aus den Werten ergibt sich die mögliche Wirkung

**Notation für Entscheidungstabellen**:
| | Testfall 1 | Testfall 2 | Testfall 3 | ... |
|:---------|:--------:|:--------:|:-------:|:-------:|
| Bedingung 1 | :x: | :x: |     | ... |
| Bedingung 2 |     | :x: | :x: | ... |
| Bedingung 3 |     |     | :x: | ... |
| Wirkung 1   | :x: | :x: | :x: | ... |
| Wirkung 2   |     |     |     | ... |

* können genutzt werden, um mehrere Elemente aus Äquivalenzklassen zu kombinieren
	* jede Äquivalenzklasse entspricht einer Zeile in der Entscheidungstabelle
* Entscheidungstabellentest beruht auf Standardüberdeckungsgrad (pro Tabellenspalte wird mindestens ein Testfall benötigt, Abdeckung aller Kombinationen der Bedingungen)
* Vorteil: Kombinationen von Bedingungen werden aufgeführt, die andernfalls nicht getestet worden wären

#### 6.2.5 Anwendungsfallbasierter Test
* falls Anwendungsfälle in den Anforderungen beschrieben sind, können auf dieser Basis Testfälle definiert werden
* ein Anwendungsfall beschreibt die Interaktion zwischen Akteuren (Anwender oder System), die ein gewünschtes Ergebnis zur Folge hat
* Testfälle eignen sich gut, Fehlerzustände in den Prozessen während der praktischen Anwendung aufzudecken

### 6.3 WhiteBox-Verfahren

#### 6.3.1 Anweisungstest und -überdeckung
* die Anweisungen des Testobjektes werden auf Ausführung untersucht
* Testfälle müssen Quote an ausgeführten Anweisungen erfüllen oder auch alle Anweisungen ausführen
* **Anweisungsüberdeckung ($C_0$-Maß)**: Verhältnis der Anzahl ausführbarer Anweisungen, die durch Testfälle überdeckt sind, mit der Anzahl aller Anweisungen
$$
C_0 &#x3D; \frac{\text{Anzahl ausführbarer Anweisungen}}{\text{Anzahl aller Anweisungen}} \cdot 100\%
$$

#### 6.3.2 Entscheidungstest und überdeckung
* Ableitung von Testfällen zum Durchlauf bestimmter Entscheidungen
* Trennung in verschiedene Abzweigungen an Entscheidungspunkten des Programmcodes (z.B. &#x60;if&#x60;-Anweisungen)
* **Entscheidungsüberdeckung ($C_1$-Maß)**: prozentualer Anteil eines Entscheidungsergebnisses, bestimmt durch die Anzahl aller Entscheidungsausgänge, die durch Testfälle überdeckt sind, dividiert durch die Anzahl aller Entscheidungsausgänge
$$
C_1 &#x3D; \frac{\text{Anzahl ausführbarer Zweige}}{\text{Anzahl aller Zweige}} \cdot 100\%
$$
* eine Form des kontrollflussbasierten Tests
* Entscheidungsüberdeckung ist stärker als Anweisungsüberdeckung

#### 6.3.3 Bedingungstest und -überdeckung
* bei Entscheidungsüberdeckung lediglich der ermittelte Ergebniswahrheitswert berücksichtigt
* anhand dieses Wertes wird entschieden, welche Verzweigung als nächstes ausgeführt wird
* bei Bedingung aus mehreren Teilbedingungen muss die Komplexität der Bedingung berücksichtigt werden

##### Einfache Bedingungsüberdeckung
* jede Teilbedingung kann im Test die Werte &quot;wahr&quot; und &quot;falsch annehmen
* eine Bedingung kann aus mehreren Teilbedingungen bestehen, die mittels &#x60;AND&#x60; und &#x60;OR&#x60; verknüpft sind

##### Mehrfachbedingungsüberdeckung
* möglichst alle Kombinationen der Wahrheitswerte aus Teilbedingungen sollen berücksichtigt werden
* Problem: nicht alle Kombinationen können durch einen Test abgebildet werden (Beispiel: $3 \leq x \ \text{AND}\ x &lt; 5$)

##### Minimale Mehrfachbedingungsüberdeckung
* nur jede mögliche Kombination von Wahrheitswerten muss berücksichtigt werden
* beseitigt das Problem der Mehrfachbedingungsüberdeckung

#### 6.3.4 Pfadtest und -überdeckung
* fordert die Ausführung aller unterschiedlichen Pfade durch ein Testobjekt
* berücksichtigt auch Kontrollstrukturen wie Schleifen
* **Pfadüberdeckung ($C_2$-Maß)**: Verhältnis der Anzahl aller Pfade, die durch Testfälle überdeckt sind, mit der Anzahl aller Pfade des Programmes
$$
C_2 &#x3D; \frac{\text{Anzahl ausführbarer Pfade}}{\text{Anzahl aller Pfade}} \cdot 100\%
$$
* Vorsicht: Bei Schleifen zählt jede mögliche Anzahl von Schleifenwiederholungen als ein möglicher Pfad.
	* 100%-ige Überdeckung aller Pfade ist nicht erreichbar

## 7 Statischer Test

### 7.1 Statische Prüftechniken
* statische Tests basieren auf der manuellen Überprüfung (Review) oder automatisierten Quellcode-Analyse des Programmes, ohne das Programm auszuführen
* Reviews können lange vor dynamischen Tests durchgeführt werden
	* gefundene Fehlerzustände können kostengünstig behoben werden
* statische Prüftechniken finden eher die Ursachen von Fehlerwirkungen (Fehlerzustände) als die Fehlerwirkungen

### 7.2 Reviewprozess
* wichtigste Aufgabe des Reviews: Prüfung und Kommentierung eines Arbeitsergebnisses
* jedes Arbeitsergebnis kann einem Review unterzogen werden:
	* Anforderungsspezifikationen
	* Designspezifikationen
	* Quellcode
	* Testkonzepte
	* Testspezifikationen
	* Testfälle
	* Testskripte
	* Anwenderhandbücher
	* Websites

**Vorteile von Reviews**:
* frühe Aufdeckung und Korrektur von Fehlerzuständen
* Verbesserung der Entwicklungsproduktivität
* reduzierte Enwicklungsdauer, reduzierte Testkosten und -dauer
* können Lücken in Anforderungen aufdecken

**Arten von Reviews**:
* _formell_: (in Anlehung an IEEE 729) formal geplanter und strukturierter Analyse- und Bewertungsprozess
* _informell_: fehlende schriftliche Vorgaben für Gutachter
* _systematisch_: Einbindung eines Reviewteams, dokumentierte Reviewergebnisse und dokumentierte Review-Abläufe)

#### 7.2.1 Aktivitäten eines formalen Reviews
Ein typisches formales Review besteht aus folgenden sechs Hauptaktivitäten:

&#x60;&#x60;&#x60;mermaid
graph TD
  s1(&quot;Planen&quot;) &#x3D;&#x3D;&gt; s2(&quot;Kick-Off&quot;)
  s2 &#x3D;&#x3D;&gt; s3(&quot;Individuelle Vorbereitung&quot;)
  s3 &#x3D;&#x3D;&gt; s4(&quot;Reviewsitzung&quot;)
  s4 &#x3D;&#x3D;&gt; s5(&quot;Überarbeiten&quot;)
  s5 &#x3D;&#x3D;&gt; s6(&quot;Nachbereiten&quot;)
&#x60;&#x60;&#x60;

1. **Planen** (beteiligt: Manager, Moderator)
	* Festlegen von Review-/Prüfkriterien
	* Auswahl der beteiligten Personen und Rollen
	* Festlegen der Eingangs- und Endekriterien
	* Auswahl der zu prüfenden Dokumententeile
2. **Kick-Off** (beteiligt: alle Teilnehmer)
	* Verteilen der Dokumente
	* Erläutern der Ziele, des Prozesses und der Dokumente für die Teilnehmer
3. **Individuelle Vorbereitung** (beteiligt: Moderator, Gutachter)
	* Vorbereiten der Reviewsitzung durch Prüfung der Dokumente
	* Notieren potenzieller Fehlerzustände, Fragen und Kommentare
4. **Reviewsitzung** (beteiligt: Moderator, Autor, Gutachter, Protokollant)
	* Diskussion und Protokollierung
	* Festhalten von Fehlerzuständen, Empfehlungen zum Umgang mit diesen oder Entscheidungen über Fehlerzustände
	* Prüfen, Bewerten und Protokollieren von Problemen
5. **Überarbeiten** (beteiligt: Autor)
	* Beheben der gefundenen Fehlerzustände durch den Autor
	* Protokollieren des aktualisierten Fehlerstatus
6. **Nachbereiten** (beteiligt: Moderator, Gutachter)
	* Prüfen, ob Fehlerzustände zugewiesen wurden
	* Sammeln von Metriken
	* Prüfen von Endekriterien

#### 7.2.2 Rollen und Verantwortlichkeiten
* **Manager**: Die Person, die über die Durchführung eines Reviews entscheidet und dieses zeitlich einplant
* **Moderator**: Die Person, die das Review eines Dokumentes leitet; übernimmt Reviewplanung, Leitung der Sitzung und die Nachbereitung der Sitzung
* **Autor**: Der Verfasser oder die Person, die für das zu prüfende Dokument hauptverantwortlich ist
* **Gutachter**: Personen mit einem spezifischen technischen oder fachlichen Hintergrund (auch _Prüfer_ oder _Inspektoren_), die im Prüfobjekt Befunde identifizieren und beschreuben können
* **Protokollant**: Die Person, die alle Ergebnisse, Probleme und offenen Punkte dokumentiert

#### 7.2.3 Reviewarten
Ein Softwareprodukt oder ein Arbeitsergebnis kann Gegenstand von mehreren Reviews sein:

**Informelles Review**: 
* kann in Form des Programmierens in Paaren (_pair programming_) durchgeführt werden oder ein technischer Experte unterzieht Entwurf und Quellcode einem Review

**Walkthrough**:
* systematisches Durchgehen des Quellcodes und Erläuterung durch den Autor
* kann in Form von Szenarien, Probeläufen oder im Kreis gleichgestellter Mitarbeiter stattfinden

**Technisches Review**:
* dokumentierter und definierter Fehlerfindungsprozess, der gleichgestellte Mitarbeiter und technische Experten sowie optional Personen aus dem Management einschließt

## 8 Testmanagement

### 8.1 Testmanagement Prozessrahmen
Das Testmanagement umfasst folgende zwei Haupttätigkeiten:
1. alle Aktivitäten der Planung, der Basis- und Detailkonzeption sowie der Steuerung eines Testprojektes
2. die Aktivitäten der Steuerung und Organisation sowie Koordination des Testablaufs in den Umsetzungsphasen

![Testmanagement Prozessrahmen](https://i.imgur.com/oniOacN.jpg)_Abbildung 5: Testmanagement Prozessrahmen_

### 8.2 Testvorgehen konzipieren und planen

#### 8.2.1 Zu testendes System definieren
* Testumfang des Projektes verstehen und definieren
* Testgegenstand wird konkretisiert (z.B. die Applikation, Schnittstellen, Datenflüsse und Funktionen)

#### 8.2.2 Testziele und Testarten festlegen
* Definition der Qualitätsziele im Rahmen des Tests
* Festlegung der Qualitätsmerkmale zur Prüfung des Testgegenstandes
* jedes relevante Qualitätsmerkmal ist durch eine spezifische Testart nachzuweisen

#### 8.2.3 Teststufen festlegen
* identifizierte Testgegenstände enstehen in der Entwicklung schrittweise und werden nacheinander integriert
* jeder Testgegenstand soll die bestmögliche Integrationsstufe zur Testdurchführung erhalten

![Teststufen festlegen](https://i.imgur.com/IhfcrLf.jpg)_Abbildung 6: Teststufen festlegen_

#### 8.2.4 Testobjekte definieren
* Testobjekte sind die konkreten Testgegenstände, wie sie in der Systemabgrenzung identifiziert und den Testintegrationsstufen zugeordnet wurden
* jede Teststufe besitzt ihre eigenen Testobjekte

![Testobjekte definieren](https://i.imgur.com/lNLTEqn.jpg)_Abbildung 7: Testobjekte definieren_

#### 8.2.5 Testmethodik festlegen
* Testgegenstände und Testziele sind in ihrer fachlichen Kritikalität unterschiedlich gewichtet
* abhängig von Gewichtung ermöglicht man die Skalierung der Testintensität durch die Definition unterschiedlicher Testmethoden

![Testmethodik festlegen](https://i.imgur.com/a5IqwjS.jpg)_Abbildung 8: Testmethodik festlegen_

#### 8.2.6 Risikoanalyse durchführen
* die identifizierten Testobjekte werden im Hinblick auf fachliche Kritikalität bewertet
* diese Information steuert die Priorisierung der Testaktivitäten, in der methodischen Konzeption deren Intensität

![Risikoanalyse durchführen](https://i.imgur.com/xqWxK4q.jpg)_Abbildung 9: Risikoanalyse durchführen_

#### 8.2.7 Testplanung durchführen
* zeitliche Einplanung der erforderlichen Testaktivitäten und der dafür benötigten Ressourcen
* im weiteren Sinne auch inhaltliche Umsetzungsplanung der Scope- und Zielvorgaben

